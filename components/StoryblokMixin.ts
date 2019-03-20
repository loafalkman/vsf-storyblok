import { mapGetters } from 'vuex'
import { requestGlobal, requestStory } from '../helpers'

export default {
  name: 'Storyblok',
  computed: {
    ...mapGetters({
      story: 'storyblok/storyCurrent',
      global: 'storyblok/globalStory'
    })
  },
  mounted () {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
          console.log(event)
          this.$store.commit('storyblok/STORYBLOK_UPD_CURRENT', event.story)
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  },
  beforeRouteEnter () {

  },
  asyncData ({ store, route, context }) {
    return Promise.all([requestGlobal(store), requestStory(store, route)]).then(resolve => resolve)
  }
}
