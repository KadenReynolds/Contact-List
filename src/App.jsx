import { useState } from 'react'
import ContactList from './Components/ContactList'
import SelectedContact from './Components/SelectedContact'
import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
    <>
    {!selectedContactId ? (
    <ContactList setSelectedContactId={setSelectedContactId}/>
    )
    :
    (
    <div>There is a contact selected</div>
    )
  }
    </>
  )
}

export default App
