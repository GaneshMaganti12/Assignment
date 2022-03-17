import React, {useState, useEffect} from 'react'
import Table from "./Table"

function FetchData () {

    const [list, setList] = useState([])

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data =>{
            setList(data)
        });
    }, [])
    
 return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Completed</th>
                </tr>
            </thead>
            {list.map((each) =>(
                <Table key={each.id} details={each} />
            ))}
        </table>
    </div>
  )
}


export default FetchData