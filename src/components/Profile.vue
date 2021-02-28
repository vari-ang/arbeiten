<template>
    <div class="container">
        <h1 class="center green-text text-darken-2">Arbeiten</h1>

        <div class="center">
            <a class="waves-effect waves-light btn green darken-1" href="/"><i class="material-icons left">home</i>Beranda</a>
        </div>

        <div style="height: 10px;"></div>

        <!-- Liniar Preloader -->
        <div class="progress green lighten-4"
            style="margin-top: 3em;"
            v-if="verifying">
            <div class="indeterminate green"></div>
        </div>

        <h3 class="center">Biodata Diri Anda</h3>

        <!-- Verification -->
        <div v-if="verifying"
             class="center flow-text amber-text text-darken-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/stonary8.appspot.com/o/images%2Fothers%2Fverify.png?alt=media&token=0c0a0ea2-8036-4501-a05b-4029e639813b" alt="Verifying You"
                 class="responsive-img" style="margin-top: 3em;">
            <h1>Hold On</h1>
            <p>We Are Trying To Verify You ...</p>
        </div>
        <div v-else>
            <!-- Input Field -->
       
            <div class="row z-depth-2"
                v-if="signedIn">
                <section class="flow-text">
                    <form action="#" style="margin-top: 2.5em;">
                        <div v-if="user.status == 'mahasiswa'">
                            <div class="row">
                                <p class="flow-text" style="padding: 15px 0 0 15px"><b>Data Pribadi</b></p>

                                <div class="input-field col s12">
                                    <input id="nrp" type="number"
                                        v-model="user.nrp"
                                        disabled>
                                    <label for="nrp" class="active">NRP</label>
                                </div>

                                <div class="input-field col s12">
                                    <input id="name" type="text"
                                        v-model="user.name">
                                    <label for="name" class="active">Nama</label>
                                </div>

                                <div class="input-field col s12">
                                    <input id="email" type="email" class="validate"
                                        v-model="user.email">
                                    <label for="email" class="active">Email</label>
                                    <span id="email-helper" class="helper-text" 
                                        data-error="Your email seems invalid" 
                                        data-success="Your email seems valid">
                                            
                                    </span>
                                </div>

                                <div class="input-field col s12">
                                    <input id="univ" type="text"
                                        v-model="user.univ"
                                        disabled>
                                    <label for="univ" class="active">Universitas</label>
                                </div>
                            </div>

                            <div class="row">
                                <p class="flow-text" style="padding: 15px 0 0 15px"><b>Prestasi Akademik</b></p>
                                <div class="col s12">
                                    IPK:
                                    <div class="input-field inline">
                                        <input type="number" class="validate" disabled
                                            v-model="user.ipk">
                                    </div>
                                </div>
                                <div class="col s12">
                                    IPKm (Tanpa E):
                                    <div class="input-field inline">
                                        <input type="number" class="validate" disabled
                                            v-model="user.ipkm">
                                    </div>
                                </div>
                                <div class="col s12">
                                    SKS Kumulatif:
                                    <div class="input-field inline">
                                        <input type="number" class="validate" disabled
                                            v-model="user.sks">
                                    </div>
                                </div>
                                <div class="col s12">
                                    IPS Terakhir:
                                    <div class="input-field inline">
                                        <input type="number" class="validate" disabled
                                            v-model="user.ips">
                                    </div>
                                </div>
                                <div class="col s12">
                                    Status Mahasiswa:
                                    <div class="input-field inline">
                                        <input type="text" disabled
                                            v-model="user.statusMahasiswa">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="user.status == 'boss'">
                            <div class="row">
                                <p class="flow-text" style="padding: 15px 0 0 15px"><b>Data Pribadi</b></p>

                                <div class="input-field col s12">
                                    <input id="name2" type="text"
                                        v-model="user.name">
                                    <label for="name2" class="active">Nama</label>
                                </div>

                                <div class="input-field col s12">
                                    <input id="email2" type="email" class="validate"
                                        v-model="user.email">
                                    <label for="email2" class="active">Email</label>
                                    <span id="email-helper" class="helper-text" 
                                        data-error="Your email seems invalid" 
                                        data-success="Your email seems valid">
                                            
                                    </span>
                                </div>
                            </div>

                            <div class="row">
                                <p class="flow-text" style="padding: 15px 0 0 15px"><b>Data Pekerjaan</b></p>
                                <div class="col s12">
                                    Jabatan Anda:
                                    <div class="input-field inline">
                                        <input type="text" v-model="user.jabatan">
                                    </div>
                                </div>
                                <div class="col s12">
                                    Nama Perusahaan: 
                                    <div class="input-field inline">
                                        <input type="text" v-model="user.namaPrsh">
                                    </div>
                                </div>
                                <div class="col s12">
                                    Bidang Perusahaan:
                                    <div class="input-field inline">
                                        <input type="text" v-model="user.bidangPrsh">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Reset Password -->
                        <div class="center">
                            <a id="reset-password-btn"
                                class="waves-effect waves-light btn-small amber darken-4"
                                style="margin-bottom: 2em;"
                                v-on:click="changePassword">
                                    GANTI PASSWORD
                            </a>
                        </div>
                    </form>
                </section>
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

            <!-- EDIT PROFILE BUTTON -->
             
            <!-- <div class="center-align" style="margin-top:2em;">
                <a id="submit-btn" class="waves-effect waves-light btn-large green lighten-1"
                    v-on:click="save">
                    <i class="material-icons left">save</i>SIMPAN
                </a>
            </div> -->

            <!-- Liniar Preloader -->
            <div class="progress green lighten-4"
                style="margin-top: 3em;"
                v-if="loading">
                <div class="indeterminate green"></div>
            </div>
        </div>

        <div style="height: 300px;"></div>
    </div>
