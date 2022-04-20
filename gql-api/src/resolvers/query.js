module.exports = {
  // eslint-disable-next-line no-unused-vars
  sessions: (parent, args, context, info) => {
    return context.dataSources.sessionAPI.getSessions();
  },
  // eslint-disable-next-line no-unused-vars
  sessionById: (parent, args, context, info) => {
    return context.dataSources.sessionAPI.getSessionById(args.id);
  },
  // eslint-disable-next-line no-unused-vars
  speakers: (parent, args, context, info) => {
    return context.dataSources.speakerAPI.getSpeakers();
  },
  // eslint-disable-next-line no-unused-vars
  speakerById: (parent, args, context, info) => {
    return context.dataSources.speakerAPI.getSpeakerById(args.id);
  },
};
