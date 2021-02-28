<template>
    <div class="container">
        <h1 class="center green-text text-darken-2">Arbeiten</h1>

        <div class="center">
            <a class="waves-effect waves-light btn green darken-1" href="/"><i class="material-icons left">home</i>Beranda</a>
        </div>

        <div style="height: 10px;"></div>

        <h3 class="center">Daftar Kemampuan Anda</h3>

        <div style="height: 20px;"></div>

        <div v-if="verifying"
                class="center flow-text amber-text text-darken-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/stonary8.appspot.com/o/images%2Fothers%2Fverify.png?alt=media&token=0c0a0ea2-8036-4501-a05b-4029e639813b" alt="Verifying You"
                    class="responsive-img" style="margin-top: 3em;">
            <h1>Hold On</h1>
            <p>We Are Trying To Verify You ...</p>
        </div>
        <div v-else>
            <div v-if="signedIn" class="black-text">
                <section class="black-text">
                    <div class="card horizontal z-depth-2 hoverable"
                        v-for="skill in skills"
                        v-bind:key=skill.id>
                        <div class="card-stacked">
                            <div class="card-content capitalize">
                                <div class="item-box">
                                    <span class="card-title"><b>{{ skill.title }}</b></span>

                                    <span class="new badge red lighten-2 white-text" v-bind:data-badge-caption="skill.level">
                                        
                                    </span>

                                    <p>{{ skill.description }}</p>
                                    <br>
                                    <p>Pengalaman: {{ skill.experience }}</p>
                                    <br>
                                    <p>Sertifikasi: </p>

                                    <!-- Bukti sertifikasi -->
                                    <img v-for="img in skill.imgs"
                                        v-bind:key=img.id 
                                        class="certificate" 
                                        v-bind:src="img" alt="">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
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
  components: {

  },
  data () {
      return {
            signedIn: false,
            verifying: false,

            skills: []
      }
  },
  created() {
      var vm = this;

      auth.onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            vm.signedIn = true;
            vm.verifying = false;

            // Get data
            db.collection("skillList").doc(user.uid).collection('list').get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    vm.skills.push(doc.data());
                });
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
.horizontal { 
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2em;
    height: auto; 
    overflow: scroll;

    .card-stacked { width: 100%; }

    .item-box { width: 90%; }
}

span.badge { font-size: 0.75em; }

img.certificate { 
    border: 2px solid green;
    min-width: 250px;
    max-width: 600px;
    width: 100%;
    height: 200px;
}
</style>
