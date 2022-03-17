import React from 'react'

export default function Table(props) {

    const {details} = props
    const {id, userId, title, completed} = details
    let value = ""

  /*  if (completed === "true"){
      value = "true"
    }else{
      value = "false"
    } */

  return (
    <tbody>
        <tr>
            <th scope="row">{id}</th>
            <td>{userId}</td>
            <td>{title}</td>
            <td>{completed? 'Completed':"Incomplete"}</td>
        </tr>
    </tbody>
  )
}
