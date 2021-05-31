<template>
  <section class="is-relative" style="overflow: hidden">
    <div
      class="is-hidden-mobile column is-3"
      style="
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 250px;
        margin-left: -40px;
      "
    >
      <img
        style="max-height: 350px"
        src="metis-assets/illustrations/walk-dog.png"
        alt=""
      />
    </div>
    <div
      class="is-hidden-mobile column is-3"
      style="
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 220px;
        margin-right: -130px;
      "
    >
      <img
        style="max-height: 350px"
        src="metis-assets/illustrations/phone-online-shopping.png"
        alt=""
      />
    </div>
    <nav
      class="navbar is-relative is-transparent py-3"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#"
            ><img
              src="metis-assets/logos/metis/metis.svg"
              alt=""
              style="min-height: 40px; width: 100px"
          /></a>
          <a
            class="navbar-burger"
            role="button"
            type="button"
            data-toggle="side-menu"
            data-target="#sideMenuHeaders08"
            aria-controls="sideMenuHeaders08"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start is-centered-absolute">
            <router-link class="navbar-item" :to="{ name: 'Dashboard' }"
              >Product</router-link
            ><router-link class="navbar-item" to="/">Company</router-link
            ><a class="navbar-item" href="#">About Us</a
            ><a class="navbar-item" href="#">Features</a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons" v-if="isAuthenticated">
                <button class="button is-primary is-outlined" @click="logout">
                  Log Out
                </button>
              </div>
              <div class="buttons" v-else>
                <router-link class="button is-primary is-outlined" to="/login"
                  >Log In</router-link
                ><router-link class="button is-primary" to="/register"
                  >Sign Up</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="section">
      <div class="container">
        <router-view />
      </div>
    </div>
    <div class="is-hidden" id="sideMenuHeaders08">
      <div
        class="is-fixed is-top is-right is-fullsize has-background-grey"
        style="z-index: 1"
      ></div>
      <nav
        class="is-fixed is-top is-left is-bottom navbar is-flex is-flex-direction-column pt-4 px-4"
        style="width: 80%; height: 100%; overflow-y: scroll"
      >
        <div class="mb-5 navbar-brand is-flex is-justify-content-space-between">
          <a class="navbar-item" href="#"
            ><img
              style="min-height: 35px"
              src="metis-assets/logos/metis/metis.svg"
              alt=""
              width="auto"
          /></a>
          <a
            class="navbar-item"
            data-toggle="side-menu"
            data-target="#sideMenuHeaders08"
            aria-controls="sideMenuHeaders08"
            aria-label="Close"
          >
            <svg
              class="image is-24x24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewbox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </a>
        </div>
        <div>
          <nav class="navbar mb-5">
            <div class="is-fullwidth">
              <a class="navbar-item" href="#">Product</a
              ><a class="navbar-item" href="#">Company</a
              ><a class="navbar-item" href="#">About Us</a
              ><a class="navbar-item" href="#">Features</a>
            </div>
          </nav>
          <div class="mb-6 pt-5 has-border-top">
            <a class="button is-block is-primary is-outlined mb-2" href="#"
              >Log In</a
            ><a class="button is-block is-primary" href="#">Sign Up</a>
          </div>
        </div>
        <div class="pl-4 pb-4 mt-auto">
          <p class="mb-5 is-size-7">
            <span>Get in Touch</span>
            <a href="#">info@example.com</a>
          </p>
          <a href="#"
            ><img src="metis-assets/icons/facebook-blue.svg" alt="" /></a
          ><a href="#"
            ><img src="metis-assets/icons/twitter-blue.svg" alt="" /></a
          ><a href="#"
            ><img src="metis-assets/icons/instagram-blue.svg" alt=""
          /></a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style>
</style>