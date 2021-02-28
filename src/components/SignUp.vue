<template>
    <div class="container">
        <div v-if="!success">
            <header>
                <!-- HEADER -->
                <h3 class="center-align"><a href="/" class="green-text">Arbeiten</a></h3>
                <div class="center">
                    <a href="/"><img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/logo.jpg?alt=media&token=35d0b234-aa29-4fc2-9aa8-bf29813c85f3" alt="" width="175px" height="150px"></a>
                </div>
                <blockquote class="center flow-text" style="border-left: 5px solid green;">
                    A Freelance App For College Student
                </blockquote>
            </header>
            
            <section>
                <div class="row">
                    <form class="col s12">
                        <p class="flow-text"><b>Buat Akun Baru</b></p>

                        <div class="row">
                            <div class="col s12">
                            <ul class="tabs">
                                <li class="tab col s6"><a class="active" href="#tab1">Mahasiswa</a></li>
                                <li class="tab col s6"><a href="#tab2">Pencari Freelance</a></li>
                            </ul>
                            </div>

                            <div id="tab1" class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="name" type="text"
                                            v-model="mhs.name">
                                        <label for="name">Nama</label>
                                    </div>               
                                    <div class="input-field col s12">
                                        <input id="email" type="email" class="validate"
                                            v-model="mhs.email">
                                        <label for="email">Email</label>
                                        <span id="email-helper" class="helper-text" 
                                            data-error="Your email seems invalid" 
                                            data-success="Your email seems valid">
                                                
                                        </span>
                                    </div>
                                </div>

                                <div class="file-field input-field">
                                    <div class="btn">
                                        <i class="material-icons right">add_a_photo</i>
                                        <span>KHS</span>
                                        <input type="file" multiple accept="image/*" ref="files" v-on:change="handleImages">
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" placeholder="Masukkan foto - foto Kartu Hasil Studi (KHS) Anda">
                                    </div>
                                </div>

                                <!-- Thumbnails -->
                                <ul id="preview" class="item-image" style="margin-bottom: 2em;">
                                    <li>
                                        
                                    </li>
                                </ul>

                                <div class="row" style="margin-top: 1em;">
                                    <div class="input-field col s12">
                                        <input id="password" type="password" class="validate"
                                            v-model="mhs.password"
                                            v-on:blur="inputPassword('mhs')">
                                        <label for="password">Password</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="re-password" type="password" class="validate"
                                            v-model="mhs.rePassword"
                                            v-on:blur="inputRePassword('mhs')">
                                        <label for="re-password">Ketik Ulang Password</label>
                                    </div>
                                </div>

                                 <!-- SIGN UP BUTTON -->
                                <div class="center-align">
                                    <a id="sign-up-btn"
                                    v-bind:class="buttonStyle"
                                    v-on:click="signUp('mhs')">
                                        <i class="material-icons left">person</i>Sign Up
                                    </a>
                                </div>
                            </div>
                            <div id="tab2" class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="name2" type="text"
                                            v-model="boss.name">
                                        <label for="name2">Nama Pendaftar</label>
                                    </div>
                                    <div class="input-field col s12">
                                        <input id="jabatan2" type="text">
                                        <label for="jabatan2">Jabatan Pendaftar</label>
                                    </div>               
                                    <div class="input-field col s12">
                                        <input id="nama_perusahaan2" type="text">
                                        <label for="nama_perusahaan2">Nama Perusahaan</label>
                                    </div>
                                    <div class="input-field col s12">
                                        <input id="bidang_perusahaan2" type="text">
                                        <label for="bidang_perusahaan2">Bidang Perusahaan</label>
                                    </div>
                                </div>
                
                                <div class="row" style="margin-top: 1em;">
                                    <div class="input-field col s12">
                                        <input id="email2" type="email" class="validate"
                                            v-model="boss.email">
                                        <label for="email2">Email</label>
                                        <span id="email-helper2" class="helper-text" 
                                            data-error="Your email seems invalid" 
                                            data-success="Your email seems valid">
                                                
                                        </span>
                                    </div>
                                    <div class="input-field col s12">
                                        <input id="password2" type="password" class="validate"
                                            v-model="boss.password"
                                            v-on:blur="inputPassword('boss')">
                                        <label for="password2">Password</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="re-password2" type="password" class="validate"
                                            v-model="boss.rePassword"
                                            v-on:blur="inputRePassword('boss')">
                                        <label for="re-password2">Ketik Ulang Password</label>
                                    </div>
                                </div>

                                 <!-- SIGN UP BUTTON -->
                                <div class="center-align">
                                    <a id="sign-up-btn"
                                    v-bind:class="buttonStyle"
                                    v-on:click="signUp('boss')">
                                        <i class="material-icons left">person</i>Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <!-- Liniar Preloader -->
            <div class="progress green lighten-4"
                style="margin-top: 3em;"
                v-if="loading">
                <div class="indeterminate green"></div>
            </div>

            <!-- Link to Sign In page -->
            <p class="flow-text center-align">
                Sudah Punya Akun? 
                    <a href="/sign-in/" class="green-text">
                        <b>Sign In.</b>
                    </a>
                
            </p>
        </div>
        
        <!-- Display Sucessful field -->
        <div v-if="success" class="center flow-text">
            <h2 class="green-text">"Selamat Anda sudah berhasil melakukan Sign Up"</h2>
            <br>
            <img alt="Horrayy!" class="responsive-img" 
                 src="https://firebasestorage.googleapis.com/v0/b/stonary8.appspot.com/o/images%2Fothers%2Fsuccess.png?alt=media&token=d439549a-8c41-429a-8208-b5f03a6f5f38">
            <p>
                Email verifikasi sudah dikirim ke email Anda. 
                Tolong cek email Anda dan
                <b class="green-text"> verifikasi akun baru Anda.</b>
            </p>
            <p><b>Note:</b> <em>Email verifikasi bisa memakan waktu sampai beberapa menit dan pastikan bahwa email verifikasi tidak berada di Junk/ Spam.</em></p>
            <p class="green-text">
                Anda sedang diarahkan ke halaman Sign In.
            </p>
        </div>

        <div style="height: 150px;"></div>
    </div>
