const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted');
    },
    add(val) {
      // this.counter++;
      this.counter += val;
    },
    remove(val) {
      // this.counter--;
      this.counter -= val;
    },
    setName(event, apellido) {
      this.name = event.target.value.concat(' ', apellido);
    },
  },
});

app.mount('#events');
