import { StoryblokState } from '../types/StoryblokState'
import { GetterTree } from 'vuex';

export const getters: GetterTree<StoryblokState, any> = {
    storyCurrent: state => state.story,
    header: state => state.global.header,
    footer: state => state.global.footer
}

export default getters
