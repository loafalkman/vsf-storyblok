export function requestGlobal(store) {
  return new Promise((resolve, reject) => {
    store.dispatch('storyblok/global', {
    }).then(data => { // this is undefined for some reason
      // if (context) context.output.cacheTags.add(`storyblok`)
      resolve(data)
    }).catch(err => {
      console.log('error!')
      // console.error(err)
      store.dispatch('storyblok/reset')
      resolve({})
    })
  })
}

export function requestStory(store, route) {
   return new Promise((resolve, reject) => {
     store.dispatch('storyblok/fetchAsync', {
       value: route.fullPath,
       setCurrent: true
     }).then(data => { // this is undefined for some reason
       // if (context) context.output.cacheTags.add(`storyblok`)
       resolve(data)
     }).catch(err => {
       console.log('error!')
       // console.error(err)
       store.dispatch('storyblok/reset')
       resolve({})
     })
  })
}
