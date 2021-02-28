<template>
    <div>
        <h1 class="center green-text text-darken-2">Arbeiten</h1>

        <div class="center">
            <a class="waves-effect waves-light btn green darken-1" href="/"><i class="material-icons left">home</i>Beranda</a>
        </div>

        <section>
            <!-- IMAGE COVER -->
            <img id="cover-img" class="responsive-img"
                v-bind:src="job.img"> 

            <div class="container flow-text">
                <h2>{{ job.title }}</h2>
                 <span class="badge red lighten-2 black-text"
                      data-badge-caption="">{{ job.difficulty }}</span>
                <br>
                <span class="badge white lighten-2 amber-text"
                      data-badge-caption="">
                      <div v-rating="job.rating"></div>
                </span>
                <p>Oleh: {{ job.namaPrsh }}</p>
                <p class="black-text flow-text justify">
                    {{ job.description }}
                </p>
                <p>Dimulai dari {{ job.startingPrice }}</p>
            </div>

            <div class="container flow-text" style="margin-top: 2.5em;">
                <h4 class="green-text text-darken-4">Syarat Pendaftaran</h4>

                <ul class="collection">
                    <li class="collection-item"
                        v-for="(syarat, index) in job.syarat"
                        v-bind:key=syarat.id>
                        {{ index + 1 }}. {{ syarat }}
                    </li>
                </ul>
            </div>

            <!-- TAB -->
            <div id="tab" class="container section justify">

                <h4 class="green-text text-darken-4">Paket Pilihan</h4>

                <p class="black-text flow-text">
                    Anda bisa memilih salah atau lebih jenis paket pekerjaan desain web yang kami sediakan.
                </p>

                <div class="row">
                    <!-- <div class="col s12">
                        <ul class="tabs white green-text">
                            <li class="tab col s4 white"
                                v-for="onePacket in job.packet"
                                v-bind:key=onePacket.id>
                                <a class="active green-text white" v-bind:href="'#' + onePacket.header">{{ onePacket.header }}</a>
                            </li>
                        </ul>
                    </div> -->

                    <div class="col s12"
                         v-for="onePacket in job.packet"
                         v-bind:key=onePacket.id
                         v-bind:id="'#' + onePacket.header">
                            <br>
                            <h5 class="green-text text-darken-4">{{ onePacket.title }}</h5>
                            <br>
                            <p class="black-text flow-text">
                                {{ onePacket.description }}
                            </p>
                            <p class="flow-text">
                                <span class="green-text">Rentang harga (sesuai dengan penilaiaan admin atas hasil Anda): </span>
                                <b>{{ onePacket.price }}</b>
                            </p>
                            <p class="black-text flow-text">
                                {{ onePacket.note }}
                            </p>
                    </div>
                </div>
            </div>

            <!-- SUBMIT FORM -->
            <div id="submit" class="container flow-text section justify">      
                <form action="#">
                    <div class="row">
                        <div class="col s12 l6">
                            <h4 class="green-text text-darken-4">Jangan Ragu Untuk Mendaftar</h4>
                            <p class="flow-text">
                                Gunakanlah kesempatan ini untuk mengasah pengalaman Anda selagi masih berkuliah & banggakan teman, orang tua Anda!  
                            </p>
                            <ul class="collection">
                                <li class="collection-item"
                                    v-for="oneBonusPrsh in job.bonusPrsh"
                                    v-bind:key=oneBonusPrsh.id>
                                    <p class="flow-text">{{ oneBonusPrsh }}</p>
                                </li>
                            </ul>
                        </div>
                        <div id="input-field" class="col s12 l6 push-l1">
                             <div class="input-field">
                                <p>Pilih Paket Job Freenlance:</p>
                                <form action="#">
                                    <p v-for="onePacket in job.packet"
                                       v-bind:key=onePacket.id>
                                        <label>
                                            <input type="checkbox" v-bind:value="onePacket.title"
                                                   v-model="jobRegistration.packets" />
                                            <span>{{ onePacket.title }}</span>
                                        </label>
                                    </p>
                                </form>
                            </div>
                            
                            <div class="input-field" style="margin-top: 2em;">
                                <i class="material-icons prefix">contacts</i>
                                <input id="icon_prefix" type="text" class="validate"
                                       v-model="jobRegistration.others.contact">
                                <label for="icon_prefix">Kontak (Line/ WA/ IG) Aktif Lainnya (Opsional)</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">insert_comment</i>
                                <input id="icon_telephone" type="text" class="validate"
                                       v-model="jobRegistration.others.comment">
                                <label for="icon_telephone">Komentar atau Pesan Tambahan</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">date_range</i>
                                <input id="date" type="text" class="datepicker"
                                       v-model="jobRegistration.others.estimation">
                                <label for="date">Estimasi Waktu Pengerjaan</label>
                            </div>
                            
                            <p><span class="green-text text-darken-2"><b>Bonus dari Arbeiten:</b></span></p>

                            <p>Selamat Anda berhak mendapatkan sebuah hadiah jika Anda berhasil menyelesaikan pekerjaan ini.</p>

                            <p class="flow-text" style="margin-top: 2em;">Pilih Satu Bonus:</p>
                            <p v-for="oneBonus in job.bonus"
                               v-bind:key=oneBonus.id>
                                <label>
                                    <input name="group1" type="radio" v-bind:value="oneBonus"
                                           v-model="jobRegistration.bonus" />
                                    <span>{{ oneBonus }}</span>
                                </label>
                            </p>
                        </div>         
                    </div>
                </form>

                <div class="center-align">
                    <button id="register-btn"
                            class="btn waves-effect waves-light indigo" type="submit" name="action"
                            v-on:click="register">
                        Daftar<i class="material-icons right">send</i>
                    </button>

                    <p class="flow-text green-text text-darken-4"><b>NOTE: Per 10 Mei 2019, Arbeiten mengambil komisi sebesar 2% dari setiap transaksi yang terjadi.</b></p>
                </div>

                <!-- Liniar Preloader -->
                <div class="progress green lighten-4"
                    style="margin-top: 3em;"
                    v-if="loading">
                    <div class="indeterminate green"></div>
                </div>
            </div>
        </section>

        <div style="height: 100px;"></div>
    </div>
