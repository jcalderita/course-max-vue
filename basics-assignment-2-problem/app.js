const app = Vue.createApp({
  data() {
    return {
      texto: '',
      texto3: '',
    };
  },
  methods: {
    message() {
      alert('Jopelines');
    },
    setTexto(event) {
      this.texto = event.target.value;
    },
    setTexto3() {
      this.texto3 = this.texto;
    },
  },
});

app.mount('#assignment');
