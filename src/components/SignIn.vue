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
                        <p class="flow-text"><b>Sign In Untuk Menemukan Pekerjaan - Pekerjaan Sampingan Menarik</b></p>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="validate"
                                    v-model="email">
                                <label for="email">Email</label>
                                <span id="email-helper" class="helper-text" 
                                    data-error="Your email seems invalid" 
                                    data-success="Your email seems valid">
                                        
                                </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate"
                                    v-model="password"
                                    v-on:blur="inputPassword">
                                <label for="password">Password</label>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <!-- SIGN UP BUTTON -->
            <div class="center-align">
                <a id="sign-in-btn" 
                   v-bind:class="buttonStyle"
                   v-on:click="signIn">
                    <i class="material-icons left">person</i>Sign In
                </a>
            </div>

            <!-- Liniar Preloader -->
            <div class="progress green lighten-4"
                style="margin-top: 3em;"
                v-if="loading">
                <div class="indeterminate green"></div>
            </div>

            <!-- Link to Sign Up page -->
            <p class="flow-text center-align">
                User Baru? 
                    <a href="/sign-up/" class="green-text">
                        <b>Sign Up.</b>
                    </a>
            </p>
        </div>
        
        <!-- Display Sucessful field -->
        <div v-if="success" class="center flow-text">
            <h3 class="green-text">"Anda sudah berhasil Sign In"</h3>
            
            <p style="margin-top: 2em;">
                Anda sedang diarahkan ke halaman beranda.
            </p>
            <p>
                Sekarang Anda bisa mendapatkan uang tambahan, pengalaman lebih, dan masih banyak lagi dengan menjadi freelance di sini. Yeey!
            </p>
            <br>
            <img alt="Yuhuu!" class="responsive-img"
                 src="https://firebasestorage.googleapis.com/v0/b/stonary8.appspot.com/o/images%2Fothers%2Flaugh.png?alt=media&token=aef1ed47-5d86-4546-9b27-4f5e7ae2f41c"> 
        </div>

        <div style="height: 150px;"></div>

    </div>
</template>

<script>
import auth from '../firebase/auth'; 

export default {
    data() {
        return {
            loading: false,
            unsubscribe: null, // for firebase auth state
            success: false, // flag variable for success sign in
            email: '',
            password: '',
            passwordValid: false
        }
    },
    methods: {
        inputPassword() {
            // Password length should be between 6 to 16
            if(this.password.length < 6 || this.password.length > 16) {
                this.passwordValid = false;
                M.toast(
                    {
                        html: 'Password value should be between 6 to 16 lengths', 
                        classes: 'red rounded'
                    }
                );
            }
            else {
                this.passwordValid = true;
            }
        },
        signIn() {
            var vm = this;

            // Only process if no empty value
            if(this.email && this.password) {
                // Only process verified email

                // Disable button
                $('#sign-in-btn').addClass('disabled');
                vm.loading = true;
            
                // Sign user In
                auth.signInWithEmailAndPassword(vm.email, vm.password)
                .then(function() {
                    // Enable button
                    $('#sign-in-btn').removeClass('disabled');
                    vm.loading = false;

                    // Get current user
                    vm.unsubscribe = auth.onAuthStateChanged(function(user) {
                        //console.log(user);
                        // Email is verified
                        if(user.emailVerified) {
                            vm.success = true;

                            // Direct user to home page after some seconds
                            window.setTimeout(function(){
                                // Move to a new location
                                window.location.replace('/')
                            }, 3000);
                        } ///
                        else {
                            M.toast(
                                {
                                    html: 'Tolong verifikasi email Anda terlebih dahulu.', 
                                    classes: 'red rounded'
                                }
                            );
                        }
                    });
                    
                    // Stop listening to firebase auth state change
                    vm.unsubscribe();
                })
                .catch(function(error) {
                    // Handle Errors here.
                    console.log(error.message);
                    M.toast(
                        {
                            html: 'Error Signing In. Please Try Again.', 
                            classes: 'red rounded'
                        }
                    );

                    // Enable button
                    $('#sign-in-btn').removeClass('disabled');
                    vm.loading = false;
                });
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
    },
    computed: {
        buttonStyle() {
            return {
                'waves-effect': true, 
                'waves-light': true, 
                'btn-large': true, 
                'green': true,
                'lighten-1': true,
                //'disabled': !this.passwordValid
            }
        }
    }
}

</script>

<style lang="scss" scoped>

</style>
