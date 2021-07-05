const app = Vue.createApp({
  data() {
    return { enteredGoalValue: '', goals: [] };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
  computed: {
    hasData() {
      return this.goals.length > 0;
    },
  },
  watch: {},
});

app.mount('#user-goals');
