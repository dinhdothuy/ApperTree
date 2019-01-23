import axios from "axios";

export default {
  // Gets all appers
  getAppers: function() {
    return axios.get("/api/appers/");
  },
  // Gets the apper with the given id
  getApper: function(id) {
    return axios.get("/api/appers/" + id);
  },
  // Deletes the apper with the given id
  deleteApper: function(id) {
    return axios.delete("/api/appers/" + id);
  },
  // Saves a apper to the database
  saveApper: function(apperData) {
    return axios.post("/api/appers", apperData);
  },

  // Gets all users
  getUsers: function() {
    return axios.get("/api/users/");
  },
  // Gets the apper with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the apper with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a apper to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
