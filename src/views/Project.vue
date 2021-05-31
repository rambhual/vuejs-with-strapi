<template>
  <vue-title title="Project Page" />
  <section class="section">
    <div class="container">
      <div class="columns is-multiline mb-6">
        <div class="column is-5">
          <h2 class="title is-spaced">
            <span>Make your</span>
            <span class="has-text-primary">life easier</span>
            <span>for marketing sales and customer support</span>
          </h2>
        </div>
        <div class="column is-7">
          <p class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu
            vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.
          </p>
        </div>
      </div>
      <div class="columns is-multiline">
        <div
          v-for="product in products"
          :key="product.id"
          class="column is-6-tablet is-3-desktop"
        >
          <div class="box py-6 has-text-centered">
            <svg
              class="mb-4 mx-auto image is-32x32 has-text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              ></path>
            </svg>
            <h3 class="title is-size-5 is-spaced mb-3">
              {{ product.name.substr(0, 10).concat("...") }}
            </h3>
            <p class="subtitle">
              {{ product.description.substr(0, 20).concat("...") }}
            </p>
            <p>${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import products from "../assets/products.json";
export default {
  data() {
    return { products };
  },
};
</script>

<style>
</style>