<template>
  <button :class="isPrimary">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["primary"],
  computed: {
    isPrimary() {
      return `button is-primary`;
    },
  },
};
</script>

