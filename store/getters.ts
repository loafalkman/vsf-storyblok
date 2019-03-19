import { StoryblokState } from '../types/StoryblokState'
import { GetterTree } from 'vuex';

export const getters: GetterTree<StoryblokState, any> = {
    story: state => {
        return state.story
      }
}

export default getters
