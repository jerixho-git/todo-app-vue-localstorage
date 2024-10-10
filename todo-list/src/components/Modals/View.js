export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
      todo: {
        type: Object,
        required: true,
      }
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleString();
      }
    }
  };