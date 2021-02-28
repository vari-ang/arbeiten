<template>
    <div class="container">
        <h1 class="center green-text text-darken-2">Arbeiten</h1>

        <div class="center">
            <a class="waves-effect waves-light btn green darken-1" href="/"><i class="material-icons left">home</i>Beranda</a>
        </div>

        <div class="center">
            <div style="height: 30px;"></div>

            <h2>{{ skill.title }}</h2>
            <h5>By: {{ skill.userName }}</h5>

            <div style="height: 15px;"></div>
            
            <p>{{ skill.description }}</p>
            <p>Level kemampuan: {{ skill.level }}</p>
            
            <p>Pengalaman: {{ skill.experience }}</p>
            
            <p>Sertifikasi: </p>

            <!-- Bukti sertifikasi -->
            <img v-for="img in skill.imgs"
                v-bind:key=img.id 
                class="certificate" 
                v-bind:src="img" alt="">
            
            <p>Penawaran harga dimulai dari {{ skill.startingPrice }}</p>

            <div style="height: 40px;"></div>

            <div>
                <button id="bid-btn" class="btn waves-effect waves-light indigo" 
                        type="submit" name="action"
                        v-on:click="bid">
                    Bid
                </button>

                <!-- Liniar Preloader -->
                <div class="progress green lighten-4"
                    style="margin-top: 3em;"
                    v-if="loading">
                    <div class="indeterminate green"></div>
                </div>
            </div>

            <div style="height: 100px;"></div>
            </div>
        </div>
</template>

<script>
import auth from '../firebase/auth';
import db from '../firebase/firestore';

export default {
    data() {
        return {
            id: this.$route.params.id,

            userUid: '',
            skillId: '',

            loading: false,
            skill: {
                title: 'Loading...',
                description: 'Loading...',
                userName: 'Loading...',
                level: 'Loading...',
                startingPrice: 'Loading...',
                experience: 'Loading...',
            },
            freelanceBidding: {},

            freelanceBiddingMhs: { // Ditampilkan di halaman mahasiswa bila ada perusahaan yg membid
                bidId: '',
                docIdBoss: '',
                personName: '',
                personEmail: '',
                personJabatan: '',
                namaPrsh: '',
                bidangPrsh: '',
                skillName: ''
            } 
        }
    },
    created() {
        var vm = this;

        // Pisahkan id (user uid - id skillList)
        var arrSplit = vm.id.split('-');
        vm.userUid = arrSplit[0];
        vm.skillId = arrSplit[1];
        
        // Get skill object from firestore
        db.collection('skillList').doc(vm.userUid).collection('list').doc(vm.skillId).get().then(function(doc) {
            if (doc.exists) {
                vm.skill = doc.data();
            } else {
                // doc.data() will be undefined in this case
                console.error("No such document!");
            }
        }).catch(function(error) {
            console.error("Error getting document:", error);
        });
    },
    methods: {
        bid() {
            var vm = this;

            auth.onAuthStateChanged(function(user) {
                if (user) {            
                    // Cek apakah pernah mendaftar job ini sebelumnya
                    db.collection('freelanceBidding').doc(user.uid).collection('bidding')
                        .where('bidId', '==', vm.id)
                        .get().then(function(querySnapshot) {
                            if(querySnapshot.size < 1) {
                                
                                $('#bid-btn').addClass('disabled');
                                vm.loading = true;                        

                                // Dapatkan data perusahaan terlebih dahulu
                                db.collection('users').doc(user.uid).get().then(function(doc) {
                                    if (doc.exists) {
                                        var batch = db.batch();

                                        vm.freelanceBidding.bidId = vm.id;
                                        vm.freelanceBidding.title = vm.skill.title;
                                        vm.freelanceBidding.userName = vm.skill.userName;
                                        vm.freelanceBidding.description = vm.skill.description;
                                        vm.freelanceBidding.date = new Date().getTime();
                                        vm.freelanceBidding.level = vm.skill.level;
                                        vm.freelanceBidding.experience = vm.skill.experience;
                                        vm.freelanceBidding.startingPrice = vm.skill.startingPrice;
                                        vm.freelanceBidding.status = "MENNUNGGU";

                                        // Tambahkan ke firestore untuk perusahaan
                                        var bossDocRef = db.collection('freelanceBidding').doc(user.uid).collection('bidding').doc(vm.id),
                                            bossDocRefId = bossDocRef.id;
                                        batch.set(bossDocRef, vm.freelanceBidding);
                                        
                                        vm.freelanceBiddingMhs.bidId = vm.id;
                                        vm.freelanceBiddingMhs.docIdBoss = user.uid;
                                        vm.freelanceBiddingMhs.personName = doc.data().name;
                                        vm.freelanceBiddingMhs.personEmail= doc.data().email;
                                        vm.freelanceBiddingMhs.personJabatan = doc.data().jabatan;
                                        vm.freelanceBiddingMhs.namaPrsh = doc.data().namaPrsh;
                                        vm.freelanceBiddingMhs.bidangPrsh = doc.data().bidangPrsh;
                                        vm.freelanceBiddingMhs.skillName = vm.skill.title;

                                        // Tambahkan di firestore untuk mahasiswa
                                        var mhsDocRef = db.collection('jobRegistrations').doc(vm.userUid).collection('bidding').doc(bossDocRefId);
                                        batch.set(mhsDocRef, vm.freelanceBiddingMhs);
                                        
                                        batch.commit().then(function() {
                                            M.toast(
                                                {
                                                    html: 'Anda berhasil melakukan bid untuk Freelance ini. Kami akan menghubungi Anda segera.', 
                                                    classes: 'green rounded'
                                                }
                                            );

                                            // Remove disabled class
                                            $('#bid-btn').removeClass('disabled');
                                            vm.loading = false;
                                        })
                                        .catch(function(error) {
                                            // Alert error message
                                            console.error(error.message);

                                            M.toast(
                                                {
                                                    html: 'Error melakukan bidding. Silahkan coba kembali atau hubungi Admin.', 
                                                    classes: 'red rounded'
                                                }
                                            );

                                            // Remove disabled class
                                            $('#bid-btn').removeClass('disabled');
                                            vm.loading = false;
                                        });
                                    } else {
                                        // doc.data() will be undefined in this case
                                        console.error("No such document!");
                                    }
                                }).catch(function(error) {
                                    console.log("Error getting document:", error);
                                });
                            }
                            else {
                                // Alert error message
                                M.toast(
                                    {
                                        html: 'Anda sudah pernah melakukan bid untuk Freelance ini sebelumnya dan Freelance belum selesai dikerjakan.', 
                                        classes: 'red rounded'
                                    }
                                );
                            }
                        });                                                           
                }
                else {
                    // User is signed out.
                    M.toast(
                        {
                            html: 'Anda harus <a href="/sign-in"><b>&nbsp; Sign In &nbsp;</b></a> terlebih dahulu.' +
                                    'Atau, <a href="/sign-up"><b>Sign Up</b></a> untuk membuat akun.', 
                            classes: 'red rounded'
                        }
                    );
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
img.certificate { 
    border: 2px solid green;
    min-width: 250px;
    max-width: 600px;
    width: 100%;
    height: 200px;
}
</style>

