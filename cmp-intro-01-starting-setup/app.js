const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: '65f9af5d-f23f-4065-ac85-da725569fdcd',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
        {
          id: '65f9af5d-a53f-4065-ac85-da725569fdcd',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        },
      ],
    };
  },
  methods: {},
  computed: {},
  watch: {},
});

app.component('friend-contact', {
  data() {
    template: `        
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toogleDetails">{{detailsVisibleHide}} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
    `;
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
  computed: {
    detailsVisibleHide() {
      return this.detailsAreVisible ? 'Hide' : 'Show';
    },
  },
});

app.mount('#app');
