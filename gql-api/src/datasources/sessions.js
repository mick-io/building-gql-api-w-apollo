const fs = require("fs");

const { DataSource } = require("apollo-datasource");
const _ = require("lodash");

const data = fs.readFileSync("./data/sessions.json", "utf8");
const sessions = JSON.parse(data);

class SessionAPI extends DataSource {
  constructor() {
    super();
  }
  // eslint-disable-next-line no-unused-vars
  initialize(config) {
    //
  }

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    return session[0];
  }

  toggleFavoriteSession(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    sessions[0].favorite = !sessions[0].favorite ?? true;
    return session[0];
  }

  addSession(session) {
    session.id = 12;
    sessions.push(session);
    return session;
  }
}

module.exports = SessionAPI;
