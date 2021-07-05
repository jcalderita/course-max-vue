<template>
  <form @submit.prevent="submitData">
    <div><label for="">Name</label><input type="text" v-model="enteredName" /></div>
    <div><label for="">Phone</label><input type="tel" v-model="enteredPhone" /></div>
    <div><label for="">E-Mail</label><input type="email" v-model="enteredEmail" /></div>
    <div><button type="submit">Add Contact</button></div>
  </form>
</template>
<script>
export default {
  emits: {
    'add-contact': function(friend) {
      return friend ? true : false;
    },
  },
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    };
  },
  methods: {
    submitData() {
      const friend = {
        name: this.enteredName,
        phone: this.enteredPhone,
        email: this.enteredEmail,
      };
      this.$emit('add-contact', friend);
    },
  },
};
</script>
