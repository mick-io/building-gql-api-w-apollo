const { ApolloError } = require("apollo-server");
const _ = require("lodash");

module.exports = {
  speakers: async (session, args, context) => {
    try {
      const speakers = await context.dataSources.speakerAPI.getSpeakers();
      const out = speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0;
      });
      return out;
    } catch (error) {
      return new ApolloError("Unable to get speakers", "SPEAKERAPIERROR", {
        token: "UNIQUETOKEN",
      });
    }
  },
};
