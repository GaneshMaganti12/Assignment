import {useState} from "react"
import AppList from "./AppList"
import "./Search.css"

function Search(){
    const data = [{id: 1,title: 'facebook', imageUrl:"https://freepngimg.com/download/facebook/141110-logo-circle-facebook-free-hq-image.png"},
                {id: 2, title: 'youtube', imageUrl:"https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png"},
                {id: 3, title: 'whatsapp', imageUrl:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"},
                {id: 4, title: 'instagram', imageUrl:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"},
                {id: 5, title: 'telegram', imageUrl:"https://media.istockphoto.com/vectors/white-paper-plane-on-blue-background-vector-illustration-vector-id951164518?k=20&m=951164518&s=612x612&w=0&h=3UdkhpEUQJJjUnWlRwSOtmgmR_B7NT5Ex_i8NSdCX_Q="},
                {id: 6, title: 'snapchat', imageUrl:"https://cdn2.downdetector.com/static/uploads/logo/image11.png"},
                {id: 7, title: 'pinterest', imageUrl:"https://play-lh.googleusercontent.com/dVsv8Hc4TOUeLFAahxR8KANg22W9dj2jBsTW1VHv3CV-5NCZjP9D9i2j5IpfVx2NTB8"},
                {id: 8, title: 'twitter', imageUrl:"https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg"},
                {id: 9, title: 'quore', imageUrl:"https://storage.googleapis.com/kaggle-organizations/407/thumbnail.png?r=95"},
                {id: 10, title: 'linkdin', imageUrl:"https://yt3.ggpht.com/ytc/AKedOLQUW9FJ6oz2WOkfU_2SbFanfDvOXrYVfE4SuaDyrz0=s900-c-k-c0x00ffffff-no-rj"},
                {id: 11, title: 'reddit', imageUrl:"https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2"}]

    const [search, changeSearch] = useState("")

    const changeInput = (event) =>{
        changeSearch(event.target.value)
    }

    const dataList = data.filter(each => (each.title.includes(search.toLocaleLowerCase())))

    return(
        <div>
            <h1>Social Apps</h1>
            <input type='search' onChange={changeInput} className="search"/>
            <ul className="list-container">
                {dataList.map(each=>(
                    <AppList keys={each.id} details={each} />
                ))}
            </ul>
        </div>
    )
}

export default Search