<template>
  <vue-title title="Home Page" />
  <div class="is-max-w-lg mx-auto mb-5 has-text-centered">
    <span class="tag is-info is-rounded">New project</span>
    <h2 class="mt-4 title is-spaced">
      <span>The quick</span>
      <span class="has-text-primary">brown fox</span>
      <span>jumps over the lazy dog.</span>
    </h2>
    <p class="subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget
      justo et iaculis.
    </p>
  </div>
  <div class="is-max-w-xl mx-auto mb-6">
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="control is-expanded has-icons-left">
            <span class="icon is-small is-left">
              <svg
                class="image is-24x24 has-text-dark"
                xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                ></path>
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                ></path>
              </svg>
            </span>
            <input
              class="input has-background-link-light"
              type="text"
              placeholder="Type your e-mail"
            />
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left">
            <span class="icon is-small is-left">
              <svg
                class="image is-24x24 has-text-dark"
                xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <input
              class="input has-background-link-light"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button
              class="button is-primary is-block is-fullwidth"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="is-max-w-4xl mx-auto pb-6">
    <div
      class="columns is-mobile is-multiline is-centered is-vcentered has-text-centered"
    >
      <div class="mb-4 column is-6-mobile is-4-tablet is-2-desktop">
        <img src="metis-assets/logos/brands/tesla.svg" alt="" />
      </div>
      <div class="mb-4 column is-6-mobile is-4-tablet is-2-desktop">
        <img src="metis-assets/logos/brands/facebook.svg" alt="" />
      </div>
      <div class="mb-4 column is-6-mobile is-4-tablet is-2-desktop">
        <img src="metis-assets/logos/brands/marvel.svg" alt="" />
      </div>
      <div class="mb-4 column is-6-mobile is-4-tablet is-2-desktop">
        <img src="metis-assets/logos/brands/nike.svg" alt="" />
      </div>
      <div class="mb-4 column is-hidden-mobile is-4-tablet is-2-desktop">
        <img src="metis-assets/logos/brands/airbnb.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style>
</style>