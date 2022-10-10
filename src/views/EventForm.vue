<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="saveEvent">
      <BaseInput
        v-model="event.category"
        type="text"
        label="Category"
        class="field"
      />

      <h3>Name & describe your event</h3>

      <BaseInput v-model="event.title" type="text" label="Title" />

      <BaseInput v-model="event.description" type="text" label="Description" />

      <h3>Where is your event?</h3>

      <label>Location</label>

      <BaseInput v-model="event.location" type="text" label="Location" />

      <h3>Who is your organizer?</h3>

      <BaseSelect
        :options="GStore.organizers"
        v-model="event.organizer.id"
        label="Select an Organizer"
      />

      <button type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  inject: ['GStore'],

  data() {
    return {
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        organizer: { id: '', name: '' }
      }
    }
  },
  methods: {
    saveEvent() {
      EventService.saveEvent(this.event)
        .then((response) => {
          console.log(response)
          this.$router.push({
            name: 'EventLayoutView',
            params: { id: response.data.id }
          })
          this.GStore.flashMessage =
            'You are succcessfully add a new event for ' + response.data.title
          setTimeout(() => {
            this.GStore.flashMessage = ''
          }, 3000)
        })
        .catch(() => {
          this.$router.push('NetworkError')
        })
    }
  }
}
</script>
<style scoped></style>
