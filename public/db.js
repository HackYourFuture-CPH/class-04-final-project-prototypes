// 1. try and connect to the server over XHR (XMLHTTPRequest)
// 2. Get some data from the database
// 3. Just console.log it

// Maybe abstract queries to the server so you have a function

/* function fetchData(searchString, callback) {
  // Do XHR to server with search string
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     let response=JSON.parse(xhttp.responseText);
     response.map(x=>console.log(x.data))
    }
  };
  xhttp.open("GET", "items", true);
  xhttp.send();
  // Call callback with parsed JSON
} */

function fetchJSONData(url) {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.addEventListener('load', () => {
          const jsonData = JSON.parse(xhr.responseText);
          resolve(jsonData);
         // console.log(jsonData)
      })

      xhr.open('GET', url);
      xhr.send();
  });
}

const url ="items"

fetchJSONData(url).then(allMusicData=>{

const tbodyElement = document.querySelector('#musicTitles > tbody');
    for (const music of allMusicData) {
      //console.log(music)
        const tr = document.createElement('tr');
        //console.log(tbodyElement)
        tr.innerHTML = `
                <td>${music.id}</td>
                <td>${music.type}</td>
                <td>${music.type}</td>
                <td>${music.type}</td>
                <td>${music.type}</td>
            `;
        tbodyElement.appendChild(tr);
    }
  })

console.log('connected')
function renderMusic(music) {

  }