<template>
  <h1>Organizer</h1>

  <OrganizerCard
    v-for="organizer in organizers"
    :key="organizer.id"
    :organizer="organizer"
  ></OrganizerCard>

  <div class="pagination">
    <router-link
      id="page-prev"
      :to="{ name: 'OrganizerView', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
    >
      Prev Page
    </router-link>
    <router-link
      id="page-next"
      :to="{ name: 'OrganizerView', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
    >
      Next Page
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import OrganizerCard from '@/components/OrganizerCard.vue'
import OrganizerService from '@/services/OrganizerService.js'
export default {
  name: 'OrganizertListView',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    OrganizerCard
  },
  data() {
    return {
      organizers: null,
      totalOrganizers: 0
      // keyword: null
    }
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    OrganizerService.getOrganizerPage(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.organizers = response.data
          console.log(response.data)
          comp.totalOrganizers = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, next) {
    OrganizerService.getOrganizerPage(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.organizers = response.data
        console.log(response.data)
        this.totalOrganizers = response.headers['x-total-count']
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  methods: {
    // updateKeyword() {
    //   var queryFunction
    //   if (this.keyword === '') {
    //     queryFunction = EventService. getOrganizers(3, 1)
    //   } else {
    //     queryFunction = EventService.getEventByKeyword(this.keyword, 3, 1)
    //   }
    //   queryFunction
    //     .then((response) => {
    //       this.organizers = response.data
    //       console.log(this.organizers)
    //       this.totalOrganizers = response.headers['x-total-count']
    //       console.log(this.totalOrganizers)
    //     })
    //     .catch(() => {
    //       return { name: 'NetworkError' }
    //     })
    // }
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalOrganizers / 3)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
  margin-left:800px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
.search-box {
  width: 300px;
}

</style>