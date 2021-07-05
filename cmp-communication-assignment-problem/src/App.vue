<template>
  <div>
    <user-data @upsert-user="addUser" />
    <active-user :="user" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: { userName: '', age: null },
    };
  },
  methods: {
    addUser(user) {
      console.log(user);
      this.user = user;
    },
  },
};
</script>
