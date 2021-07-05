const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  methods: {
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      const value = getRandomValue(5, 12);
      this.monsterHealth -= value;
      this.addLogMessage('Player', 'Attack', value);
      this.attackPlayer();
    },
    attackPlayer() {
      const value = getRandomValue(8, 15);
      this.addLogMessage('Monster', 'Attack', value);
      this.playerHealth -= value;
    },
    specialAttackMonster() {
      const value = getRandomValue(10, 25);
      this.monsterHealth -= value;
      this.addLogMessage('Player', 'SpecialAttack', value);
      this.attackPlayer();
    },
    healPlayer() {
      const value = getRandomValue(5, 12);
      this.playerHealth += value;
      this.addLogMessage('Player', 'Heal', value);
      if (this.playerHealth > 100) this.playerHealth = 100;
      this.attackPlayer();
    },
    surrender() {
      this.addLogMessage('Player', 'Surrender');
      this.winner = 'monster';
    },
    addLogMessage(who, what, value) {
      console.log(value);
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) return { width: '0%' };
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) return { width: '0%' };
      return { width: this.playerHealth + '%' };
    },
    mayUseSpecialAttack() {
      return !(this.currentRound !== 0 && this.currentRound % 3 === 0);
    },
  },
  watch: {
    playerHealth(value) {
      this.currentRound++;
      if (value <= 0 && this.monsterHealth <= 0) this.winner = 'draw';
      else if (value <= 0) this.winner = 'monster';
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) this.winner = 'draw';
      else if (value <= 0) this.winner = 'player';
    },
  },
});

app.mount('#game');

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