</template>

<script>
import auth from '../firebase/auth'; 
import db from '../firebase/firestore';
import storage from '../firebase/storage';

import handleImages from '../mixins/handleImages';
import uploadPhotos from '../mixins/uploadPhotos';

export default {
    data() {
        return {
            loading: false,
            success: false, // flag variable for success sign up

            mhs: {
                name: '',
                email: '',
                password: '',
                rePassword: '',
                passwordValid: false,
                rePasswordValid: false
            },
            boss: {
                nama: '',
                jabatan: '',
                namaPrsh: '',
                bidangPrsh: '',
                email: '',
                password: '',
                rePassword: '',
                passwordValid: false,
                rePasswordValid: false
            }
        }
    },
    mixins: [handleImages, uploadPhotos],
    methods: {
        inputPassword(subject) {
            var vm = this;

            if(subject == 'mhs') {
                 // Password length should be between 6 to 16
                if(vm.mhs.password.length < 6 || vm.mhs.password.length > 16) {
                    vm.mhs.passwordValid = false;
                    M.toast(
                        {
                            html: 'Panjang password harus 6 sampai 16 karakter', 
                            classes: 'red rounded'
                        }
                    );
                }
                else {
                    vm.mhs.passwordValid = true;
                }
            }
            else if(subject == 'boss') {
                // Password length should be between 6 to 16
                if(vm.boss.password.length < 6 || vm.boss.password.length > 16) {
                    vm.boss.passwordValid = false;
                    M.toast(
                        {
                            html: 'Panjang password harus 6 sampai 16 karakter', 
                            classes: 'red rounded'
                        }
                    );
                }
                else {
                    vm.boss.passwordValid = true;
                }
            }
        },
        inputRePassword(subject) {
            var vm = this;

            if(subject == 'mhs') {
                // Retype password value should match password
                if(vm.mhs.password != vm.mhs.rePassword) {
                    vm.mhs.rePasswordValid = false;
                    M.toast(
                        {
                            html: 'Tolong pastikan nilai Password dengan Re-type password adalah sama', 
                            classes: 'red rounded'
                        }
                    );
                }
                else {
                    vm.mhs.rePasswordValid = true;
                }
            }
            else if(subject == 'boss') {
                // Retype password value should match password
                if(vm.boss.password != vm.boss.rePassword) {
                    vm.boss.rePasswordValid = false;
                    M.toast(
                        {
                            html: 'Tolong pastikan nilai Password dengan Re-type password adalah sama', 
                            classes: 'red rounded'
                        }
                    );
                }
                else {
                    vm.boss.rePasswordValid = true;
                }
            }
        },
        signUp(subject) {
            var vm = this;

            if(subject == 'mhs') {
                // Only process if no empty value
                if(vm.mhs.email && vm.mhs.password && vm.mhs.rePassword) {

                    if(vm.mhs.password.length >= 6 && vm.mhs.password.length <= 16) {
                        vm.mhs.passwordValid = true;

                        if(vm.mhs.password == vm.mhs.rePassword) {
                            // cek apakah user mengirim KHS
                            if(vm.$refs.files.files.length != 0) {
                                // Disable button
                                $('#sign-up-btn').addClass('disabled');
                                vm.loading = true;

                                auth.createUserWithEmailAndPassword(vm.mhs.email, vm.mhs.password)
                                .then(function() {
                                    // If user is successfully registered

                                    // Get current user
                                    auth.onAuthStateChanged(function(user) {
                                        if(user) {
                                            // Send verification email
                                            user.sendEmailVerification().then(function() {
                                                user.updateProfile({
                                                    displayName: vm.mhs.name,
                                                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/stonary8.appspot.com/o/images%2Fuser%2Fuser.png?alt=media&token=b2e4d193-7e74-4c8d-9dca-a54889bcb623'
                                                });

                                                // Add new user on firestore
                                                db.collection('users').doc(user.uid).set({
                                                    name: vm.mhs.name,
                                                    icon: 'https://firebasestorage.googleapis.com/v0/b/stonary8.appspot.com/o/images%2Fuser%2Fuser.png?alt=media&token=b2e4d193-7e74-4c8d-9dca-a54889bcb623',
                                                    email: user.email,
                                                    status: 'mahasiswa',
                                                    verified: false,
                                                    university: 'Belum terverifikasi',
                                                    
                                                    ipk: '',
                                                    ipkm: '',
                                                    sks: '',
                                                    ips: '',
                                                    statusMahasiswa: 'Belum terverifikasi'
                                                })
                                                .then(function() {

                                                    // Kirim bukti khs
                                                    for(var i = 0; i < vm.$refs.files.files.length; i++) {
                                                        // Get each file
                                                        var img = vm.$refs.files.files[i];

                                                        // Reduce file (image) size
                                                        const width = 300;
                                                        const height = 300;
                                                        const fileName = user.uid;
                                                        const reader = new FileReader();
                                                        const imgResized = new Image();

                                                        reader.readAsDataURL(img);
                                                        reader.onload = event => {
                                                            imgResized.src = event.target.result;
                                                            imgResized.onload = () => {
                                                                    const elem = document.createElement('canvas');
                                                                    elem.width = width;
                                                                    elem.height = height;
                                                                    const ctx = elem.getContext('2d');

                                                                    // img.width and img.height will give the original dimensions
                                                                    ctx.drawImage(imgResized, 0, 0, width, height);

                                                                    const data = ctx.canvas.toDataURL(imgResized, 'image/jpeg', 1);
                                                                    ctx.canvas.toBlob((blob) => {
                                                                        const file = new File([blob], fileName, {
                                                                            type: 'image/jpeg',
                                                                            lastModified: Date.now()
                                                                        });
                                                                        
                                                                        /* Handle waiting to upload each file using promise */
                                                                        return new Promise(function (resolve, reject) {
                                                                            var storageRef = storage.ref();

                                                                            // Create a child directory called images, and place the file inside this directory
                                                                            var task = storageRef.child('sign_up/' + file.name).put(file);

                                                                            //Update progress bar
                                                                            task.on('state_changed',
                                                                                function progress(snapshot){
                                                                                    // Observe state change events such as progress, pause, and resume
                                                                                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                                                                                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                                                    console.log('Upload is ' + percentage + '% done');

                                                                                    switch (snapshot.state) {
                                                                                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                                                                                        console.log('Upload is paused');
                                                                                        break;
                                                                                        case firebase.storage.TaskState.RUNNING: // or 'running'
                                                                                        console.log('Upload is running');
                                                                                        break;
                                                                                    }
                                                                                },
                                                                                function error(err) {
                                                                                    // Handle unsuccessful uploads
                                                                                    // Output error
                                                                                    console.error(err.message);

                                                                                    M.toast(
                                                                                        {
                                                                                            html: 'Error uploading image', 
                                                                                            classes: 'red rounded'
                                                                                        }
                                                                                    );
                                                                                },
                                                                                function complete(){
                                                                                    var downloadURL = task.snapshot.downloadURL;

                                                                                    task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                                                                                        console.log(downloadURL);

                                                                                        // Enable button
                                                                                        $('#sign-up-btn').removeClass('disabled');
                                                                                        vm.loading = false;
                                                                                        vm.success = true;

                                                                                        // Direct user to sign in page after some seconds
                                                                                        window.setTimeout(function(){
                                                                                            // Move to a new location
                                                                                            window.location.replace('/sign-in/')
                                                                                        }, 5000);
                                                                                    });
                                                                                });
                                                                        });
                                                                    }, 'image/jpeg', 1);
                                                                },
                                                            reader.onerror = error => console.log(error);

                                                            // Enable button
                                                            $('#sign-up-btn').removeClass('disabled');
                                                            vm.loading = false;
                                                        };
                                                    }
                                                })
                                                .catch(function(error) {
                                                    console.error('Error addding a new user: ' + error);

                                                    // Enable button
                                                    $('#sign-up-btn').removeClass('disabled');
                                                    vm.loading = false;
                                                });
                                            })
                                            .catch(function(error) {
                                                // An error happened.
                                                console.error(error.message);

                                                M.toast(
                                                    {
                                                        html: 'Error sending an email verification. Please try again.', 
                                                        classes: 'red rounded'
                                                    }
                                                );

                                                // Enable button
                                                $('#sign-up-btn').removeClass('disabled');
                                                vm.loading = false;
                                            });
                                        }
                                    });
                                    
                                })
                                .catch(function(error) {
                                    // Handle Errors here.
                                    console.log(error.message);
                                    M.toast(
                                        {
                                            html: 'Error Signing Up. Please Try Again.', 
                                            classes: 'red rounded'
                                        }
                                    );

                                    // Enable button
                                    $('#sign-up-btn').removeClass('disabled');
                                    vm.loading = false;
                                });
                            }
                            else {
                                M.toast(
                                    {
                                        html: 'Tolong inputkan foto Kartu Hasil Studi (KHS) terakhir Anda', 
                                        classes: 'red rounded'
                                    }
                                );
                            }
                        }
                        else { // password & re-type password is not the same
                            M.toast(
                                {
                                    html: 'Tolong pastikan nilai Password dengan Re-type password adalah sama', 
                                    classes: 'red rounded'
                                }
                            );
                        }
                    }
                    else {
                        //this.passwordValid = false;
                        M.toast(
                            {
                                html: 'Panjang password harus 6 sampai 16 karakter', 
                                classes: 'red rounded'
                            }
                        );
                    }

                    
                }
                else {
                    M.toast(
                        {
                            html: 'Mohon isi data - data yang ada. Terimakasih.', 
                            classes: 'red rounded'
                        }
                    );
                }
            }
            if(subject == 'boss') {
                // Only process if no empty value
                if(vm.boss.email && vm.boss.password && vm.boss.rePassword) {

                    if(vm.boss.password.length >= 6 && vm.boss.password.length <= 16) {
                        vm.boss.passwordValid = true;

                        if(vm.boss.password == vm.boss.rePassword) {
                            // Disable button
                            $('#sign-up-btn').addClass('disabled');
                            vm.loading = true;

                            auth.createUserWithEmailAndPassword(vm.boss.email, vm.boss.password)
                            .then(function() {
                                // If user is successfully registered

                                // Enable button
                                $('#sign-up-btn').removeClass('disabled');
                                vm.loading = false;

                                // use vm (view model) instead of calling this directly
                                // since it is inside auth function scope
                                vm.success = true;

                                // Get current user
                                auth.onAuthStateChanged(function(user) {
                                    if(user) {
                                        // Send verification email
                                        user.sendEmailVerification().then(function() {
                                            user.updateProfile({
                                                displayName: vm.boss.name,
                                                photoURL: 'https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/boss.png?alt=media&token=6c987a7b-8268-40bb-9a04-ac26c3d4a766'
                                            });

                                            // Add new user on firestore
                                            db.collection('users').doc(user.uid).set({
                                                name: vm.boss.name,
                                                icon: 'https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/boss.png?alt=media&token=6c987a7b-8268-40bb-9a04-ac26c3d4a766',
                                                email: user.email,
                                                status: 'boss',
                                                
                                                jabatan: vm.boss.jabatan,
                                                namaPrsh: vm.boss.namaPrsh,
                                                bidangPrsh: vm.boss.bidangPrsh,
                                            })
                                            .then(function() {
                                                // Direct user to sign in page after some seconds
                                                window.setTimeout(function(){
                                                    // Move to a new location
                                                    window.location.replace('/sign-in/')
                                                }, 5000);
                                            })
                                            .catch(function(error) {
                                                console.error('Error addding a new user: ' + error);
                                            });
                                        })
                                        .catch(function(error) {
                                            // An error happened.
                                            console.error(error.message);

                                            M.toast(
                                                {
                                                    html: 'Error sending an email verification. Please try again.', 
                                                    classes: 'red rounded'
                                                }
                                            );
                                        });
                                    }
                                });
                                
                            })
                            .catch(function(error) {
                                // Handle Errors here.
                                console.log(error.message);
                                M.toast(
                                    {
                                        html: 'Error Signing Up. Please Try Again.', 
                                        classes: 'red rounded'
                                    }
                                );

                                // Enable button
                                $('#sign-up-btn').removeClass('disabled');
                                vm.loading = false;
                            });
                        }
                        else { // password & re-type password is not the same
                            M.toast(
                                {
                                    html: 'Tolong pastikan nilai Password dengan Re-type password adalah sama', 
                                    classes: 'red rounded'
                                }
                            );
                        }
                    }
                    else {
                        //this.passwordValid = false;
                        M.toast(
                            {
                                html: 'Panjang password harus 6 sampai 16 karakter', 
                                classes: 'red rounded'
                            }
                        );
                    }

                    
                }
                else {
                    M.toast(
                        {
                            html: 'Please fill the field properly', 
                            classes: 'red rounded'
                        }
                    );
                }
            }
        }
    },
    computed: {
        buttonStyle() {
            return {
                'waves-effect': true, 
                'waves-light': true, 
                'btn-large': true, 
                'green': true,
                'lighten-1': true,
                //'disabled': !this.passwordValid || !this.rePasswordValid
            }
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
#tab1, #tab2 {
    margin-top: 2em;
}
</style>
