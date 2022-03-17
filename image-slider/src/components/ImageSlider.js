import {useState} from "react"
import "./ImageSlider.css"

function ImageSlider(){
    const imagesList = ['https://nationalzoo.si.edu/sites/default/files/animals/africanlion-006_0.jpg',
                        'https://w0.peakpx.com/wallpaper/775/246/HD-wallpaper-tiger-wildcat-dangerous-animals-tigers-india-wildlife-wild-animals.jpg',
                        'https://www.pixelstalk.net/wp-content/uploads/2016/03/Wild-Animals-Wallpaper-HD.jpg',
                        'https://www.pixelstalk.net/wp-content/uploads/2016/08/Elephant-Images-For-Desktop.jpg',
                        'https://i.pinimg.com/originals/75/3b/d7/753bd78558a661557e13243cec707ab3.jpg'
                    ]
    
    const [index, setIndex] = useState(0)

    const changeForward = () =>{
        if (index < (imagesList.length-1)){
            setIndex(index + 1)
        }
        else{
            setIndex(imagesList.length-1)
        }
    }

    const changeBackward = () =>{
        if (index > 0){
            setIndex(index - 1)
        }
        else{
            setIndex(0)
        }
    }

    return(
        <div className="image-slider">
            <button className="button" onClick={changeBackward} type="button">-</button>
            <div className="image-card">
                <img className="image" src={imagesList[index]} alt="slide"/>
            </div>
            <button className="button" onClick={changeForward} type="button">+</button>
        </div>
    )
}

export default ImageSlider