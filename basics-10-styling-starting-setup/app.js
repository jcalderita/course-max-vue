const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      this[`box${box}Selected`] = !this[`box${box}Selected`];
    },
  },
  computed: {
    boxAClasses() {
      console.log('Entra');
      return { active: this.boxASelected };
    },
  },
});

app.mount('#styling');
