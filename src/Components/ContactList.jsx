import {useState, useEffect} from "react"
import ContactRow from "./ContactRow"

export default function ContactList () {

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
        <ContactRow />
      </tbody>
    </table>
  )
}