import axios from 'axios';


// const axios = require('axios');

export async function emailSubscribtion(){
    let data = JSON.stringify({
        "email": "john@gmail.com"
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://verionx-api.onrender.com/api/v1/users/register-mail-to-mail-list',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
}


