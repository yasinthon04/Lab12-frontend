<template>
  <router-link
    class="organizer-link"
    :to="{ name: 'OrganizerLayoutView', params: { id: organizer.id } }"
  >
    <div class="organizer-card">
      <h4>{{ organizer.name }}</h4>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'OrganizerCard',
  props: {
    organizer: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.organizer-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  
}
.organizer-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  
}
.organizer-link {
  color: #2c3e50;
  text-decoration: none;
  
}
</style>