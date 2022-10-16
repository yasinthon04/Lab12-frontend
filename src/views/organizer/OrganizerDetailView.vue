<template>
  <p>{{ organizer.name }}</p>
  <img v-for="url in organizer.imageUrls" :key="url" :src="url" />
</template>
<script>
export default {
  props: ['organizer']
}
</script>
<style scoped>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  margin: 5px;
  width: 150px;
}
img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>