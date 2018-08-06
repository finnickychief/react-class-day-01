/*
  3 Types of HTTP Requests:
    XMLHttpRequest
    fetch
    axios
*/

// XMLHttpRequest:

/*
  Declare
  Set the event handler - Handle the response and failures
  Open the request
  Send the request
*/

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
let url = 'https://jsonplaceholder.typicode.com/users';

method, url, async t/f
xhr.open('get', url, true);
xhr.send();

// Fetch takes in 1 or 2 parameters
// The first is the url, the second is an options object that contains the method, headers, body etc
// Fetch from the url, when you receive a result parse it from JSON, then log the parsed data. Finally, catch an error if the request fails

fetch(url)
  .then(result => result.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

// // POST fetch request:
fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    name: 'foo',
    username: 'bar',
    email: 'doe@gmail.com'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
  .then(response => response.json())
  .then(json => console.log(json));

// Axios: Much more similar to our express routes

axios
  .get(url)
  .then(response => console.log(response))
  .catch(err => console.log(error));

axios
  .post(url, {
    username: 'jdoe',
    name: 'john doe',
    email: 'jdoe@gmail.com'
  })
  .then(response => console.log(response))
  .catch(err => console.log(error));
