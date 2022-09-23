const axios = require('axios');

async function getCapital(country){
    
    let url = "https://jsonmock.hackerrank.com/api/countries?name="
    let response = await axios.get('URL here');
    //   const response = await fetch(`${url}${country}`)
      const data1 = await response.json()

      const {data} = data1;
      const object = data[0]
      
      return object["capital"]
    
}

console.log(getCapital("India"))
