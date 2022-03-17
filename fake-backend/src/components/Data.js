import React, {useState} from 'react'
import './Data.css'
import {MdDeleteOutline} from "react-icons/md"

export default function Data(props) {
    const {details, deleteItem, fetchTheData} = props
    const {id, name, completed} = details

    const[active, setActive] = useState(completed)

    const deleteName = () =>{
        deleteItem(id)
    }


    const classStyle = active? "line-through": "no-line"

    const selectedActive = async() =>{
      const url = `http://localhost:4001/Courses_List/${id}`
      const options = {
        method : "PATCH",
        headers : {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
            completed: !active
        })
      }
      const res = await fetch(url, options)
      const data = await res.json()
      setActive(!active)
      fetchTheData(data)
    }


  return (
    <li className='list-item'>
        <div className='input-label'>
          <input className='input' type="checkbox" checked={active} id={`check${id}`} onChange={selectedActive}/>
          <label className={`label ${classStyle}`} htmlFor={`check${id}`}>{name}</label>
        </div>
        <button className='button' type='button' onClick={deleteName}><MdDeleteOutline className="icon"/></button>
    </li>
  )
}
