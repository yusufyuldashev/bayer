<template>
  <div>
    <nav class="navbar container">
      <div class="navbar__left">
        <a href="#" class="navbar__logo">Bayer</a>

        <div class="navbar__menu">
          <select name="first_sel" class="navbar__select">
            <option value="first">Browse mobile &nbsp;</option>
            <option value="first">Browse car &nbsp;</option>
            <option value="first">Browse planes &nbsp;</option>
          </select>
          <select name="second_sel" class="navbar__select">
            <option value="sel_first">School &nbsp;</option>
            <option value="sel_first">flats &nbsp;</option>
            <option value="sel_first">houses &nbsp;</option>
          </select>
          <a href="#" class="navbar__link">Biaya</a>
          <a href="#" class="navbar__link">Dokumentasi API</a>
        </div>
      </div>

      <div class="navbar__btn">
        <div
          class="navbar__bars"
          :class="{ activebar: mobileNav }"
          @click="togglenav"
        >
          <i class="fas fa-bars fa-2x"></i>
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="active">
            <li>
              <select name="first_sel" class="navbar__select2">
                <option value="first">Browse mobile &nbsp;</option>
                <option value="first">Browse car &nbsp;</option>
                <option value="first">Browse planes &nbsp;</option>
              </select>
            </li>
            <li>
              <select name="second_sel" class="navbar__select2">
                <option value="sel_first">School &nbsp;</option>
                <option value="sel_first">flats &nbsp;</option>
                <option value="sel_first">houses &nbsp;</option>
              </select>
            </li>
            <li class="nav-link2">
              <a href="#" class="navbar__link2">Biaya</a>
            </li>
            <li class="nav-link2">
              <a href="#" class="navbar__link2">Dokumentasi API</a>
            </li>
            <li v-if="isLoggedIn" @click="logout" class="logout">
              <button class="logoutbtn">Logout</button>
            </li>
            <li class="navReg" v-if="!isLoggedIn">
              <router-link to="/login">Sign in</router-link>
            </li>
            <li class="navReg" v-if="!isLoggedIn">
              <router-link to="/register">
                Sign up
              </router-link>
            </li>
          </ul>
        </transition>
        <div class="navbar__btn1">
          <router-link to="/login" v-if="!isLoggedIn">Sign in</router-link>
        </div>
        <div class="navbar__btn2">
          <router-link to="/register" v-if="!isLoggedIn">Sign up</router-link>
        </div>
        <div class="navbar__btn2" v-if="isLoggedIn" @click="logout">
          <button class="navbar__btn2">Logout</button>
        </div>
      </div>
    </nav>
    <base-card v-if="!isLoggedIn">
      the data is displayed after registration please register !
    </base-card>
    <div v-if="isLoggedIn">
      <header class="header">
        <div class="container">
          <div class="header__left">
            <p class="header__topContent">
              <i class="fas fa-truck"></i>
              Gratis pengiriman perangkat ke seluruh Indonesia
            </p>
            <h2 class="header__title">
              Sistem
              <span class="header__titleSpan">point of sale</span>
              untuk segala bisnis.
            </h2>
            <p class="header__text">
              Kami membantu bisnis Anda mempersepat proses penjualan dengan
              aplikasi kasir berbasis cloud. Akses kapanpun dimanapun!
            </p>
            <div class="group__link">
              <a href="#" class="first__link">
                Coba Gratis
                <i class="fas fa-chevron-right"></i>
              </a>
              <a href="#" class="second__link">FAQ</a>
            </div>
            <p class="header__lastSlog">Dapat berjalan dibarbagai platform:</p>
            <div class="header__social">
              <img
                src="../assets/img/Appstore.png"
                class="header__appstore"
                alt="app"
              />
              <img
                src="../assets/img/Googleplay.jpg"
                class="header__googlestore"
                alt="google"
              />
              <img
                src="../assets/img/Mikrofts.jpg"
                class="header__microsoft"
                alt="mikrost"
              />
            </div>
          </div>
          <div class="header__right">
            <img
              class="header__img"
              src="../assets/img/firstPhoto.jpg"
              alt=""
            />
          </div>
        </div>
      </header>
      <main class="main">
        <div class="container">
          <div class="main__left">
            <h2 class="main__left__title">
              Berjualan di toko dan online sekaligus.
            </h2>
            <p class="main__left__text">
              Dengan database yang sama, menjamin produc, inventory dan laporan
              yang testap sinkron walaupun penjualan dilakukan dari program
              kasir , toko online maupun mobile app Anda.
            </p>
            <hr class="main__left__line" />
            <div class="main__bottom">
              <img
                class="main__bottom__img"
                src="../assets/img/mainPlus.jpg"
                alt=""
              />
              <p class="main__bottom__text">
                Integresikan website Anda menggunakan API bayer.
                <a href="#" class="main__bottom__span">
                  Pelajari Core Api lebih lanjut
                  <i class="fas fa-chevron-right"></i>
                </a>
              </p>
            </div>
          </div>
          <div class="main__right">
            <img
              class="main__right__img"
              src="../assets/img/secondImage.jpg"
              alt=""
            />
          </div>
        </div>
      </main>
      <aside class="aside">
        <div class="container">
          <div class="aside__left">
            <img
              src="../assets/img/main1.jpg"
              alt=""
              class="aside__left__img"
            />
          </div>
          <div class="aside__right">
            <h2 class="aside__right__title">
              Atur sistem kasir dalam hitungam menit.
            </h2>
            <p class="aside__right__text">
              Terima pembayaran dalam hitungam menit.Baik kartu kredit ataupun
              kartu debit, kami membantu Anda dalam menangani pambayaran
              dimanparun anda berjualan.
            </p>
            <div class="aside__right__social">
              <img
                class="aside__right__img1"
                src="../assets/img/ovo.jpg"
                alt=""
              />
              <img
                src="../assets/img/dapa.jpg"
                class="aside__right__img2"
                alt=""
              />
              <img
                src="../assets/img/gopay.png"
                class="aside__right__img3"
                alt=""
              />
              <img
                src="../assets/img/ltm.jpg"
                class="aside__right__img4"
                alt=""
              />
            </div>
            <hr class="aside__right__line" />
            <div class="aside__right__last">
              <img
                class="aside__right__lastImg"
                src="../assets/img/asideLine.jpg"
                alt=""
              />
              <p class="aside__right__last__text">
                <span class="aside__right__bold">
                  Masih menggunakan sistem POS lama ?
                </span>
                kami siap membantu anda melakukan migrasi data
              </p>
            </div>
          </div>
        </div>
      </aside>
      <main class="main">
        <div class="container">
          <div class="main__left">
            <h2 class="main__left__title">
              Ubah perangkat anda menjadi point of sale.
            </h2>
            <p class="main__left__text">
              Ubah perangkat anda dari mulai smartphone, tablrt maupun komputer
              anda menjadi point-of-sale.Dapatkan pembayaran dalam hitungan
              menit , permudah pembayarah dimanapuh anda berjualan.
            </p>
            <hr class="main__left__line" />
            <div class="main__bottom">
              <img
                class="main__bottom__img"
                src="../assets/img/pageImg.jpg"
                alt=""
              />
              <p class="main__bottom__text">
                Export laporan ke berbagai format file.
                <br />
                <span href="#" class="page__bottom__span">
                  Format file didukung(DOCX/PDF/XLS)
                </span>
              </p>
            </div>
          </div>
          <div class="main__right">
            <img
              class="main__right__img"
              src="../assets/img/main2.jpg"
              alt=""
            />
          </div>
        </div>
      </main>
      <div class="widget">
        <div class="container">
          <div class="widget__header">
            <h2 class="widget__header__title">
              Fitur yang memenuhi berbagai kebtuhan.
            </h2>
            <a href="#" class="main__bottom__span">
              Pelajari Core Api lebih lanjut
              <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="page">
        <div class="container">
          <ul class="page__list">
            <li class="page__item">
              <img
                class="page__item__img"
                src="../assets/img/page2.jpg"
                alt=""
              />
              <h4 class="page__item__title">Mudah & Cepat</h4>
              <p class="page__item__text">
                Mudah untuk dipahami dan langsung dapat diguanak dengan cepat
                dalam hitungan menit
              </p>
              <a href="#" class="page__item__link">
                Baca Selengkapnya
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
            <li class="page__item">
              <img
                class="page__item__img"
                src="../assets/img/page3.jpg"
                alt=""
              />
              <h4 class="page__item__title">Manajemen Stok</h4>
              <p class="page__item__text">
                Mengelola dan mengetahui posisi stok produk dengan cepat dan
                mudan dari mana saja
              </p>
              <a href="#" class="page__item__link">
                Baca Selengkapnya
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
            <li class="page__item">
              <img
                class="page__item__img"
                src="../assets/img/page4.jpg"
                alt=""
              />
              <h4 class="page__item__title">Manajemen Pelanggan</h4>
              <p class="page__item__text">
                Tingkatkan jumlah pelanggan Anda, analisa riwayat pembelian dan
                perelakunya dalam satu tampilan.
              </p>
              <a href="#" class="page__item__link">
                Baca Selengkapnya
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
            <li class="page__item">
              <img
                class="page__item__img"
                src="../assets/img/page5.jpg"
                alt=""
              />
              <h4 class="page__item__title">Laporan Lengkap</h4>
              <p class="page__item__text">
                Lihat laporan penjualan , stok dan pelanggan dengan cepat dan
                real-time dari mana saja
              </p>
              <a href="#" class="page__item__link">
                Baca Selengkapnya
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
            <li class="page__item">
              <img
                class="page__item__img"
                src="../assets/img/page6.jpg"
                alt=""
              />
              <h4 class="page__item__title">Multi Toko</h4>
              <p class="page__item__text">
                Punya lebih dari satu toko? Mengelola banyak toko sangat mudah
                dengan aplikasi kasir kami
              </p>
              <a href="#" class="page__item__link">
                Baca Selengkapnya
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
            <li class="page__item">
              <img
                class="page__item__img"
                src="../assets/img/page1.jpg"
                alt=""
              />
              <h4 class="page__item__title">Multi Platform</h4>
              <p class="page__item__text">
                Software buyar tersedia dalam beberepa platform sistem operasi
                baik Windows, Android dan iOS.
              </p>
              <a href="#" class="page__item__link">
                Baca Selengkapnya
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
          <img class="page__item__last" src="../assets/img/page7.jpg" alt="" />
        </div>
      </div>
      <section class="section">
        <div class="container">
          <h1 class="section__title">
            Mulai transaksi menggunakan Bayer Hardware
          </h1>
          <div class="section__imgs">
            <img
              class="section__img1"
              src="../assets/img/section1.jpg"
              alt=""
            />
            <img
              class="section__img2"
              src="../assets/img/section2.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <div class="sidebar">
        <div class="container">
          <div class="sidebar__content">
            <h2 class="sidebar__title">Baru memulai bisnis?</h2>
            <p class="sidebar__text">
              Kami sudah menyiapkan dokumentasi lengkap untuk anda yang baru
              mencoba platform kami.
            </p>
          </div>
          <div class="group__link">
            <a href="#" class="first__link">
              Coba Gratis
              <i class="fas fa-chevron-right"></i>
            </a>
            <a href="#" class="second__link">Bantuan</a>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container">
          <ul class="footer__list">
            <li class="footer__item1">
              <h1 class="footer__title">Bayer</h1>
              <p class="footer__text">
                Bayer adalah startup point of sale yang membantu usaha anda
                bergerek lebih cepat dengan sistem terintegasi.
              </p>
            </li>
            <li class="footer__item">
              <h4 class="footer__small__title">Link</h4>
              <ul class="footer__small__list">
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">Browse Hardware</a>
                </li>
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">Biaya</a>
                </li>
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">Hubungi Kami</a>
                </li>
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">Laporkan Bugs</a>
                </li>
              </ul>
            </li>
            <li class="footer__item">
              <h4 class="footer__small__title">Developer</h4>
              <ul class="footer__small__list">
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">
                    Downlaod Aplikasi
                  </a>
                </li>
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">Dokumentasi</a>
                </li>
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">API Bayer</a>
                </li>
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">Integrasi</a>
                </li>
              </ul>
            </li>

            <li class="footer__item">
              <h4 class="footer__small__title">Social Media</h4>
              <ul class="footer__small__list">
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">Facebook</a>
                </li>
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">Twitter</a>
                </li>
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">Instagram</a>
                </li>
                <li class="footer__small__item">
                  <a href="#" class="footer__small__link">Youtube</a>
                </li>
              </ul>
            </li>
          </ul>
          <hr class="footer__line" />
          <p class="footer__last__text">
            Copyright © 2019 Bayer Technology. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthendicated
    },
  },
  data() {
    return {
      mobileNav: false,
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    togglenav() {
      this.mobileNav = !this.mobileNav
    },
  },
}
</script>

