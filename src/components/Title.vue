<script>
export default {
  name: "Dhanai Fruits",
  props: ["title"],
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = this.title;
      },
    },
  },
};
</script>