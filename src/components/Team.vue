<template>
    <div>
        <h1 class="center green-text text-darken-2">Arbeiten</h1>

        <div class="center">
            <a class="waves-effect waves-light btn green darken-1" href="/"><i class="material-icons left">home</i>Beranda</a>
        </div>

        <section>
            <h2 class="center">
                Let's Meet Our Small Team :)
            </h2>

            <!-- IMAGE COVER -->
            <img id="cover-img" class="responsive-img" style="margin-bottom: 4em;"
                src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/other%2Fteam.png?alt=media&token=0d83c693-418b-4298-8964-a09beba38725">

            <div class="container">
                <div class="col s12 m8 offset-m2 l6 offset-l3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row">
                            <div class="col s12 m4 center">
                                <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/other%2Fvari.png?alt=media&token=b833a505-ec50-439a-8e72-0403dabcc8ac" 
                                    alt="" class="circle pp"> <!-- notice the "circle" class -->
                            </div>
                            <div class="col s12 m8 flow-text center">
                                <h4>Vari Angga</h4>
                                <p>Co-founder, Chief Executive Officer (CEO), Chief Technology Officer (CTO) of Arbeiten</p>
                                <p>
                                    Vari is an Information Systems major with a concentration in Development. Currently, he is studying at University of Surabaya.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s12 m8 offset-m2 l6 offset-l3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row">
                            <div class="col s12 m4 center">
                                <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/other%2Fotniel.png?alt=media&token=528ae427-231c-4dd0-9645-42b38d646bb6" 
                                    alt="" class="circle pp"> <!-- notice the "circle" class -->
                            </div>
                            <div class="col s12 m8 flow-text center">
                                <h4>Otniel Kevin</h4>
                                <p>Co-founder, Chief Operations Officer (COO) of Arbeiten</p>
                                <p>
                                    Otniel is an Information Systems with concentration in Management. Currently, he is studying at University of Surabaya.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s12 m8 offset-m2 l6 offset-l3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row">
                            <div class="col s12 m4 center">
                                <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/other%2Falbert.png?alt=media&token=83bfec33-1146-4fc4-a00d-85dbd7dd4102" 
                                    alt="" class="circle pp"> <!-- notice the "circle" class -->
                            </div>
                            <div class="col s12 m8 flow-text center">
                                <h4>Albert Senoadji</h4>
                                <p>Co-founder, Chief Financial Officer (CFO) of Arbeiten</p>
                                <p>
                                    Albert is an Information Systems major with a concentration in Management. Currently, he is studying at University of Surabaya.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s12 m8 offset-m2 l6 offset-l3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row">
                            <div class="col s12 m4 center">
                                <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/other%2Fwinston.png?alt=media&token=54a8f19e-ccc2-4513-be95-a7ec27b0ca91" 
                                    alt="" class="circle pp"> <!-- notice the "circle" class -->
                            </div>
                            <div class="col s12 m8 flow-text center">
                                <h4>Winston Philip</h4>
                                <p>Co-founder, Chief Marketing Officer (CMO) of Arbeiten</p>
                                <p>
                                    Winston is an Information Systems major with a concentration in Development. Currently, he is studying at University of Surabaya.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s12 m8 offset-m2 l6 offset-l3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row">
                            <div class="col s12 m4 center">
                                <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/other%2Fchrisjo.JPG?alt=media&token=dfdb193f-85e1-458d-8407-bb0c8ab3e003" 
                                    alt="" class="circle pp"> <!-- notice the "circle" class -->
                            </div>
                            <div class="col s12 m8 flow-text center">
                                <h4>Christian Johan</h4>
                                <p>Co-founder, Chief Design Officer (CDO) of Arbeiten</p>
                                <p>
                                    Christian is an Information Systems major with a concentration in Management. Currently, he is studying at University of Surabaya.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p class="flow-text justify" style="margin-top: 2em;">
                    A fundamental value which sits in the heart of our company is: <br><br>                   
                </p>
                <blockquote class="flow-text">              
                    <i>“One the ways that I believe people express their appreciation to the rest of humanity is to make something wonderful and put it out there.”</i>                   
                    <p>
                        Steve Jobs (1955 - 2011)
                    </p>
                </blockquote>
            </div>
        </section>

        <div style="height: 100px;"></div>
    </div>
</template>

<script>

export default {
   data() {
       return {
           
       }
   },
   methods: {
       
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

// Circle Profile Picture
.pp {
    width: 100%;
    max-width: 225px;
    max-height: 225px;
}

blockquote {
    border-left-color: green;
}
</style>
