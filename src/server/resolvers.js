const POSTS = require('./dataSources/posts')
const mapPost = (post, id) => post && ({ id, ...post });

module.exports = {
    Query: {
      launches: (_, __, { dataSources }) =>
        dataSources.launchAPI.getAllLaunches(),
      launch: (_, { id }, { dataSources }) =>
        dataSources.launchAPI.getLaunchById({ launchId: id }),

      posts: () => POSTS.map(mapPost),
      post: (_, { id }) => mapPost(POSTS[id], id),
    }
  };