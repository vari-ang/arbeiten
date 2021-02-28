<template>
    <div class="container">
         <div id="navbar" class="white">

             <div class="row center">
                 <div class="col s6"><a href="/"><img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/logo.jpg?alt=media&token=35d0b234-aa29-4fc2-9aa8-bf29813c85f3" alt="" width="100px" height="75px" style="margin-top: 20px;"></a></div>
                 <div class="col s6 green-text text-darken-3"><h2>Arbeiten</h2></div>
             </div>

            <div class="row upper-tab" style="margin-top: -2em;">
                <!-- SIDENAV -->
                <!-- Popup Content -->
                <ul id="slide-out" class="sidenav">
                    <li>
                        <div class="user-view">
                            <div class="background">
                                <img width="300px" height="275px"
                                    src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/other%2Fnavbar.jpg?alt=media&token=ccf68abf-55b5-4cda-ada1-630977683d77" >
                            </div>
                            <a>
                                <img class="circle" 
                                    v-bind:src="user.icon">
                            </a>
                            <div v-if="signedIn">
                                <span class="badge green darken-1 white-text" data-caption=""
                                    v-if="user.verified">Verified
                                </span>
                                <a><span class="white-text name">{{ name() }}</span></a>
                                <a>
                                    <span class="white-text email">{{ email() }}</span>
                                </a>
                            </div>
                            <div v-else>
                                <a><span class="white-text name">Happy User</span></a>
                                <a><span class="white-text email"></span></a>
                            </div>
                        </div>
                    </li>

                    <p v-if="!signedIn" class="justify"
                        style="padding: 0 20px 0 20px;">
                            Bergabunglah di Arbeiten sehingga Anda dapat mengembangkan bakat dan mendapatkan uang jajan tambahan selagi Anda masih mahasiswa.
                            <br><br>
                            <b>100% Gratis. Tanpa biaya apapun. Janji!</b>
                    </p>
                    <li v-if="!signedIn"> <!-- Sign Up & Sign In is shown for logged out user -->
                        <a href="/sign-up/" class="waves-effect green-text">
                            Sign Up
                            <span class="new badge green lighten-4 lighten-2 white-text" data-badge-caption="">
                                <button class="pulse-button pulse-btn-very-small"
                                        v-if="!signedIn"></button>
                                <b>Try It</b>
                            </span>
                        </a>
                        <a href="/sign-in/" class="waves-effect green-text">Sign In</a>
                    </li>

                    <div v-if="user.status == 'mahasiswa'">
                            <li v-if="signedIn"><a class="subheader">Akun</a></li>
                            <li v-if="signedIn">
                                <a class="waves-effect" 
                                v-bind:href="'/profile/'">Biodata Diri</a>
                            </li>
                            <li v-if="signedIn">
                                <a class="waves-effect" 
                                v-bind:href="'/skill-list/'">
                                Daftar Kemampuan
                                <!-- <span class="new badge green lighten-4 lighten-2 white-text" data-badge-caption="">{{ user.numOfSaveList }}</span> -->
                                </a>
                            </li>
                            <li v-if="signedIn">
                                <a class="waves-effect" 
                                v-bind:href="'/history'">
                                Riwayat Freelancing
                                <!-- <span class="new badge green lighten-4 lighten-2 white-text" data-badge-caption="">{{ user.numOfSaveList }}</span> -->
                                </a>
                            </li>
                            <li v-if="signedIn"><a class="subheader" href="$">Support</a></li>
                            <li v-if="signedIn">
                                <a class="waves-effect" 
                                href="mailto:variantoangga@gmail.com?Subject=Hi%20Arbeiten's%20Admin">
                                Hubungi Admin
                                </a>
                            </li>
                    </div>
                    <div v-else-if="user.status == 'boss'">
                            <li v-if="signedIn"><a class="subheader">Akun</a></li>
                            <li v-if="signedIn">
                                <a class="waves-effect" 
                                v-bind:href="'/profile/'">Biodata Diri</a>
                            </li>
                            <li v-if="signedIn"><a class="subheader" href="$">Support</a></li>
                            <li v-if="signedIn">
                                <a class="waves-effect" 
                                href="mailto:variantoangga@gmail.com?Subject=Hi%20Arbeiten's%20Admin">
                                Hubungi Admin
                                </a>
                            </li>
                    </div>

                    <li>
                        <a class="waves-effect" 
                            v-bind:href="'/team'">
                            Meet The Team
                        </a>
                    </li>

                    <li v-if="signedIn"> <!-- Log Out is shown for signed in user -->
                        <a class="waves-effect red-text"
                        v-on:click="logOut">Log Out</a>
                    </li>
                </ul>

                <!-- Profile Picture -->
                <div class="col s3 m2">
                    <a href="#" data-target="slide-out" class="sidenav-trigger">
                        <button class="pulse-button pulse-button-pp"
                                v-if="!signedIn"></button>
                        <img class="circle" width="50px" height="50px"
                            v-bind:src="user.icon"
                            v-if="signedIn">
                    </a>
                </div>

                <!-- SEARCH BOX -->
                <div class="col s9 m10">
                    <div v-if="user.status == 'mahasiswa'">
                        <nav>
                            <div class="nav-wrapper white">
                                <form>
                                    <div class="input-field green darken-2">
                                        <input id="search" type="search" 
                                            placeholder="Cari Pekerjaan Freelance ..." 
                                            required 
                                            autocomplete="off"
                                            class="autocomplete">
                                        <!-- <label class="label-icon" for="search"><i class="material-icons">search</i></label> -->
                                        <i class="material-icons">close</i>
                                    </div>
                                </form>
                            </div>
                        </nav>    
                    </div>
                    <div v-else-if="user.status == 'boss'">
                        <p class="flow-text">{{ user.name }} ({{ user.email }})</p>

                        <!-- <nav>
                            <div class="nav-wrapper white">
                                <form v-on:submit.prevent="search">
                                    <div class="input-field green darken-2">
                                        <input id="search2" type="search" 
                                            placeholder="Cari Jasa Freelance ..." 
                                            required 
                                            autocomplete="off"
                                            class="autocomplete">
                                        <i class="material-icons">close</i>
                                    </div>
                                </form>
                            </div>
                        </nav>     -->
                    </div>  
                </div>
            </div>

            <!-- Floating Action Button -->
            <!-- <div class="fixed-action-btn click-to-toggle">
                <button class="pulse-button"
                        v-if="!signedIn"></button>
                <a class="btn-floating btn-large green">
                    <i class="large material-icons">menu</i>
                </a>
                <ul>
                    <li>
                        <button class="pulse-button pulse-btn-small"
                                v-if="!signedIn"></button>
                        <a class="btn-floating sidenav-trigger" href="#" data-target="slide-out">
                            <i class="material-icons white green-text">person</i>
                        </a>
                    </li>
                    <li>
                        <a class="btn-floating" href="/#add-skill">
                            <i class="material-icons white green-text">add</i>
                        </a>
                    </li>
                    <li>
                        <a class="btn-floating" href="/#job-status">
                            <i class="material-icons white green-text">assignment</i>
                        </a>
                    </li>
                    <li>
                        <a class="btn-floating" href="/#home">
                            <i class="material-icons white green-text">home</i>
                        </a>
                    </li>
                </ul>
            </div> -->

            <div class="row lower-tab white">
                <nav class="white nav-extended">
                    <div class="col s12 nav-content white">    
                        <ul class="tabs tabs-icon">
                            <li class="tab col s4"><a href="#home" class="active"><i class="material-icons green-text white">home</i></a></li>
                            <li class="tab col s4"><a href="#job-status"><i class="material-icons green-text white">assignment</i></a></li>
                            <li class="tab col s4"><a href="#add-skill"><i class="material-icons green-text white">add</i></a></li>
                            <li class="tab hide-tab"><a href="#edit-profile"></a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <!-- Home -->
            <div id="home" class="col s12">
                <div class="chip green-text text-darken-3">
                    <b>NOTE: Per 10 Mei 2019, Arbeiten mengambil komisi sebesar 2% dari setiap transaksi yang terjadi.</b>
                    <i class="close material-icons">close</i>
                </div>

                <div id="cover-photo" class="center-align valign-wrapper">
                    <p class="green-text text-darken-4 title flow-text">
                        Platform yang menghubungkan Mahasiswa dan Perusahaan dalam pemanfaatan FREELANCE (Kerja Lepasan)
                    </p>
                </div>
                <span><em>Photo by Omar Prestwitch / Unsplash</em></span>

                <div v-if="user.status == 'mahasiswa'">
                    <h3 class="center">Temukan Pekerjaan Freelance Impian Anda</h3>

                    <section>
                        <div class="row">
                            <p class="flow-text col s12">
                                <b>Tips & Tricks</b>
                            </p>

                            <div class="col s12 m6 l4">
                                <div class="card hoverable">
                                    <div class="card-image waves-effect waves-block waves-light">
                                        <img class="activator" src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/logo.jpg?alt=media&token=35d0b234-aa29-4fc2-9aa8-bf29813c85f3">
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title activator grey-text text-darken-4">
                                            <b>Cara Penggunaan Platform Arbeiten</b> <i class="material-icons right">more_vert</i>
                                        </span>
                                        <p>&lt; 2 Menit Baca</p>
                                    </div>
                                    <div class="card-reveal">
                                        <span class="card-title green-text text-darken-4">
                                            Selamat Datang di Arbeiten !<i class="material-icons right">close</i>
                                        </span>
                                        <p class="justify">
                                            Ingin menjual skill freelance Anda di sini? Mudah sekali kok!
                                            <br><br>
                                            Sebelumnya pastikan Anda sudah terverfikasi oleh Admin. Klik foto Anda di home lalu cari tulisan "Verified".
                                            <br><br>
                                            Jangan bersedih jika tidak ada tulisan "Verified", karena proses verifikasi bisa memakan waktu hingga 2 jam.
                                            <br><br>
                                            Jika sudah terverifikasi. Berikut langkah - langkah yang bisa Anda coba segera:
                                            <ol>
                                                <li>Lihat rekomendasi pekerjaan - pekerjaan di beranda atau cari di search box, pilih yang cocok dan daftar. Hasil pendaftaran Anda terdapat di tab kedua di home. Jika pengajuan Anda diterima, maka tim Admin akan segera menghubungi Anda :)</li>
                                                <br>
                                                <li>Tulis kemampuan - kemampuan yang Anda miliki pada tab ketiga di beranda. Hasil yang Anda isikan akan kami tawarkan ke pencari jasa freelance, jika ada yang tertarik dengan kemampuan Anda, maka bersiaplah untuk kami kontak :)</li>
                                            </ol>
                                            <br>
                                            Happy Freelancing!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col s12 m6 l4">
                                <div class="card hoverable">
                                    <div class="card-image waves-effect waves-block waves-light">
                                        <img class="activator" src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/other%2Ftips1.jpg?alt=media&token=0ec2e3ee-08c9-4f1d-a7cf-7ba35543c5c6">
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title activator black-text">
                                            <b>Tips Menarik Pencari Jasa Freelance</b> <i class="material-icons right">more_vert</i>
                                        </span>
                                        <p>Baca tips di sini</p>
                                    </div>
                                    <div class="card-reveal">
                                        <span class="card-title black-text">
                                            Teknik menggaet Freelance Hunter secara mudah<i class="material-icons right">close</i>
                                        </span>
                                        <p class="justify">
                                            Berikut kami bocorkan teknik yang bisa Anda terapkan untuk mendapatkan penawaran dari Freelance Hunter secara mudah.
                                            <br>
                                            <ol>
                                                <li>Tuliskan deskripsi kemampuan secara singkat, padat, dan jelas. Pastikan Anda menggunakan bahasa yang tidak terlalu teknis supaya mudah dipahami oleh Freelance Hunter</li>
                                                <br>
                                                <li>Sertifikasi menjadi hal penting karena menunjukkan bahwa Anda menguasai jasa freelance yang Anda tawarkan.</li>
                                                <br>
                                                <li>Tidak masalah jika Anda tidak memiliki sertifikasi, Anda bisa coba untuk menawarkan jasa dengan harga yang murah.</li>
                                                <br>
                                                <li>Pastikan penawaran harga awal Anda masuk akal. Hubungi kami untuk mencari tahu berapa harga awal yang sesuai untuk kemampuan Anda.</li>
                                                <br>
                                                <li>Bangun reputasi yang baik! Semakin baik riwayat hasil pekerjaan Anda, maka kami semakin senang menawarkan kemampuan - kemampuan Anda.</li>
                                                <br>
                                                
                                                Selamat mencoba. Semoga Sukses!
                                            </ol>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div class="row">
                            <p class="flow-text col s12">
                                <b>Recommended Jobs</b>
                            </p>

                            <div class="row">
                                <div class="col s12 m6 l4">
                                    <a href="/job/bLSBDwlBPjARg0yCjBnM">
                                        <div class="card hoverable">
                                            <div class="card-image">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/job%2Flogo%20brand%201.jpg?alt=media&token=6c27779e-188d-434d-9123-61c113819fd7">
                                            </div>

                                            <!-- For Item -->
                                            <div class="card-content black-text">
                                                <span class="card-title activator grey-text text-darken-4 capitalize">
                                                    <b>Buat Logo Brand</b>
                                                </span>
                                                <span class="badge red darken-3 white-text"
                                                    data-badge-caption=""><b>SPONSORED</b></span>
                                                <span class="badge green lighten-2 black-text"
                                                    data-badge-caption="">Sedang</span>

                                                <div v-rating="4.5"></div>

                                                <p class="capitalize">CV. Berlian Bungtama</p>
                                                <br>
                                                <p class="truncate">Membuat 3 Logo Yang Berbeda Untuk Perusahaan Berlian Bungtama</p>
                                                <br>
                                                <p>Dimulai dari 1.500.000 IDR/ Logo</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                
                                <div class="col s12 m6 l4">
                                    <a href="/job/y219E44zcEzr8ytvGY9t">
                                        <div class="card hoverable">
                                            <div class="card-image">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/job%2Fweb%20design%201.jpg?alt=media&token=9dd4c76f-2935-4e60-85f4-e559c27bab91">
                                            </div>

                                            <!-- For Item -->
                                            <div class="card-content black-text">
                                                <span class="card-title activator grey-text text-darken-4 capitalize">
                                                    <b>Web Design</b>
                                                </span>
                                                <span class="badge red lighten-2 black-text"
                                                    data-badge-caption="">Susah</span>

                                                <div v-rating="5"></div>

                                                <p class="capitalize">PT. Jaya Kencana</p>
                                                <br>
                                                <p class="truncate">Mendesign Website Untuk Toko Online</p>
                                                <br>
                                                <p>Dimulai dari 1.000.000 IDR/ Paket</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div class="col s12 m6 l4">
                                    <a href="/job/sunberry">
                                        <div class="card hoverable">
                                            <div class="card-image">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/job%2FComing%20Soon%20Sunberry.jpg?alt=media&token=aa940d2f-91e2-4a60-b91d-5ec638b86332">
                                            </div>

                                            <!-- For Item -->
                                            <div class="card-content black-text">
                                                <span class="card-title activator grey-text text-darken-4 capitalize">
                                                    <b>Reseller & Distributor</b>
                                                </span>
                                                <span class="badge red darken-3 white-text"
                                                        data-badge-caption=""><b>SPONSORED</b></span>
                                                <span class="badge lime lighten-2 black-text"
                                                    data-badge-caption="">Mudah</span>

                                                <div v-rating="5"></div>

                                                <p class="capitalize">SUNBERRY - Foodies Cosmetic<br><b><span class="fa fa-instagram"></span> sunberry.id</b></p>
                                                <br>
                                                <p class="truncate">Dibutuhkan segera anak muda yang berani untuk menghasilkan uang! Periode terbatas.</p>
                                                <br>
                                                <p>Dimulai dari 5.000.000 IDR/ Bulan</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div class="col s12 m6 l4">
                                    <a href="/job/zAyqa7vmwveMMQdcfqFA">
                                        <div class="card hoverable">
                                            <div class="card-image">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/job%2Ftranslating%201.jpg?alt=media&token=737ca2ec-8b67-49db-8895-ba0dc3c20399">
                                            </div>

                                            <!-- For Item -->
                                            <div class="card-content black-text">
                                                <span class="card-title activator grey-text text-darken-4 capitalize">
                                                    <b>Translating English Scripts</b>
                                                </span>
                                                <span class="badge lime lighten-4 lighten-2 black-text"
                                                    data-badge-caption="">Mudah</span>

                                                <div v-rating="4"></div>

                                                <p class="capitalize">PT. Kamus Nusantara Makmur</p>
                                                <br>
                                                <p class="truncate">Menerjemahkan Script - Script Percakapan Bisnis Dalam Bahasa Inggris Ke Indonesia.</p>
                                                <br>
                                                <p>Dimulai dari 200.000 IDR/ 1 Paket</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </section>

                    <section>
                        <div class="row">
                            <p class="flow-text col s12">
                                <b>Other Jobs That You Mau Like</b>
                            </p>

                            <div class="row">
                                <div class="col s12 m6 l4">
                                    <div class="card hoverable">
                                        <div class="card-image">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/job%2Fdesain%20poster%201.jpg?alt=media&token=e6c9d3e0-f326-4363-92db-f135def02fb3">
                                        </div>

                                        <!-- For Item -->
                                        <div class="card-content black-text">
                                            <span class="card-title activator grey-text text-darken-4 capitalize">
                                                <b>Desain Poster</b>
                                            </span>
                                            <span class="badge green lighten-2 black-text"
                                                data-badge-caption="">Sedang</span>
                                            
                                            <div v-rating="5"></div>

                                            <p class="capitalize">CV. Barakuda Cantik</p>
                                            <br>
                                            <p class="truncate">Membuat Poster Promosi Yang Menarik</p>
                                            <br>
                                            <p>Dimulai dari 800.000 IDR/ Poster</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col s12 m6 l4">
                                    <div class="card hoverable">
                                        <div class="card-image">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/job%2Ftyping%201.jpg?alt=media&token=ff1a7a40-2b19-4fa0-b93e-c1fd4630170c">
                                        </div>

                                        <!-- For Item -->
                                        <div class="card-content black-text">
                                            <span class="card-title activator grey-text text-darken-4 capitalize">
                                                <b>Mengetik Naskah Pembicaraan</b>
                                            </span>
                                            <span class="badge lime lighten-2 black-text"
                                                data-badge-caption="">Mudah</span>

                                            <div v-rating="4.5"></div>

                                            <p class="capitalize">PT. Subur Sejahtera</p>
                                            <br>
                                            <p class="truncate">Ketik Naskah Pembicaraan Di Mana Saja Yang Anda Mau</p>
                                            <br>
                                            <p>Dimulai dari 85.000 IDR/ Kertas</p>
                                        </div>
                                    </div>
                                </div>

                                 <div class="col s12 m6 l4">
                                    <div class="card hoverable">
                                        <div class="card-image">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/job%2Fsosmed%20admin%201.jpg?alt=media&token=c6a4e01b-3ebc-4d0d-884d-83eed46b00d1">
                                        </div>

                                        <!-- For Item -->
                                        <div class="card-content black-text">
                                            <span class="card-title activator grey-text text-darken-4 capitalize">
                                                <b>Social Media Admin</b>
                                            </span>
                                            <span class="badge red darken-3 white-text"
                                                    data-badge-caption=""><b>SPONSORED</b></span>
                                            <span class="badge lime lighten-2 black-text"
                                                data-badge-caption="">Mudah</span>

                                            <div v-rating="4"></div>

                                            <p class="capitalize">SUNBERRY - Foodies Cosmetic<br><b><span class="fa fa-instagram"></span> sunberry.id</b></p>
                                            <br>
                                            <p class="truncate">Menjadi Admin Sunberry & Mengurus Orderan Online</p>
                                            <br>
                                            <p>Dimulai dari 200.000 IDR/ Jam</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col s12 m6 l4">
                                    <div class="card hoverable">
                                        <div class="card-image">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/job%2Fpenasehat%20keuangan%201.jpg?alt=media&token=a9c888d0-6489-4ced-8c97-571bcb4f6786">
                                        </div>

                                        <!-- For Item -->
                                        <div class="card-content black-text">
                                            <span class="card-title activator grey-text text-darken-4 capitalize">
                                                <b>Penasehat Keuangan</b>
                                            </span>
                                            <span class="badge red lighten-2 black-text"
                                                data-badge-caption="">Susah</span>

                                            <div v-rating="3.5"></div>

                                            <p class="capitalize">PT. Indofinance Global</p>
                                            <br>
                                            <p class="truncate">Memberikan Nasehat Akan Kebijakan Perusahaan Yang Berhubungan Dengan Keuangan</p>
                                            <br>
                                            <p>Dimulai dari 1.600.000 IDR/ Jam</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col s12 m6 l4">
                                    <div class="card hoverable">
                                        <div class="card-image">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/job%2Fandroid%20app%20dev.%201jpg.jpg?alt=media&token=fb342503-6d50-474a-829d-9761d99b398b">
                                        </div>

                                        <!-- For Item -->
                                        <div class="card-content black-text">
                                            <span class="card-title activator grey-text text-darken-4 capitalize">
                                                <b>Android App Development</b>
                                            </span>
                                            <span class="badge red lighten-2 black-text"
                                                data-badge-caption="">Susah</span>

                                            <div v-rating="4"></div>

                                            <p class="capitalize">PT. Pikolo Digital Solution</p>
                                            <br>
                                            <p class="truncate">Membuat Aplikasi Android Apa Saja Dengan Bahasa Kotlin</p>
                                            <br>
                                            <p>Dimulai dari 3.000.000 IDR</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                </div>
                <div v-else-if="user.status == 'boss'">
                    <div id="home-boss">
                        <section class="black-text justify">
                            <div class="row">
                                <p class="flow-text col s12">
                                    <b>Recommended Freelancer</b>
                                </p>

                                <div class="col s12 m6 l4">
                                    <a href="freelance/9pYlCtjWffXd9USqFSmnTTNPubm2-gsvqOTq3xS1GiE8Ab7sU">
                                        <div class="card horizontal z-depth-2 hoverable">
                                            <div class="card-stacked">
                                                <div class="card-content capitalize">
                                                    <div class="item-box">
                                                        <span class="card-title"><b>Oracle Database Administration</b></span>

                                                        <span class="new badge red lighten-2 white-text" data-badge-caption="">Advanced</span>

                                                        <p>By: Vari</p>
                                                        <br>
                                                        <p>Dapat melakukan administrasi database Oracle dengan profesional.</p>
                                                        <br>
                                                        <p>Pengalaman: 3 Bulan</p>
                                                        <br>
                                                        <p>Sertifikasi: Oracle Certificate Of Recognition</p>
                                                        <br>
                                                        <p>Dimulai dari 4.000.000 IDR/ 6 Jam</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div class="col s12 m6 l4">
                                    <a href="freelance/9pYlCtjWffXd9USqFSmnTTNPubm2-yktq6CsFn5mcDsxTVYWs">
                                        <div class="card horizontal z-depth-2 hoverable">
                                            <div class="card-stacked">
                                                <div class="card-content capitalize">
                                                    <div class="item-box">
                                                        <span class="card-title"><b>Web Design</b></span>

                                                        <span class="new badge amber lighten-2 black-text" data-badge-caption="">
                                                            Expert
                                                        </span>

                                                        <p>By: Vari</p>
                                                        <br>
                                                        <p>Bisa membuat design modern yang interaktif dengan konsep Material Design untuk aplikasi E-Commerce dan lainnya.</p>
                                                        <br>
                                                        <p>Pengalaman: 2 Tahun</p>
                                                        <br>
                                                        <p>Dimulai dari 300.000 IDR/ 1 Website</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                
                                <div class="col s12 m6 l4">
                                    <a href="freelance/9pYlCtjWffXd9USqFSmnTTNPubm2-u0YpEW2sAp03qvAW7ksI">
                                        <div class="card horizontal z-depth-2 hoverable">
                                            <div class="card-stacked">
                                                <div class="card-content capitalize">
                                                    <div class="item-box">
                                                        <span class="card-title"><b>Translating English To Bahasa Indonesia</b></span>

                                                        <span class="new badge red lighten-2 white-text" data-badge-caption="">
                                                            Advanced
                                                        </span>

                                                        <p>By: Vari</p>
                                                        <br>
                                                        <p>Dapat menerjemahkan file Bahasa Inggris (dengan format text, gambar dan audio) ke Bahasa Indonesia dengan cukup baik.</p>
                                                        <br>
                                                        <p>Pengalaman: 9 Tahun 6 Bulan</p>
                                                        <br>
                                                        <p>Sertifikasi: TOEFL iBT (116), SAT (1460)</p>
                                                        <br>
                                                        <p>Dimulai dari 100.000 IDR/ 1 Paragraf</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section class="black-text justify">
                            <div class="row">
                                <p class="flow-text col s12">
                                    <b>Freelancer Lain Yang Mungkin Anda Suka</b>
                                </p>

                                <div class="col s12 m6 l4">
                                    <div class="card horizontal z-depth-2 hoverable">
                                        <div class="card-stacked">
                                            <div class="card-content capitalize">
                                                <div class="item-box">
                                                    <span class="card-title"><b>Desain Poster</b></span>

                                                    <span class="new badge blue lighten-2 white-text" data-badge-caption="">Beginner</span>

                                                    <p>By: Budi Bobby</p>
                                                    <br>
                                                    <p>Dapat mendesain poster dengan konsep material design.</p>
                                                    <br>
                                                    <p>Pengalaman: 10 Bulan</p>
                                                    <br>
                                                    <p>Sertifikasi: -</p>
                                                    <br>
                                                    <p>Dimulai dari 150.000 / Poster</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col s12 m6 l4">
                                    <div class="card horizontal z-depth-2 hoverable">
                                        <div class="card-stacked">
                                            <div class="card-content capitalize">
                                                <div class="item-box">
                                                    <span class="card-title"><b>Windows Desktop App Development</b></span>

                                                    <span class="new badge green lighten-2 black-text" data-badge-caption="">
                                                        Intermediate
                                                    </span>

                                                    <p>By: Jonathan Chung</p>
                                                    <br>
                                                    <p>Bisa membuat design modern yang interaktif dengan konsep Material Design untuk aplikasi E-Commerce dan lainnya.</p>
                                                    <br>
                                                    <p>Pengalaman: 1 Tahun</p>
                                                    <br>
                                                    <p>Sertifikasi: -</p>
                                                    <br>
                                                    <p>Dimulai dari 4.000.000 / Aplikasi</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col s12 m6 l4">
                                    <div class="card horizontal z-depth-2 hoverable">
                                        <div class="card-stacked">
                                            <div class="card-content capitalize">
                                                <div class="item-box">
                                                    <span class="card-title"><b>Video Animasi</b></span>

                                                    <span class="new badge red lighten-2 white-text" data-badge-caption="">
                                                        Advanced
                                                    </span>

                                                    <p>By: Kevin Boom</p>
                                                    <br>
                                                    <p>Membuat video animasi flat design dengan Voice Over</p>
                                                    <br>
                                                    <p>Pengalaman: 5 Bulan</p>
                                                    <br>
                                                    <p>Sertifikasi: -</p>
                                                    <br>
                                                    <p>Dimulai dari 500.000 / Video</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <!-- Job Status -->
            <div id="job-status" class="col s12">
                <div v-if="!signedIn"
                     class="center">
                    <h3 class="green-text darken-2">Maaf Anda Tidak Dapat Melihat Bagian Ini :(</h3>
                    <p class="flow-text">Mohon <a href="/sign-in" class="green-text"><b>Sign In</b></a> supaya Anda dapat mengakses halaman ini.</p>
                </div>
                <div v-else>
                    <div v-if="user.status == 'mahasiswa'">
                        <h3 class="center">Tawaran Bidding</h3>

                        <!-- Freelance Bidding dari Perusahaan -->
                        <section>                          
                            <div class="row">
                                <div class="col s12 m6 bidding-box"
                                     v-for="(oneBidding, index) in bidding"
                                     v-bind:key=oneBidding.key>
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">{{ oneBidding.namaPrsh }} (Bidang: {{ oneBidding.bidangPrsh }})</span>
                                            <p>{{ oneBidding.personName }} ({{ oneBidding.personJabatan }}), {{ oneBidding.personEmail }}, 
                                                melakukan bidding atas skill Anda, {{ oneBidding.skillName }}. </p>
                                        </div>
                                        <div class="card-action">
                                            <a href="#" class="biddingBtn" v-on:click="acceptBidding(oneBidding, index, $event)">Terima</a>
                                            <a href="#" class="biddingBtn" v-on:click="declineBidding(oneBidding, index, $event)">Totak</a>
                                        </div>
                                    </div>
                                </div>
                            </div>            
                        </section>                      

                        <h3 class="center">Applied Job Status</h3>

                        <div style="height: 20px;"></div>

                        <div v-if="jobStatus.length == 0"
                            class="flow-text center">
                            <h4 class="red-text">
                                Anda Tidak Memiliki Job Untuk Saat Ini :(
                            </h4>
                            <p class="black-text">
                                Silahkan cari Job Freelance di halaman utama tau di search box. Good Luck!
                            </p>

                            <img src="https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/other%2Fbaby.png?alt=media&token=fc352ac3-f3b2-4c4a-944d-4f800d4c5e96"
                                alt="Good Luck" class="responsive-img">
                        </div>

                        <section v-for="oneJobStatus in jobStatus"
                                 v-bind:key=oneJobStatus.id>
                            <a v-bind:href="'/job/' + oneJobStatus.jobId">
                                <div class="col s12 black-text">
                                    <div class="card horizontal z-depth-2 hoverable">
                                        <div class="card-image">
                                            <img v-bind:src="oneJobStatus.img"
                                                    style="border-radius: 1em;">
                                        </div>
                                        <div class="card-stacked">
                                            <div class="card-content capitalize">
                                                <span class="new badge green darken-3 white-text" style="font-size: 1em;"
                                                                data-badge-caption="">{{ oneJobStatus.date | dateFormat }}</span>
                                                <br><br>
                                                <div class="item-box">
                                                    <span class="card-title"><b>{{ oneJobStatus.title }}</b></span>

                                                    <div v-rating="3.5"></div>

                                                    <p 
                                                        class="truncate capitalize" >
                                                        {{ oneJobStatus.namaPrsh }}
                                                    </p>

                                                    <p class="truncate">{{ oneJobStatus.description }}</p>
                                                    <br>
                                                    <p>Dimulai dari {{ oneJobStatus.startingPrice }}</p>
                                                
                                                </div>

                                                <div class="item-detail-box flow-text">
                                                    <div>
                                                        <br>
                                                        <span style="position: relative; top: -0.25em;">
                                                            <b class="red-text">{{ oneJobStatus.status }}</b>
                                                        </span>
                                                    </div>
                                                    <br>
                                                    <div class="clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </section>

                        
                    </div>
                    <div v-else-if="user.status == 'boss'">
                        <div id="request-boss" class="justify">
                            <h3 class="center">Freelancer Request Status</h3>

                            <section>
                                <div class="col s12 black-text"
                                     v-for="f in freelances"
                                     v-bind:key="f.id">
                                    <div class="card horizontal z-depth-2 hoverable">
                                        <div class="card-stacked">
                                            <div class="card-content capitalize">
                                                <span class="new badge green darken-3 white-text" style="font-size: 1em;"
                                                                data-badge-caption="">{{ f.date | dateFormat }}</span>
                                                <br><br>
                                                <div class="item-box">
                                                    <span class="card-title"><b>{{ f.title }}</b></span>

                                                    <span class="new badge red lighten-2 white-text" v-bind:data-badge-caption="f.level"></span>

                                                    <p>By: {{ f.userName }}</p>
                                                    <br>
                                                    <p>{{ f.description }}</p>
                                                    <br>
                                                    <p>Pengalaman: {{ f.experience }}</p>
                                                    <!-- <br>
                                                    <p>Sertifikasi: Oracle Certificate Of Recognition</p> -->
                                                    <br>
                                                    <p>Dimulai dari: {{ f.startingPrice }}</p>

                                                    <br>
                                                    <p>Status: <b class="red-text">{{ f.status }}</b></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div style="height: 300px;"></div>
            </div>

            <!-- Add Skill -->
            <div id="add-skill" class="col s12">
                <div v-if="user.status == 'mahasiswa'">
                    <h3 class="center">Tuliskan Kemampuan Anda</h3>

                    <section class="flow-text">
                        <form action="#" style="margin-top: 2.5em;">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="skill" type="text" data-length="50"
                                        v-model="skillList.title">
                                    <label for="skill">Kemampuan</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="description" class="materialize-textarea" data-length="450"
                                        v-model="skillList.description">
                                    </textarea>
                                    <label for="description">Deskripsi</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" id="autocomplete-input-level" class="autocomplete-level">
                                    <label for="autocomplete-input-level">Level Kemampuan</label>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col s12">
                                    Pengalaman:
                                    <div class="input-field inline">
                                        <input id="number" type="number" class="validate">
                                        <label for="number">Angka</label>
                                    </div>
                                    <div class="input-field inline">
                                        <input type="text" id="autocomplete-input-durasi" class="autocomplete-durasi">
                                        <label for="autocomplete-input-durasi">Durasi</label>
                                    </div>
                                </div>
                            </div>

                            <div class="file-field input-field">
                                <div class="btn">
                                    <i class="material-icons right">add_a_photo</i>
                                    <span>SERTIFIKASI</span>
                                    <input type="file" multiple accept="image/*" ref="files" v-on:change="handleImages">
                                </div>
                                <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text" placeholder="Upload Bukti - Bukti Sertifikasi Anda ...">
                                </div>
                            </div>

                            <!-- Thumbnails -->
                            <ul id="preview" class="item-image" style="margin-bottom: 2em;">
                                <li>
                                    
                                </li>
                            </ul>

                            <div class="row">
                                <div class="col s12">
                                    Harga Awal:
                                    <div class="input-field inline">
                                        <input id="harga-awal" type="text" class="validate" placeholder="1.000.000 IDR/ Jam"
                                            v-model="skillList.startingPrice">
                                        <label for="harga-awal" class="active">Harga Awal</label>
                                    </div>
                                </div>
                            </div>

                            <!-- ADD BUTTON -->
                            <div class="center-align" style="margin-top:2em;">
                                <a id="submit-btn" class="waves-effect waves-light btn-large green lighten-1"
                                    v-on:click="addSkill">
                                    <i class="material-icons left">add</i>TAMBAH
                                </a>
                            </div>
                        </form>
                    </section>
                </div>
                <div v-else-if="user.status == 'boss'">
                    <h3 class="center">Apa yang ingin Anda tambah?</h3>
                    <div class="center" style="margin-top: 2em;">
                        <p>
                            <label>
                                <input name="group1" type="radio" value="freelancerNeed"
                                    v-model="bossAddType" />
                                <span>Kebutuhan Pekerja Freelancer</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio" value="freelanceJob"
                                    v-model="bossAddType" />
                                <span>Job Freelance</span>
                            </label>
                        </p>
                    </div>

                    <div v-if="bossAddType == 'freelancerNeed'"
                        style="margin-top:5em">
                        <h5 class="center">Tuliskan Kebutuhan Freelance Anda</h5>

                        <section class="flow-text">
                            <form action="#" style="margin-top: 2.5em;">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="skill2" type="text" data-length="50" placeholder="Tuliskan Kemampuan Freelancer Yang Anda Butuhkan"
                                                           v-model="freelancerNeed.title">
                                        <label for="skill2" class="active">Kemampuan</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <form action="#">
                                            <p>Memiliki Sertifikasi:</p>
                                            <p>
                                                <label>
                                                    <input name="group1" type="radio" value="yes"
                                                           v-model="freelancerNeed.hasCertification" />
                                                    <span>Ya</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input name="group1" type="radio" value="no"
                                                           v-model="freelancerNeed.hasCertification" />
                                                    <span>Tidak</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input name="group1" type="radio" checked value="bebas"
                                                           v-model="freelancerNeed.hasCertification" />
                                                    <span>Bebas</span>
                                                </label>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <textarea id="description2" class="materialize-textarea" data-length="450"
                                                  v-model="freelancerNeed.description"></textarea>
                                        <label for="description2">Deskripsi Freelance Yang Anda Butuhkan ...</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <select class="browser-default" v-model="freelancerNeed.level">
                                            <option value="" disabled selected>Pilih Level Kemampuan Freelance</option>
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="advanced">Advanced</option>
                                            <option value="expert">Expert</option>
                                            <option value="others">Lainnya</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col s12">
                                    Pengalaman (Opsional):
                                    <div class="input-field inline">
                                        <input id="number2" type="number" class="validate">
                                        <label for="number2">Angka</label>
                                    </div>
                                    <div class="input-field inline">
                                        <input type="text" id="autocomplete-input-durasi2" class="autocomplete-durasi">
                                        <label for="autocomplete-input-durasi2">Durasi</label>
                                    </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col s12">
                                        Penawaran Harga Awal Freelance:
                                        <div class="input-field inline">
                                            <input id="harga-awal2" type="text" class="validate" placeholder="1.000.000 IDR/ Jam"
                                                   v-model="freelancerNeed.startingPrice">
                                            <label for="harga-awal2" class="active">Harga Mulai Dari</label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Thumbnails -->
                                <ul id="preview" class="item-image" style="margin-bottom: 2em;">
                                    <li>
                                        
                                    </li>
                                </ul>

                                <!-- ADD BUTTON -->
                                <div class="center-align" style="margin-top:2em;">
                                    <a id="submit-need-btn" class="waves-effect waves-light btn-large green lighten-1"
                                        v-on:click="submitFreelancerNeed">
                                        <i class="material-icons left">add</i>SUBMIT
                                    </a>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div v-else-if="bossAddType == 'freelanceJob'"
                        style="margin-top:5em">
                        <h5 class="center">Tuliskan Job Freelance</h5>

                        <section class="flow-text" style="margin-top: 3em;">
                            <p>Mohon maaf. Untuk sementara, penambahan job hanya dapat dilakukan melalui email.</p>
                            <p>
                                <a class="waves-effect green-text" href="mailto:variantoangga@gmail.com?Subject=Hi%20Arbeiten's%20Admin&body=Penambahan Job Freelance"><b>Email Admin</b></a> 
                                mengenai Job Freelance yang ingin Anda tambahkan.
                            </p>
                            <p>
                                Mohon sertakan data - data berikut:

                                <ul class="collection">
                                    <li class="collection-item">Cover Gambar Job</li>
                                    <li class="collection-item">Judul (Nama Job)</li>
                                    <li class="collection-item">Deskripsi</li>
                                    <li class="collection-item">Starting Price</li>
                                    <li class="collection-item">Syarat</li>
                                    <li class="collection-item">Paket - Paket Pilihan (Nama, Deskripsi, Rentang Harga)</li>
                                </ul>
                            </p>
                            <p><b>Note:</b> Anda boleh mengisikan lebih dari satu paket pilihan.</p>
                        </section>
                    </div>
                </div>

                <div style="height: 300px;"></div>
            </div>
        </div>
    </div>
</template>

<script>
var firebase = require('firebase');
import auth from '../firebase/auth'; 
import db from '../firebase/firestore';
import storage from '../firebase/storage';

import dateFormat from '../mixins/dateFormat';
import handleImages from '../mixins/handleImages';
import uploadPhotos from '../mixins/uploadPhotos';

export default {
    components: {
    },
    data() {
        return {
            user: {
               icon: '',
               status: 'mahasiswa'
            },

            isMhs: false,
            isBoss: false,

            userIn: null,
            signedIn: false,
            q: '', // Text that user types in

            bidding: [],

            jobStatus:
            [
                {
                    jobId: '',
                    title: 'Loading ...',
                    date: 0,
                    rating: '5',
                    description: 'Loading ...',
                    startingPrice: 'Loading ...',
                    status: 'MENUNGGU'
                },
                {
                    jobId: '',
                    title: 'Loading ...',
                    date: 0,
                    rating: '5',
                    description: 'Loading ...',
                    startingPrice: 'Loading ...',
                    status: 'MENUNGGU'
                },
                {
                    jobId: '',
                    title: 'Loading ...',
                    date: 0,
                    rating: '5',
                    description: 'Loading ...',
                    startingPrice: 'Loading ...',
                    status: 'MENUNGGU'
                }
            ],

            skillList: {
                id: '',
                title: '',
                description: '',
                level: '',
                experience: '',
                certificates: [],
                startingPrice: '',
                imgs: [],
                userName: ''
            },

            bossAddType: '', // tipe jenis tambah untuk boss
            freelances: [], // Diakses pada halaman status boss
            freelancerNeed: {
                title: '',
                hasCertification: '',
                description: '',
                level: '',
                experience: '',
                startingPrice: '',
            }
        }
    },
    mixins: [dateFormat, handleImages, uploadPhotos],
    created() {
        var vm = this;

        // Get jobs data for search box
        db.collection('jobs').get()
            .then(function(querySnapshot) {
                var searchObj = {}

                querySnapshot.forEach(function(doc) {
                    var title = doc.data().title + ' (' + doc.id + ') - ';
                    var descTruncated = _.truncate(doc.data().description, { 'length': 75 });

                    title += descTruncated
                    searchObj[title] = null;
                });

                // Isi data pada search box
                $('#search').autocomplete({
                    data: searchObj,
                    onAutocomplete(type) {
                        var regExp = /\(([^)]+)\)/;
                        var matches = regExp.exec(type);

                        window.location.href = "job/" + matches[1];
                    }
                });
            })
            .catch(function(error) {
                console.error("Error getting documents: ", error);

                M.toast(
                    {
                        html: 'Terjadi Error pada sistem. Mohon hubungi Admin jika Anda melihat pesan ini. Termiakasih.', 
                        classes: 'red rounded'
                    }
                );
            });

        auth.onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                // Set data
                
                vm.userIn = user;
                vm.signedIn = true;

                db.collection('users').doc(user.uid).get().then(function(doc) {
                    if(doc.exists) {
                        vm.user = doc.data();

                        if(vm.user.status == 'mahasiswa') {
                            // Dapatkan tawaran bidding
                            db.collection('jobRegistrations').doc(user.uid).collection('bidding')
                                .get().then(function(querySnapshot) {
                                    querySnapshot.forEach(function(doc) {
                                        // doc.data() is never undefined for query doc snapshots
                                        vm.bidding.push(doc.data());
                                    });
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

                            vm.jobStatus = [];
                    
                            // Get job status
                            db.collection('jobRegistrations').doc(user.uid).collection('registrations')
                                .get().then(function(querySnapshot) {
                                    querySnapshot.forEach(function(doc) {
                                        // doc.data() is never undefined for query doc snapshots
                                        vm.jobStatus.push(doc.data());
                                    });
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
                        }
                        else if(vm.user.status == 'boss') {
                            // Dapatkan bidding yang pernah dilakukan
                            db.collection('freelanceBidding').doc(user.uid).collection('bidding')
                                .get().then(function(querySnapshot) {
                                    querySnapshot.forEach(function(doc) {
                                        // doc.data() is never undefined for query doc snapshots
                                        vm.freelances.push(doc.data());
                                    });
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
                        }
                    }
                });
            } 
            else {
                // User is signed out.
                // console.log('signed out');
                vm.userIn = null;
                vm.signedIn = false;

                // Add anonymous profile picture
                vm.user.icon = 'https://firebasestorage.googleapis.com/v0/b/stonary8.appspot.com/o/images%2Fuser%2Fuser.png?alt=media&token=b2e4d193-7e74-4c8d-9dca-a54889bcb623';
            }
        });
    },
    methods: {
        logOut() {
            var vm = this;

            // Check to see if user is signed in already
            if(vm.userIn) {
                // console.log(vm.userIn);
                auth.signOut().then(function() {
                    // Sign-out successful.
                    vm.signedIn =  false;

                    // Direct user to home page after some seconds
                    window.setTimeout(function(){
                        // Move to a new location
                        window.location.replace('/')
                    }, 200);

                    M.toast(
                        {
                            html: 'You Are Logged Out', 
                            classes: 'green rounded'
                        }
                    );
                }).catch(function(error) {
                    // An error happened.
                    console.error(error.message);

                    M.toast(
                        {
                            html: 'Error. Cannot Log You Out. Please try again or report this problem.', 
                            classes: 'red rounded'
                        }
                    );
                });
            }
        },
        name() {
            if(this.userIn) {
                return this.userIn.displayName;
            }
            else {
                return 'Happy Customer';
            }
        },
        email() {
            if(this.userIn) {
                return this.userIn.email;
            }
            else {
                return '';
            }
        },

        acceptBidding(obj, ix, e) {
            var vm = this;

            auth.onAuthStateChanged(function(user) {
                if (user) {
                    // Add disabled class
                    $('.biddingBtn').addClass('disabled');

                    var batch = db.batch();

                    // Hapus data dari database jobRegistrations --> bidding
                    var biddingMhsRef = db.collection('jobRegistrations').doc(user.uid).collection('bidding').doc(obj.bidId);
                    batch.delete(biddingMhsRef);
                    
                    // Ganti status menjadi DITERIMA pada freelanceBidding --> bidding --> id dokumen 
                    var biddingBossRef = db.collection('freelanceBidding').doc(obj.docIdBoss).collection('bidding').doc(obj.bidId);
                    batch.update(biddingBossRef, { status: 'DITERIMA' });

                    batch.commit().then(function() {
                        M.toast(
                            {
                                html: 'Selamat Anda berhasil menerima Bidding dari <b>' + obj.namaPrsh + '</b>! Tim Arbeiten akan segera menghubungi Anda.', 
                                classes: 'green rounded'
                            }
                        );

                        // Remove DOM
                        var $target = $(e.target);
                        $(e.target); $target.closest('div.bidding-box').fadeOut('slow');
                                        
                        // Remove disabled class
                        $('.biddingBtn').removeClass('disabled');
                    })
                    .catch(function(error) {
                        // Alert error message
                        console.error(error.message);

                        M.toast(
                            {
                                html: 'Error menerima Bidding. Silahkan coba lagi atau hubungi Admin.', 
                                classes: 'red rounded'
                            }
                        );

                        // Remove disabled class
                        $('.biddingBtn').removeClass('disabled');
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
        },
        declineBidding(obj, ix, e) {
            var vm = this;

            auth.onAuthStateChanged(function(user) {
                if (user) {
                    // Add disabled class
                    $('.biddingBtn').addClass('disabled');

                    var batch = db.batch();

                    // Hapus data dari database jobRegistrations --> bidding
                    var biddingMhsRef = db.collection('jobRegistrations').doc(user.uid).collection('bidding').doc(obj.bidId);
                    batch.delete(biddingMhsRef);
                    
                    // Ganti status menjadi DITOLAK pada freelanceBidding --> bidding --> id dokumen 
                    var biddingBossRef = db.collection('freelanceBidding').doc(obj.docIdBoss).collection('bidding').doc(obj.bidId);
                    batch.update(biddingBossRef, { status: 'DITOLAK' });

                    batch.commit().then(function() {
                        M.toast(
                            {
                                html: 'Anda menolak Bidding dari <b>' + obj.namaPrsh + '</b>.', 
                                classes: 'amber black-text rounded'
                            }
                        );

                        // Remove DOM
                        var $target = $(e.target);
                        $(e.target); $target.closest('div.bidding-box').fadeOut('slow');
                                        
                        // Remove disabled class
                        $('.biddingBtn').removeClass('disabled');
                    })
                    .catch(function(error) {
                        // Alert error message
                        console.error(error.message);

                        M.toast(
                            {
                                html: 'Error menolak Bidding. Silahkan coba lagi atau hubungi Admin.', 
                                classes: 'red rounded'
                            }
                        );

                        // Remove disabled class
                        $('.biddingBtn').removeClass('disabled');
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
        },

        addSkill() {
            var vm = this;

            auth.onAuthStateChanged(function(user) {
                if (user) {
                    // Upload text
                    vm.skillList.level = $('#autocomplete-input-level').val();
                    vm.skillList.experience = $('#number').val() + ' ' + $('#autocomplete-input-durasi').val();

                    // Isi kelengkapan data
                    if(vm.skillList.title && vm.skillList.description && vm.skillList.level && 
                        vm.skillList.experience && vm.skillList.startingPrice) {

                        $('#submit-btn').addClass('disabled');

                        var docRef = db.collection('skillList').doc(user.uid).collection('list').doc();
                        vm.skillList.id = docRef.id;
                        vm.skillList.userName = vm.name();

                        docRef.set(vm.skillList)
                            .then(function() {
                                // If the user is using default image
                                if(vm.$refs.files.files.length != 0) {
                                    for(var i = 0; i < vm.$refs.files.files.length; i++) {
                                        // Get each file
                                        var img = vm.$refs.files.files[i];

                                        // Reduce file (image) size
                                        const width = 300;
                                        const height = 300;
                                        const fileName = _.uniqueId(img.name + '_' + Date.now() + '_');
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
                                                            var task = storageRef.child('skill_list/' + file.name).put(file);

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
                                                                    // Add image link to firestore
                                                                        db.collection('skillList').doc(user.uid).collection('list').doc(vm.skillList.id)
                                                                            .update({
                                                                                imgs: firebase.firestore.FieldValue.arrayUnion(downloadURL)
                                                                            });
                                                                        
                                                                        // Kosongi field
                                                                        vm.skillList.title = "";
                                                                        vm.skillList.description = "";
                                                                        m.skillList.startingPrice = "";
                                                                        $('#autocomplete-input-level').val("");
                                                                        $('#number').val("");
                                                                        $('#autocomplete-input-durasi').val("");

                                                                         M.toast(
                                                                            {
                                                                                html: 'Kemampuan Anda sudah ditambahkan di bagian <a href="/skill-list/">Daftar Kemampuan.</a>', 
                                                                                classes: 'green rounded'
                                                                            }
                                                                        );

                                                                        $('#submit-btn').removeClass('disabled');
                                                                    });
                                                                });
                                                        });
                                                    }, 'image/jpeg', 1);
                                                },
                                            reader.onerror = error => console.log(error);
                                        };
                                    }
                                }
                                else {
                                    // Kosongi field
                                    vm.skillList.title = "";
                                    vm.skillList.description = "";
                                    vm.skillList.startingPrice = "";
                                    $('#autocomplete-input-level').val("");
                                    $('#number').val("");
                                    $('#autocomplete-input-durasi').val("");

                                    M.toast(
                                        {
                                            html: 'Kemampuan Anda sudah ditambahkan di bagian <a href="/skill-list/">Daftar Kemampuan.</a>', 
                                            classes: 'green rounded'
                                        }
                                    );

                                    $('#submit-btn').removeClass('disabled');
                                }
                            })
                            .catch(function(error) {
                                M.toast(
                                    {
                                        html: 'Mohon maaf terjadi Error. Silahkan coba kembali atau hubungi Admin.', 
                                        classes: 'red rounded'
                                    }
                                );

                                $('#submit-btn').removeClass('disabled');
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
        },

        // Ketika boss menekan tombol submit kebutuhan freelance
        submitFreelancerNeed() {
            var vm = this;

            auth.onAuthStateChanged(function(user) {
                if (user) {
                    // Upload text
                    vm.skillList.level = $('#autocomplete-input-level').val();
                    vm.freelancerNeed.experience = $('#number2').val() + ' ' + $('#autocomplete-input-durasi2').val();

                    // Isi kelengkapan data
                    if(vm.freelancerNeed.title && vm.freelancerNeed.hasCertification && vm.freelancerNeed.description && 
                        vm.freelancerNeed.level && vm.freelancerNeed.experience && vm.freelancerNeed.startingPrice) {

                        $('#submit-need-btn').addClass('disabled');

                        db.collection('freelancerNeeds').doc().set(vm.freelancerNeed)
                            .then(function() {
                                $('#submit-need-btn').removeClass('disabled');

                                M.toast(
                                    {
                                        html: 'Kebutuhan Freelancer Anda akan diproses. Anda akan dihubungi segera.', 
                                        classes: 'green rounded'
                                    }
                                );

                                $('#autocomplete-input-level').val('');
                                $('#number2').val('');
                                $('#autocomplete-input-durasi2').val('');

                                vm.freelancerNeed.title = '';
                                vm.freelancerNeed.hasCertification = '';
                                vm.freelancerNeed.description = '';
                                vm.freelancerNeed.level = '';
                                vm.freelancerNeed.experience = '';
                                vm.freelancerNeed.startingPrice = '';
                            })
                            .catch(function(error) {
                                $('#submit-need-btn').removeClass('disabled');

                                M.toast(
                                    {
                                        html: 'Mohon maaf terjadi Error. Silahkan coba kembali atau hubungi Admin.', 
                                        classes: 'red rounded'
                                    }
                                );
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

   // change underline color
    $(".tabs>.indicator").css("background-color", '#2e7d32');
    
    // initialize sidenav
    $('.sidenav').sidenav();

    // Autocomplete
    $('input#skill, textarea#description').characterCounter();

    $('input.autocomplete-level').autocomplete({
      data: {
        "Beginner": null,
        "Intermediate": null,
        "Advanced": null,
        "Expert": null
      }
    });

    $('input.autocomplete-durasi').autocomplete({
      data: {
        "Jam": null,
        "Hari": null,
        "Bulan": null,
        "Tahun": null,
      }
    });
});
</script>

<style scoped lang="scss">
/* HOME */
// Cover Photo for Unsigned In User
div#cover-photo {
    width: 100%;
    min-height: 300px;
    height: auto;
    margin-top: 20px;
    background: url('https://firebasestorage.googleapis.com/v0/b/arbeiten-b2.appspot.com/o/freelance-bg.png?alt=media&token=697241b4-a17f-4d94-aa98-c30d1eb01f29') no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border-radius: 1em;

    .title {
        background: rgba(255, 255, 255, 0.5);
        display: block;
        width: 75%;
        margin: 0 auto;
    }
}

/* JOB LIST */
.horizontal { 
    height: auto; 
    overflow: hidden;
    margin-bottom: 2em;

    .card-image {
        width: 30%;
        height: auto;
        border-radius: 1.5em;
        
        img { 
            width: 100%;
            height: 100%;
        }
    }

    .card-stacked { width: 70%; }

    .item-box { width: 50%; }

    .item-detail-box { 
        float: right; 
        margin-top: -7.5em;
        width: 50%;
        text-align: right;
        padding-top: 1.75em;
        padding-right: 0.5em;
    }
}

span.badge { font-size: 0.75em; }

/* OTHERS */
.hide-tab { display: none; }

// Pulse color
$shadow: #81c784;
$backColor: #c5cae9;

.pulse-button {
    position: fixed;
    width: 55px;
    height: 55px;
    border: none;
    box-shadow: 0 0 0 0 $shadow;
    border-radius: 50%;
    background-color: $backColor;
    cursor: pointer;
    -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);

    // &:hover {
    //     -webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none;
    // }
}

.pulse-button-pp {
    position: relative;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/stonary8.appspot.com/o/images%2Fuser%2Fuser.png?alt=media&token=b2e4d193-7e74-4c8d-9dca-a54889bcb623');
    background-size:cover;
    background-repeat: no-repeat;
}

.pulse-btn-small {
    z-index: -1;
    background: white;
    width: 40px;
    height: 40px;
}

.pulse-btn-very-small {
    z-index: -1;
    background: white;
    width: 20px;
    height: 20px;
    margin-left: 5px;
}

// Home Boss
#home-boss {
    .horizontal { 
        width: 95%;
        margin: 0 auto;
        margin-bottom: 2em;
        height: auto; 
        overflow: hidden;

        .card-stacked { width: 100%; }

        .item-box { width: 90%; }
    }

    span.badge { font-size: 0.75em; }
}

// Status Boss
#request-boss {
    .horizontal { 
        height: auto; 
        overflow: hidden;
        margin-bottom: 2em;

        .card-stacked { width: 100%; }

        .item-box { width: 75%; }

        .item-detail-box { 
            float: right; 
            margin-top: -7.5em;
            width: 25%;
            text-align: right;
            padding-top: 1.75em;
            padding-right: 0.5em;
        }
    }
}

@-webkit-keyframes pulse {to {box-shadow: 0 0 0 25px rgba($backColor, 0);}}
@-moz-keyframes pulse {to {box-shadow: 0 0 0 25px rgba($backColor, 0);}}
@-ms-keyframes pulse {to {box-shadow: 0 0 0 25px rgba($backColor, 0);}}
@keyframes pulse {to {box-shadow: 0 0 0 25px rgba($backColor, 0);}}

@media screen and (max-width: 350px) {
    ul#slide-out { width: 75%; }
}
</style>