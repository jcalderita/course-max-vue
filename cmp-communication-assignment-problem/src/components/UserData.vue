<template>
  <form @submit.prevent="upsertUser">
    <div>
      <label>Name</label>
      <input type="text" v-model="user.userName" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" v-model="user.age" />
    </div>
    <button type="submit">Save</button>
  </form>
</template>
<script>
export default {
  emits: {
    'upsert-user': function(user) {
      return user ? true : false;
    },
  },
  data() {
    return {
      user: {
        userName: '',
        age: null,
      },
    };
  },
  methods: {
    upsertUser() {
      // const user = {
      //   userName: this.user.euserName,
      //   age: this.user.eage,
      // };
      this.$emit('upsert-user', this.user);
    },
  },
};
</script>
