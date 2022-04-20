module.exports = {
  // eslint-disable-next-line no-unused-vars
  toggleFavoriteSession: (parent, args, ctx, info) => {
    return ctx.dataSources.sessionAPI.toggleFavoriteSession(args.id);
  },

  // eslint-disable-next-line no-unused-vars
  addNewSession: (parent, args, ctx, info) => {
    return ctx.dataSources.sessionAPI.addSession(args.session);
  },
};
