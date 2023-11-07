import {useState, useEffect} from 'react'

export default function ContactRow(){
  const [contactArray, setContactArray] = useState([])

  useEffect(() => {
    async function fetchAllContacts () {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json()
        setContactArray(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchAllContacts()
  })
  return (
    contactArray.map((contact) => {
      return( 
      <tr key={contact.id} onClick={() => {console.log(contact.id)}}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
      )
    })
  )
}