</template>

<script>
import auth from '../firebase/auth';
import db from '../firebase/firestore';

export default {
   data() {
       return {
           id: this.$route.params.id,
           loading: false,

           job: {
            img: '',
            title: 'Loading ...',
            namaPrsh: 'Loading ...',
            type: '',
            description: 'Loading ...',
            startingPrice: 'Loading ...',
            difficulty: 'Loading ...',
            rating: 'Loading ...',
            syarat: ['Loading ...', 'Loading ...', 'Loading ...'],
            packet: [
                {
                    header: 'Loading...',
                    title: 'Loading ...',
                    description: 'Loading ...',
                    price: 'Loading ...',
                    note: 'Loading ...'
                },
                {
                    header: 'Loading...',
                    title: 'Loading ...',
                    description: 'Loading ...',
                    price: 'Loading ...',
                    note: 'Loading ...'
                },
                {
                    header: 'Loading...',
                    title: 'Loading ...',
                    description: 'Loading ...',
                    price: 'Loading ...',
                    note: 'Loading ...'
                }
            ],
            bonusPrsh: ['Loading ...', 'Loading ...', 'Loading ...'],
            bonus: ['Loading ...', 'Loading ...', 'Loading ...']
           },

           jobRegistration: {
               packets: [],
               others: {
                   contact: '',
                   comment: '',
                   estimation: '',
               },
               bonus: '',

                // Job
                jobId: '',
                title: '',
                namaPrsh: '',
                img: '',
                date: 0,
                rating: '',
                description: '',
                startingPrice: '',
                status: 'MENUNGGU'
           }
       }
   },
   mounted() {
       var vm = this;

       db.collection('jobs').doc(vm.id).get().then(function(doc) {
            if(doc.exists) {
                // Set merchant data
                vm.job = doc.data(); 
            }
            else {
                // Alert requested merchant is not exists
                M.toast(
                    {
                        html: 'Job yang Anda cari tidak dapat ditemukan', 
                        classes: 'red rounded'
                    }
                );
            }
        })
        .catch(function(error) {
            console.error(error.message);

            // Alert error message
            M.toast(
                {
                    html: 'Mohon maaf terjadi Error. Silahkan coba kembali atau hubungi Admin.', 
                    classes: 'red rounded'
                }
            );
        });
   },
   methods: {
       register() {
           var vm = this;

            auth.onAuthStateChanged(function(user) {
                if (user) {

                    // Cek kelengkapan kelengkapan
                    if(vm.jobRegistration.packets.length != 0 && vm.jobRegistration.others.comment && 
                        vm.jobRegistration.others.estimation && vm.jobRegistration.bonus) { console.log(vm.jobRegistration);
                        
                        // Cek user verified
                        db.collection('users').doc(user.uid).get().then(function(doc) {
                            if(doc.exists) {
                                if(doc.data().verified) {
                                    // Cek apakah pernah mendaftar job ini sebelumnya
                                    db.collection('jobRegistrations').doc(user.uid).collection('registrations')
                                        .where('jobId', '==', vm.id)
                                        .get().then(function(querySnapshot) {
                                            if(querySnapshot.size < 1) {

                                                $('#register-btn').addClass('disabled');
                                                vm.loading = true;

                                                vm.jobRegistration.jobId = vm.id;
                                                vm.jobRegistration.title = vm.job.title;
                                                vm.jobRegistration.img = vm.job.img;
                                                vm.jobRegistration.namaPrsh = vm.job.namaPrsh;
                                                vm.jobRegistration.date = new Date().getTime();
                                                vm.jobRegistration.rating = vm.job.rating;
                                                vm.jobRegistration.description = vm.job.description;
                                                vm.jobRegistration.startingPrice = vm.job.startingPrice;

                                                db.collection('jobRegistrations').doc(user.uid).collection('registrations').doc(vm.id).set(vm.jobRegistration)
                                                    .then(function() {
                                                        $('#register-btn').removeClass('disabled');
                                                        vm.loading = false;

                                                        M.toast(
                                                            {
                                                                html: 'Anda sudah terdaftar untuk Job Freelance ini. Kami akan menghubungi Anda segera.', 
                                                                classes: 'green rounded'
                                                            }
                                                        );
                                                    })
                                                    .catch(function(error) {
                                                        $('#register-btn').removeClass('disabled');

                                                        console.error(error.message);
                                                        vm.loading = false;

                                                        // Alert error message
                                                        M.toast(
                                                            {
                                                                html: 'Mohon maaf terjadi Error. Silahkan coba kembali atau hubungi Admin.', 
                                                                classes: 'red rounded'
                                                            }
                                                        );
                                                    });
                                            }
                                            else {
                                                // Alert error message
                                                M.toast(
                                                    {
                                                        html: 'Anda sudah pernah mendaftar untuk Job Freelance ini sebelumnya dan Job belum selesai dikerjakan.', 
                                                        classes: 'red rounded'
                                                    }
                                                );
                                            }
                                        });
                                }
                                else {
                                    // Alert error message
                                    M.toast(
                                        {
                                            html: 'Maaf Anda belum terverified. Mohon tunggu verifikasi dari Admin.', 
                                            classes: 'red rounded'
                                        }
                                    );
                                }
                            }
                        });   
                    }
                    else {
                        // User is signed out.
                        M.toast(
                            {
                                html: 'Mohon isi data - data yang diperlukan.', 
                                classes: 'red rounded'
                            }
                        );
                    }
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

import {init} from './initialize';
$(document).ready(function() {
    init();

    $('.tabs').tabs();

    // change underline color
    $(".tabs>.indicator").css("background-color", '#2e7d32');
});
</script>

<style lang="scss" scoped>
#cover-img {
    max-height: 600px;
    min-width: 100%;
    margin-top: 1.5em;
}

/* input field on large screen (desktop) */
@media only screen and (min-width: 992px) {
    #input-field .input-field {
        margin-top: 10px;
    }
}

/* label focus color */
.input-field input[type=text]:focus + label, 
.input-field input[type=email]:focus + label {
    color: #81c784 !important;
}

/* label underline focus color */
.input-field input[type=text]:focus, .input-field input[type=email]:focus {
    border-bottom: 1px solid #81c784 !important;
    box-shadow: 0 1px 0 0 #81c784 !important;
}

/* valid color */
.input-field input[type=text].valid, .input-field input[type=email].valid {
    border-bottom: 1px solid #81c784;
    box-shadow: 0 1px 0 0 #81c784;
}

/* invalid color */
.input-field input[type=text].invalid, .input-field input[type=email].invalid {
    border-bottom: 1px solid red;
    box-shadow: 0 1px 0 0 red;
}

/* icon prefix focus color */
.input-field .prefix.active {
    color: #81c784;
}

/* CHECKBOX */
input[type="checkbox"] + span:before{
    border: 2px solid green !important;
    background: transparent !important;
}

input[type="checkbox"]:checked + span:before{
    border: 2px solid transparent !important;
    border-bottom: 2px solid green !important;
    border-right: 2px solid green !important;
    background: transparent !important;
}
</style>
