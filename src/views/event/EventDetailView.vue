<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
  <img v-for="url in event.imageUrls" :key="url" :src="url" />
</template>

<script>
export default {
  props: ['id', 'event']
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
