// 1. try and connect to the server over XHR (XMLHTTPRequest)
// 2. Get some data from the database
// 3. Just console.log it

// Maybe abstract queries to the server so you have a function

function fetchData(searchString, callback) {
  // Do XHR to server with search string
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     let response=JSON.parse(xhttp.responseText);
     console.log(response)
    }
  };
  xhttp.open("GET", "items", true);
  xhttp.send();
  // Call callback with parsed JSON
}
console.log('connected')


// 