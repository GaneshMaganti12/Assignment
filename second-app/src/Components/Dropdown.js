import React, {useState} from "react"

function Dropdown(){
    const [show, setShow] = useState(true)
    const handleClick =() =>{
        setShow(!show)
    }

    const coursesList = ["React", "Angular", "NodeJs", "Test"]
    return(
        
        <div className="dropdown">
            <button onClick={handleClick} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul className={show? "dropdown-menu show":"dropdown-menu"} aria-labelledby="dropdownMenuButton1">
                {coursesList.map((each) =>
                    <li><a className="dropdown-item" href="/#">{each}</a></li>
                )}
            </ul>
        </div>
    )

}

export default Dropdown