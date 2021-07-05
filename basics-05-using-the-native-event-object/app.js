const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '',
    };
  },
  methods: {
    outputFullname() {
      // return this.name === '' ? '' : this.name.concat(' ', 'Calderita');
      return this.name && this.name.concat(' ', 'Calderita');
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
  },
  computed: {
    fullname() {
      // console.log('calculando');
      return this.name === '' && this.lastName === '' ? '' : this.name.concat(' ', this.lastName);
    },
  },
  watch: {
    counter(value) {
      if (value > 50) this.counter = 0;
    },
    // name(value) {
    //   this.fullname = value === '' ? '' : value.concat(' ', this.lastName);
    // },
    // lastName(value) {
    //   this.fullname = value === '' ? '' : this.name.concat(' ', value);
    // },
  },
});

app.mount('#events');
