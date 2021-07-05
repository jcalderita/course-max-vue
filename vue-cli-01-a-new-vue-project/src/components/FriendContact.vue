<template>
  <li>
    <h2>{{ name }} {{ isFavoriteText }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ textDetails }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
    <button @click="removeFriend">Remove Friend</button>
  </li>
</template>
<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    isFavorite: { type: Boolean, required: false, default: false },
  },
  // emits: ['toogle-favorite'],
  emits: {
    'toogle-favorite': function(id) {
      return id ? true : false;
    },
    'remove-friend': function(id) {
      return id ? true : false;
    },
  },

  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toogle-favorite', this.id);
    },
    removeFriend() {
      this.$emit('remove-friend', this.id);
    },
  },
  computed: {
    textDetails() {
      return this.detailsAreVisible ? 'Hide' : 'Show';
    },
    isFavoriteText() {
      return this.isFavorite ? '(Favorite)' : '';
    },
  },
};
</script>
