<template>
    <div class="container">
        <h1 class="center green-text text-darken-2">Arbeiten</h1>

        <div class="center">
            <a class="waves-effect waves-light btn green darken-1" href="/"><i class="material-icons left">home</i>Beranda</a>
        </div>

        <div style="height: 10px;"></div>

        <h3 class="center">Riwayat Freelancing</h3>

        <div style="height: 20px;"></div>

        <!-- Verification -->
        <div v-if="verifying"
                class="center flow-text amber-text text-darken-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/stonary8.appspot.com/o/images%2Fothers%2Fverify.png?alt=media&token=0c0a0ea2-8036-4501-a05b-4029e639813b" alt="Verifying You"
                    class="responsive-img" style="margin-top: 3em;">
            <h1>Hold On</h1>
            <p>We Are Trying To Verify You ...</p>
        </div>
        <div v-else>
            <div v-if="signedIn" class="black-text">
                <div v-if="history.length == 0"
                    class="flow-text center">
                    <h4 class="red-text">
                        Anda Belum Pernah Menyelesaikan Job Freelance
                    </h4>
                    <p class="black-text">
                        Silahkan cari Job Freelance di halaman utama tau di search box. Good Luck!
                    </p>

                    <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/other%2Fbaby.png?alt=media&token=fc352ac3-f3b2-4c4a-944d-4f800d4c5e96"
                        alt="Good Luck" class="responsive-img">
                </div>

                <div class="card horizontal z-depth-2 hoverable"
                     v-for="oneHistory in history"
                     v-bind:key=oneHistory.id>
                    <div class="card-stacked">
                        <div class="card-content capitalize">
                            <div class="item-box">
                                <span class="card-title"><b>{{ oneHistory.title }}</b></span>

                                <br>
                                <p><b>Penyelenggara:</b> {{ oneHistory.host }}</p>
                                <br>
                                <p><b>Waktu Pengerjaan:</b> {{ oneHistory.execution }}</p>
                                <br>
                                <p class="justify">
                                    <b>Deskripsi Pekerjaan:</b> {{ oneHistory.description }}
                                </p>
                                <br>
                                <p><b>Hasil:</b> {{ oneHistory.result }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Access denied for unsigned in user -->
            <div v-else class="flow-text center">
                <p>
                    Sorry ...
                </p>
                <p>
                    You have to <a href="/sign-up" class="indigo-text"><b>Sign Up</b></a> or 
                    <a href="/sign-in" class="indigo-text"><b>Sign In</b></a> 
                    to create an account first in order to access this page.
                </p>
                <img alt="So sad" class="responsive-img"
                    src="https://firebasestorage.googleapis.com/v0/b/stonary8.appspot.com/o/images%2Fothers%2Fcrying.png?alt=media&token=03c68086-aaa2-43b2-ab55-3a206f4afeb9">
            </div>
        </div>

        <div style="height: 300px;"></div>
    </div>
</template>

<script>
import auth from '../firebase/auth'; 
import db from '../firebase/firestore';

export default {
    data() {
        return {
            signedIn: false,
            verifying: false,

            history: 
            [
                {
                    title: '',
                    host: '',
                    execution: '',
                    description: '',
                    result: ''
                }
            ]
        }
    },
    mounted() {
        var vm = this;

        auth.onAuthStateChanged(function(user) { 
            if(user) {
                // User is signed in.
                vm.signedIn = true;
                vm.verifying = false;

                vm.history = [];
                db.collection('history').doc(user.uid).collection('history')
                    .get().then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            // doc.data() is never undefined for query doc snapshots
                            vm.history.push(doc.data());
                        });
                    })
            }
            else {
                // User is signed out.
                vm.signedIn = false;
                vm.verifying = false;
            }
        });
    }
}
</script>

<style lang="scss" scoped>

</style>
