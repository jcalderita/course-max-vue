const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(val) {
      this.counter += val;
    },
  },
  computed: {
    getResult() {
      return this.counter.toString().concat(' ', this.counter < 37 ? 'Not there yet' : 'Too much!');
    },
  },
  watch: {
    counter(value) {
      if (value >= 37) {
        setTimeout(() => {
          this.counter = 0;
        }, 5000);
      }
    },
  },
});

app.mount('#assignment');
