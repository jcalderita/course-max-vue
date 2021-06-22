const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  _methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      //event.preventDefault();
      alert('Submitted');
    },
    add(val) {
      // this.counter++;
      this.counter += val;
    },
    remove(val) {
      // this.counter--;
      // event.preventDefault();
      this.counter -= val;
    },
    setName(event, apellido) {
      this.name = event.target.value.concat(' ', apellido);
    },
  },
  get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods = value;
  },
});

app.mount('#events');
