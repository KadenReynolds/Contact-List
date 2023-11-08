

export default function SelectedContact ({selectedContactId, setSelectedContactId}){

  return (
  <div className="selectedContactDiv">
    <h1>{selectedContactId.name}</h1> 
    <h1>({selectedContactId.username})</h1>
    <ul>
      <li>{selectedContactId.email}</li>
      <li>{selectedContactId.phone}</li>
    </ul>
    <a href={selectedContactId.website}>{selectedContactId.name}'s Website</a>
    <br/>
    <br/>
    <button onClick={() => {setSelectedContactId(null)}}>Return</button>
  </div>
  )
}