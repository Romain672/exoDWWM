/*
fetch("https://jsonplaceholder.typicode.com/users")

.then (r => r.json())
.then(body => {
  for (const person of body){
    console.log(document.querySelector("#resultat"));
    document.querySelector("#resultat").
    innerHTML += `<h3>${person.name}</h3>`
  }
})
*/

/*
async function fetchUsers(){
  const r = await fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-type": "application/json"
  },
  body: '{"name": "Jhon Doe"}'
})

  if (r.ok){
    return r.json()
  }
  throw new Error('Impossible de contacter le serveur');

}
fetchUsers()
.then(users => console.log(users))
.catch (e => console.log(e))
*/


/*
const a = new AbortController();
Promise.race([
  fetch("https://jsonplaceholder.typicode.com/users/?_limit=10", {signal: a.signal}),
  fetch("https://jsonplaceholder.typicode.com/posts/?_limit=3", {signal: a.signal}),
])
.then(r => r.json()).then(body => {
  a.abort()
  console.log(body)
})*/
