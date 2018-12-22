// List of API calls to be used within the application
import axios from "axios";

export default {
  // Gets all cards
  getCards: function () {
    return axios.get("/api/users");
  },
  // Gets all specific card
  getCard: function (id) {
    return axios.get("/api/users/" + id);
  },
  // updates card
  updateCard: function (id,cardData) {
    return axios.put("/api/users/" + id, cardData);
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  }
};