<style scoped lang="scss">
// @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js');

@import url('https://pro.fontawesome.com/releases/v5.10.0/css/all.css');
$dark: #181818;
$dark1: #787878;
$blue0: #dce1f9;
$blue: #8f7aff;

.logoutbtn {
  border: none;
  background-color: white;
  color: rgb(21, 131, 196);
  border-radius: 20px;
  padding: 15px;
  margin-top: 20px;
  border: 1px solid rgb(21, 131, 196);
}

.navReg {
  margin-top: 20px;
  border: 1px solid rgb(21, 131, 196);
  border-radius: 20px;
  padding: 15px;
  a {
    color: rgb(21, 131, 196);
    text-decoration: none;
  }
}
.nav-link2 {
  margin-top: 10px;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.activebar {
  transform: rotate(180deg);
}

.active {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 999;
  max-width: 250px;
  height: 100%;
  list-style: none;
  background-color: white;

  top: 0;
  left: 0;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  &__logo {
    color: $dark1;
  }

  &__bars {
    display: none;
  }

  &__select {
    border: none;
  }

  &__logo {
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: 22px;
  }

  &__logo:after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background-color: $blue;
    margin-top: 20px;
  }

  &__menu {
    margin-left: 60px;
  }

  &__select {
    margin: 0 10px;
    color: $dark1;
    font-size: 15px;
    outline: none;
  }

  &__link {
    margin: 0 10px;
    text-decoration: none;
    color: $dark1;
    font-size: 15px;

    &:hover {
      color: black;
      font-weight: 600;
    }
  }

  &__btn1 {
    a {
      border: none;
      background-color: white;
      color: $blue;
      font-weight: 500;
      text-decoration: none;
      font-size: 15px;
      margin-right: 20px;
      &:hover {
        color: blue;
      }
    }
  }
  &__btn {
    display: flex;
    align-items: center;
  }

  &__btn2 {
    button {
      border: none;
      background-color: white;
      padding: 11px 18px;
      border: 1px solid $blue;
      text-decoration: none;
      border-radius: 20px;
      color: $blue;
      outline: none;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        background-color: #5536ff;
        color: white;
        transition: all 0.3s ease;
      }
    }
    a {
      border: none;
      background-color: white;
      padding: 11px 18px;
      border: 1px solid $blue;
      text-decoration: none;
      border-radius: 20px;
      color: $blue;
      outline: none;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        background-color: #5536ff;
        color: white;
        transition: all 0.3s ease;
      }
    }
  }

  &__left {
    display: flex;
    align-items: center;
  }
}

