import { MutationTree } from 'vuex'
import * as types from './mutation-types'

export const mutations: MutationTree<any> = {
  [types.STORYBLOK_UPD_CURRENT] (state, story) {
    state.story = story
  },
  [types.STORYBLOK_RESET_CURRENT] (state) {
    state.story = {}
  },
  [types.STORYBLOK_UPD_GLOBAL] (state, data) {
    state.global = data
  },
  [types.STORYBLOK_RESET_GLOBAL] (state) {
    state.global = {}
  }
}
