import Vue from 'vue';
import { StoryblokState } from '../types/StoryblokState';
import { ActionTree } from 'vuex';
import * as types from './mutation-types';
import config from 'config';
import { Logger } from '@vue-storefront/core/lib/logger';

export const actions: ActionTree<StoryblokState, any> = {
  fetchAsync (context, { value, setcurrent = true }) {
    return Vue.prototype.$storyapi.get('cdn/stories/' + value, {
      version: config.storyblok.version
    }).then((response) => {
      context.commit(types.STORYBLOK_UPD_CURRENT, response.data.story)
    }).catch((err) => {
      console.log('cdn/stories/' + value + err);
      context.commit(types.STORYBLOK_RESET_CURRENT)
    });
  },
  global (context) {
    return Vue.prototype.$storyapi.get('cdn/stories/uk/global', {
      version: config.storyblok.version
    }).then((response) => {
      context.commit(types.STORYBLOK_UPD_GLOBAL, response.data.story.content);
    }).catch((err) => {
      console.log('-- uk/global', err);
      context.commit(types.STORYBLOK_RESET_GLOBAL);
    });
  },
  requestID () { // request by id
    console.log('cdn/stories/563618');
    return Vue.prototype.$storyapi.get('cdn/stories/563618', {
      version: config.storyblok.version
    }).then((response) => {
      console.log('get cdn/stories/563618', response)
    }).catch((err) => {
      console.log('get cdn/stories/563618', err)
    });
  },
  links () { // request all links
    console.log('cdn/links');
    return Vue.prototype.$storyapi.get('cdn/links', {
      version: config.storyblok.version
    }).then((response) => {
      console.log('all links', response)
    }).catch((err) => {
      console.log('all links', err)
    });
  },
  /**
   * Reset current story
   * @param {Object} context
   */
  reset(context) {
    context.commit(types.STORYBLOK_RESET_CURRENT);
  }
}
