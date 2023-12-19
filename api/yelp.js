import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer tZSaMarqu-CeUpov20ZHI2CGpsI82YJnLzNQrIhdXIJ3AJZNfFl_1a3uQ-MU8IiNoYSjKUFWfgTPwqiItfnswQv5JqZQ6D6Dk4VK5vvZUhX4WfOA5XQUsyrAjQx7ZXYx",
  },
});
