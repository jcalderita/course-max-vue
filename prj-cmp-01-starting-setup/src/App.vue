<template>
  <ul></ul>
</template>
<script>
import { uuid } from 'vue-uuid';
export default {
  data() {
    return {
      storedResources: [
        {
          id: uuid.v1(),
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: uuid.v1(),
          title: 'Google',
          description: 'Learn to Google ...',
          link: 'https://google.com'
        }
      ]
    };
  }
};
</script>
