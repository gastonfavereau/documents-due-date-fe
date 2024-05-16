import { fetchClients } from "../lib/data"

export async function ListOfClients() {
  const dataClients = await fetchClients()
  console.log(dataClients)

  return (

    dataClients.map(item => (
      <article key={item.id}>
        <h2>tax_identification: {item.tax_identification}</h2>
        <p>address: {item.address}</p>
        <p>name: {item.name}</p>
        <p>email: {item.email}</p>
        <p>phone: {item.phone}</p>
        <hr />
      </article>
    ))

  )
}



