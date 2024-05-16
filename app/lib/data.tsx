export function fetchClients() {
  return fetch('http://localhost:3000/api/v1/client')
  .then(res => res.json())
}