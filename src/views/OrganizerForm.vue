<template>
  <div>
    <h1>Create an organizer</h1>
    <form @submit.prevent="saveOrganizer">
      <BaseInput
        v-model="organizer.name"
        type="text"
        label="Organizer"
        class="field"
      />

      <UploadImages @changed="handleImages" />

      <button type="submit">Submit</button>
    </form>

    <pre>{{ organizer }}</pre>
  </div>
</template>

<script>
import OrganizerService from '@/services/OrganizerService.js'
import UploadImages from 'vue-upload-drop-images'
export default {
  inject: ['GStore'],
  components: {
    UploadImages
  },
  data() {
    return {
      organizer: {
        name: '',
        imageUrls: []
      },
      files: []
    }
  },
  methods: {
    saveOrganizer() {
      Promise.all(
        this.files.map((file) => {
          return OrganizerService.uploadFile(file)
        })
      ).then((response) => {
        //console.log(response)
        //console.log('finish upload file')
        this.organizer.imageUrls = response.map((r) => r.data)
        OrganizerService.saveOrganizer(this.organizer).then((res) => {
          console.log(res)
        })
      })
    },
    handleImages(files) {
      //console.log(files)
      this.files = files
    }
  }
}
</script>
<style scoped></style>