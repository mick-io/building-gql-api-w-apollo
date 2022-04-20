const Query = require("./query");
const Session = require("./session");
const Mutation = require("./mutations");

module.exports = {
  Query,
  Session,
  Mutation,
  SessionOrError: {
    __resolveType(obj) {
      if (obj.code) {
        return "Error";
      }
      return "Session";
    },
  },
};
