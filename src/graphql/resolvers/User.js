'use strict'

const axios = require('axios');

const UsersController = {
  index: () => {
    const URL = 'https://demo5518206.mockable.io/users';

    return axios.get(URL)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return { error: err }
      });
  }
}

module.exports = UsersController;