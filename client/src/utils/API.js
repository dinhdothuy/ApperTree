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
  }
};
