import React, {useState} from "react"

function List(){
    const [showList, setShowList] = useState([])
    const selectClick =(each) =>{
        setShowList([...showList,each])
    }

    const coursesList = ["React", "Angular", "NodeJs","Test"]
    return(
        <div>
            <ul className="list-group">
                {coursesList.map((each) =>(
                    <li onClick={()=>selectClick(each)} className="list-group-item">{each}</li>
                ))}
            </ul>
            {showList.map((eachCourse) =>(
                <p>{eachCourse}</p>
            ))}
        </div>
    )

}

export default List