const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      isHidden: false,
      inputBColor: '',
    };
  },
  methods: {
    visibility() {
      this.isHidden = !this.isHidden;
    },
  },
  computed: {
    parClass() {
      return [this.inputClass, { hidden: this.isHidden }];
    },
  },
});

app.mount('#assignment');