.header__left {
  width: 42%;
}

.header {
  background-color: #eaf2ff;
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__img {
  width: 600px;
}

.fa-truck {
  background-color: #a0a8e6;
  color: white;
  padding: 5px;
  border-radius: 20px;
  margin-right: 10px;
}

.header__topContent {
  color: #c6cce8;
  padding: 12px 20px 12px 10px;
  background-color: white;
  border-radius: 40px;
  display: inline-block;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 10px white;
  }
}

.header__title {
  font-size: 50px;
  line-height: 1.1;
  margin: 30px 0 40px 0;
}

.header__titleSpan {
  color: #5536ff;
}

.header__text {
  color: #a6a9b2;
  font-size: 15px;
  line-height: 1.9;
}

.group__link {
  margin-top: 50px;
}

.first__link {
  text-decoration: none;
  background-color: #5536ff;
  padding: 17px 40px;
  color: #e7defd;
  border-radius: 30px;
  transition: background-color 0.3s;

  &:hover {
    background-color: white;
    border: 1px solid #5536ff;
    color: black;
  }
}

.second__link {
  text-decoration: none;
  background-color: white;
  padding: 17px 80px;
  color: #5536ff;
  border-radius: 30px;
  border: 1px solid #d9dff3;
  margin-left: 30px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #5536ff;
    color: white;
  }
}