</template>

<script>
import auth from '../firebase/auth'; 
import db from '../firebase/firestore';

export default {
  components: {
    
  },
  data () {
      return {
            loading: false,

            user: {
                name: 'Loading ...',
                email: 'Loading ...',

                jabatan: 'Loading ...',
                namaPrsh: 'Loading ...',
                bidangPrsh: 'Loading ...'
            },

            name: '',
            signedIn: false,
            verifying: true,
      }
  },
  created() {
        var vm = this;

        auth.onAuthStateChanged(function(user) { 
            if(user) {
                // User is signed in.
                vm.signedIn = true;
                vm.verifying = false;

                db.collection('users').doc(user.uid).get().then(function(doc) {
                    if(doc.exists) {
                        vm.user = doc.data();
                    }
                });
            }
            else {
                // User is signed out.
                vm.signedIn = false;
                vm.verifying = false;
            }
        });
    },
  methods: {
      save() {

      },
      changePassword() {
          auth.onAuthStateChanged(function(user) { 
                if(user) {
                    // Disable reset password button
                    $('#reset-password-btn').addClass('disabled');

                    auth.sendPasswordResetEmail(user.email)
                    .then(function() {
                        // Email sent.
                        M.toast(
                            {
                                html: 'Kami sudah mengirimkan email untuk mengganti password ke email Anda. Silahkan Anda cek.', 
                                classes: 'green rounded'
                            }
                        );

                        // Enable reset password button
                        $('#reset-password-btn').removeClass('disabled');
                    })
                    .catch(function(error) {
                        // An error happened.
                        console.error(error.message);

                        M.toast(
                            {
                                html: 'Error mengganti password. Silahkan coba lagi atau hubungi Admin.', 
                                classes: 'red rounded'
                            }
                        );

                        // Enable reset password button
                        $('#reset-password-btn').removeClass('disabled');
                    });   
                }
            });
      }
  },
  computed: {
      
  }
}

import {init} from './initialize';
$(document).ready(function(){
    // Initialize components
    init();
});
</script>

<style lang="scss" scoped>

</style>
