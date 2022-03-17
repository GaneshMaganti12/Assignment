import React, {useEffect, useState} from 'react'
import Data from './Data'
import "./ServerData.css"

export default function ServerData() {

    const[names, setName] = useState("")

    const[notCompleteList, setNotComplete] = useState([])

    const[completeList, setComplete] = useState([])

    // useEffect( async() => {
    //   const url = "  http://localhost:4001/Courses_List"
    //   const options = {
    //       method: "GET", 
    //       headers:{
    //           'Content-Type': "application/json"
    //         }
    //     }
    //     const res = await fetch(url, options)
    //     const data = await res.json()
    //     console.log(data)
    //     setList([...data])
    // }, [])

    const fetchData = async () =>{
        const url = "http://localhost:4001/Courses_List"
        const options = {
            method: "GET", 
            headers:{
                'Content-Type': "application/json"
            }
        }
        const res = await fetch(url, options)
        const data = await res.json()
        setNotComplete((data.filter(each =>(each.completed === false))))
        setComplete(data.filter(each =>(each.completed === true)))
    }

    useEffect(() => {
      fetchData()
    }, [])
    

    const changeInput = (event) =>{
        setName(event.target.value)
    }

    const handleChange = async(event) =>{
        if(event.key === 'Enter'){
            const url = "http://localhost:4001/Courses_List"
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    name: names,
                    completed: false
                })
            }
            const res = await fetch(url, options)
            const data = await res.json()
            fetchData(data)
            setName("")
        }
    }

    // const getData = async() =>{
    //     const url = "http://localhost:4001/Courses_List" 
    //     const options = {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': "application/json"
    //         }
    //     }
    //     const res = await fetch(url, options)
    //     const data = await res.json()
    //     setList(data)
    // }

    const deleteItem = async(id) =>{
        const url = `http://localhost:4001/Courses_List/${id}`
        const options = {
            method: "DELETE",
        }
        const res = await fetch(url, options)
        console.log(res)
        fetchData()
    }

    // const selectedActive = async(id, active) =>{
    //     const url = `http://localhost:4001/Courses_List/${id}`
    //     const options = {
    //       method : "PATCH",
    //       headers : {
    //         'Content-Type': "application/json"
    //       },
    //       body: JSON.stringify({
    //           completed: active
    //       })
    //     }
    //     const res = await fetch(url, options)
    //     const data = await res.json()
    //     fetchData(data)
    //   }

  return (
    <div className='server-container'>
        <input className='input-text' type="text" onChange={changeInput} onKeyDown={handleChange} value={names}/>
        {(notCompleteList.length !== 0) && <p className='complete'>Completed</p>}
        {/* <button className='add-button' type='button'>Add</button> */}
        <ul className='list-container'>
            {notCompleteList.map((each)=>(
                <Data details={each} key={each.id} deleteItem={deleteItem} fetchTheData={fetchData}/>
            ))}
        </ul>
        {(notCompleteList.length !== 0 && completeList !== 0) && <p className='complete'>Completed</p>}
        <ul className='list-container'>
            {completeList.map((each)=>(
                <Data details={each} key={each.id} deleteItem={deleteItem} fetchTheData={fetchData}/>
            ))}
        </ul>
    </div>
  )
}
