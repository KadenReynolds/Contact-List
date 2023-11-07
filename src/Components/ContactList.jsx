import {useState, useEffect} from "react"


const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList ({setSelectedContactId}) {
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

  return( 
    <table cellPadding={25}>
      <thead>
        <tr>
          <th colSpan={3}>Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="lable">Name:</td>
          <td className="lable">Email:</td>
          <td className="lable">Phone:</td>
        </tr>
        {contactArray.map((contact) => {
          return( 
          <tr key={contact.id} onClick={() => {setSelectedContactId(contact)}}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
  )
}