.fa-chevron-right {
  margin-left: 10px;
  transition: transform 0.5s;
}

.fa-chevron-right:hover {
  transform: translate(20px);
}

.header__lastSlog {
  color: #c6cbea;
  margin: 50px 0 10px 0;
  display: inline-block;
}

.header__appstore,
.header__googlestore,
.header__microsoft {
  width: 120px;
  background-color: #eaf2ff;
  margin: 0 15px 0 0;
  cursor: pointer;
  transition: transform 0.3s;
}

.header__appstore:hover {
  transform: scale(1.2);
}

.header__googlestore:hover {
  transform: scale(1.2);
}

.header__microsoft:hover {
  transform: scale(1.2);
}

.header__social {
  display: flex;
}

.main .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.main__left {
  width: 45%;

  &__title {
    font-size: 50px;
  }

  &__text {
    color: #acacac;
    line-height: 1.5;
    margin: 30px 0 30px 0;
  }

  &__line {
    border: 1px solid #f5f4f8;
  }
}

.main__right {
  width: 50%;
}

.main__right__img {
  width: 600px;
}

.main__bottom {
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.main__bottom__img {
  width: 100px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
}

.main__bottom__text {
  color: #656565;
  font-size: 17px;
  line-height: 1.5;
  margin-left: 25px;
}

.main__bottom__span {
  color: #6953e7;
  text-decoration: none;
  font-weight: 700;

  &::before {
    content: '';
    position: absolute;
    width: 215px;
    height: 2px;
    background-color: #b4a6dc;
    margin-top: 22px;
  }
}

.aside .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.aside__left {
  width: 50%;
}

.aside__right {
  width: 45%;

  &__title {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.1;
  }

  &__text {
    color: #8a8a8a;
    line-height: 1.7;
    margin: 30px 0 4px 0;
  }

  &__line {
    border: 1px solid #f5f4f8;
  }

  &__last {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  &__lastImg {
    width: 100px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.3);
    }
  }

  &__last__text {
    margin-left: 20px;
    font-size: 16px;
    color: #8a8a8a;
  }
}

