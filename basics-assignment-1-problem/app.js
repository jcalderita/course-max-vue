const app = Vue.createApp({
  data() {
    return {
      name: 'Jorge',
      age: 42,
      img: 'https://es.vuejs.org/images/logo.png',
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
