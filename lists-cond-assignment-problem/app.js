const app = Vue.createApp({
  data() {
    return { task: '', tasks: [], show: true };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      this.task = '';
    },
    changeShow() {
      this.show = !this.show;
    },
  },
  computed: {
    hasTask() {
      return this.tasks.length > 0;
    },
    captionList() {
      return this.show ? 'Hide' : 'Show';
    },
  },
  watch: {},
});

app.mount('#assignment');
