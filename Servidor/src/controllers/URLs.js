function UrlAccestoken(){
    var refresh_ = '1000.361a90e9a2b60154103970f01fb42e33.b9220687af76e357bb1e1e4aefc95d95';
    var url = 'https://accounts.zoho.com/oauth/v2/token?refresh_token=' + refresh_ + '&client_id=1000.1X8CFKQHNVMIQYBM2LD5D630UAMMXB&client_secret=ed77d9ad812478a75cb46e11db1bbc262b8f1d49bf&grant_type=refresh_token';
    return url;
}
// Example POST method implementation:
async function AccesToken(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

// Example GET method implementation:
async function Consulta(url = "", data = {}, access_) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      Authorization: "Zoho-oauthtoken " + access_,
      "Access-Control-Allow-Origin": "*"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //   redirect: 'follow', // manual, *follow, error
    //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// Example POST method implementation:
// async function agregar(url = "", data = {}, access_) {
    async function agregar(url = "", data = {}, access_) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          //   mode: 'cors', // no-cors, *cors, same-origin
          //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          //   credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            Authorization: "Zoho-oauthtoken " + access_,
            "Access-Control-Allow-Origin": "*"
  
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data)
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
      async function uploadFIle(url = "", data = {}, access_) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          //   mode: 'cors', // no-cors, *cors, same-origin
          //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          //   credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            Authorization: "Zoho-oauthtoken " + access_,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data"
            // "Content-Type": 'application/json'
  
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data)
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
      // Example POST method implementation:
// async function agregar(url = "", data = {}, access_) {
    async function update(url = "", data = {}, access_) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: "PATCH", // *GET, POST, PUT, DELETE, etc.
          //   mode: 'cors', // no-cors, *cors, same-origin
          //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          //   credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            Authorization: "Zoho-oauthtoken " + access_,
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
            'Access-Control-Allow-Methods': 'PUT'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data)
          //   redirect: 'follow', // manual, *follow, error
          //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          //   body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }


export {UrlAccestoken,agregar,Consulta,AccesToken,update,uploadFIle}