.aside__left__img {
  width: 500px;
}

.aside__right__bold {
  color: black;
  font-weight: 700;
}

.aside__right__social {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.aside__right__img1,
.aside__right__img2,
.aside__right__img3,
.aside__right__img4 {
  width: 90px;
  transition: transform 0.3s;
}

.aside__right__img3 {
  width: 150px;

  &:hover {
    transform: scale(1.3);
  }
}

.aside__right__img1 {
  &:hover {
    transform: scale(1.3);
  }
}

.aside__right__img2 {
  &:hover {
    transform: scale(1.3);
  }
}

.aside__right__img4 {
  &:hover {
    transform: scale(1.3);
  }
}

.widget__bottom__span {
  color: black;
  font-weight: 700;
}

.widget {
  background-color: #f9faff;
}

.widget__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 30px 0;
}

.widget__header__title {
  font-size: 40px;
  width: 40%;
}

.page {
  padding: 100px 0 10px 0;
  background-image: linear-gradient(#f5f8fe, #f3f3f3);
}

.page__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.page__item {
  width: 30%;
  background-color: white;
  border-radius: 20px;
  list-style: none;
  padding-left: 40px;
  padding-bottom: 75px;
  margin-bottom: 20px;
  z-index: 10;
  transition: transform 0.3s;

  &:hover {
    transform: translate(10px, 20px);
  }
}

.page__item__img {
  width: 150px;
  margin-top: 10px;
  transition: transform 0.4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}

.page__item__title {
  font-weight: 700;
  font-size: 20px;
}

.page__item__text {
  color: #a3a3a3;
  line-height: 1.8;
  margin: 14px 0 30px 0;
}

.page__item__link {
  color: #6953e7;
  font-weight: 700;
  text-decoration: none;

  &::before {
    content: '';
    position: absolute;
    width: 140px;
    height: 2px;
    background-color: #b4a6dc;
    margin-top: 22px;
  }
}

.page__item__last {
  width: 200px;
  position: relative;
  left: 1034px;
  bottom: 108px;
}

.section__title {
  font-weight: 700;
  font-size: 50px;
  text-align: center;
}

.section__imgs {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section__img1 {
  width: 49%;
}

.section__img2 {
  width: 49%;
}

.section {
  padding: 100px 0;
  background-color: #ebf0fe;
}

.section__imgs {
  margin-top: 80px;
}

.sidebar {
  background-color: #ebf2ff;
  padding-bottom: 40px;
}

.sidebar .container {
  border-radius: 20px;
  padding: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar__title {
  font-size: 40px;
}

.sidebar__text {
  color: #d0d0d0;
  line-height: 1.7;
  margin-top: 10px;
}

.sidebar__content {
  width: 45%;
}

.footer {
  padding: 40px 0;
  background-color: #f4f6fa;
}

.footer__list {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.footer__item1 {
  width: 30%;
}

.footer__line {
  margin-top: 50px;
  border: 1px solid #dedfe2;
}

.footer__last__text {
  text-align: center;
  margin-top: 20px;
  color: #bbbcbe;
}

.footer__title::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background-color: $blue;
  margin-top: 30px;
}

.footer__text {
  color: #8b8b8b;
  line-height: 1.8;
  margin-top: 30px;
}

.footer__small__title {
  font-size: 22px;
}

.footer__small__list {
  list-style: none;
}

.footer__small__link {
  text-decoration: none;
  color: #9e9e9e;

  &:hover {
    text-decoration: underline;
  }
}

.footer__small__item {
  margin: 10px 0;
}

@media (max-width: 1120px) {
  .container {
    max-width: 970px;
  }

  .page__item__last {
    display: none;
  }

  .main__right__img {
    width: 95%;
  }

  .header__img {
    width: 95%;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 750px;
  }

  .header .container {
    flex-direction: column-reverse;
  }

  .header__right {
    display: flex;
    justify-content: center;
  }

  .header__left {
    width: 95%;
    text-align: center;
  }

  .header__social {
    justify-content: center;
  }

  .header__topContent {
    margin-top: 20px;
  }

  .navbar__menu {
    display: none;
  }

  .navbar__bars {
    display: block;
    margin-right: 10px;
    transition: transform 0.7s;
  }

  .navbar__btn {
    display: flex;
    align-items: center;
  }

  .main .container {
    display: flex;
    flex-direction: column-reverse;
  }

  .main__left {
    width: 95%;
    text-align: center;
  }

  .main__right {
    width: 95%;
    text-align: center;
  }

  .main__bottom {
    flex-direction: column;
  }

  .aside .container {
    flex-direction: column;
  }

  .aside__left {
    width: 95%;
    display: flex;
    justify-content: center;
  }

  .aside__right {
    text-align: center;
    width: 95%;
  }

  .widget__header {
    flex-direction: column;
    width: 95%;
    text-align: center;
  }

  .widget__header__title {
    width: 95%;
  }

  .main__bottom__span {
    width: 95%;
    margin-top: 20px;
  }

  .page__list {
    flex-direction: column;
  }

  .page__item {
    width: 95%;
  }

  .section__imgs {
    flex-direction: column;
  }

  .section__img1 {
    width: 95%;
  }

  .section__img2 {
    width: 95%;
    margin-top: 20px;
  }

  .sidebar .container {
    flex-direction: column;
  }

  .sidebar__content {
    text-align: center;
    width: 95%;
  }

  .footer__list {
    flex-wrap: wrap;
  }

  .footer__item {
    width: 45%;
  }

  body {
    overflow-x: hidden;
  }

  .navbar__menu {
    position: absolute;
    right: 0;
    height: 92vh;
    top: 10vh;
    background-color: rgb(44, 44, 61);
    flex-direction: column;
    align-items: center;
    width: 50%;
    border-radius: 20px;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }

  .navbar__select {
    margin: 20px 0;
    border-radius: 5px;
    padding: 10px;
  }
  .navbar__select2 {
    border-radius: 5px;
    color: #787878;
    margin-top: 10px;
  }

  .navbar__link {
    margin: 20px;
    color: #787878;
  }
  .navbar__link2 {
    color: #787878;
    text-decoration: none;
  }
}

@media (max-width: 767px) {
  .container {
    max-width: 500px;
  }

  .aside__left__img {
    width: 95%;
  }

  .sidebar__content {
    width: 95%;
  }

  .main__bottom__span::before {
    display: none;
  }

  .footer__item1 {
    width: 95%;
    text-align: center;
    margin-bottom: 20px;
  }

  .footer__item {
    width: 95%;
    margin: 0 auto;
    text-align: center;
  }

  .aside__right__last {
    flex-direction: column;
    justify-content: center;
    width: 95%;
  }

  .sidebar .container {
    padding: 40px 0;
  }
}

@media (max-width: 520px) {
  .container {
    width: 90%;
  }

  .navbar__btn1 {
    display: none;
  }

  .navbar__btn2 {
    display: none;
  }

  .aside__right__social {
    flex-direction: column;
  }

  .aside__right__social img {
    margin: 10px 0;
  }

  .group__link {
    flex-direction: column;
    display: flex;
    justify-content: center;
  }

  .first__link {
    margin-bottom: 20px;
  }

  .second__link {
    display: inline-block;
    margin-right: 30px;
    margin: 0 auto;
  }

  .header__social {
    flex-direction: column;

    img {
      margin: 10px auto;
    }
  }
}

.nav-active {
  transform: translateX(0);
}
</style>
