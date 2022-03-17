import './App.css';
import Header from "./Header"
import Paragraph from "./Paragraph"
import Image from "./Image"
import Button from "./Button"
import Similar from "./Similar"
import Cards from "./Cards"


function App() {
  const arrayList = [{imageUrl:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/05/972326-969525-967851-961590-p1.jpg",
                      name: "PUBG Moblie", 
                      description: "PUBG is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive."},
                     {imageUrl:"https://cdn1.dotesports.com/wp-content/uploads/2020/04/02142718/GarenaWorld.png",
                      name:"COD Mobile",
                      description:"Call of Duty is a first-person shooter video game based on id Tech 3, and was released on October 29, 2003. The game was developed by Infinity Ward and published by Activision."},
                     {imageUrl:"https://gamingonphone.com/wp-content/uploads/2021/03/91duOGX58CL-1-780x470.jpg", 
                      name:"Cash Of Clans", 
                      description:"Clash of clan is a multiplayer Strategy game in which you get a town. You have to defend this town and upgrade the town. To upgrade the town hall you have to attack another town."},
                     {imageUrl:"https://images.chesscomfiles.com/uploads/v1/article/27319.746c2259.668x375o.c6cf8543e2d5@2x.png",
                      name:"Chess", 
                      description:"Chess is one of the oldest and most popular board games. It is played by two opponents on a checkered board with specially designed pieces of contrasting colours, commonly white and black. The objective of the game is to capture the opponent's king."},
                     {imageUrl:"https://variety.com/wp-content/uploads/2018/08/candy-crush-saga.jpg", 
                      name:"Candy Crush", 
                      description:"Candy Crush Saga is a puzzle game that involves making matches of 3 or more colored candy pieces. Players swap candy pieces either horizontally and vertically, and once a match is made the candy disappears."}
                    ]

  return (
    <div className="App">
      <Header/>
      <Paragraph/>
      <Image/>
      <Button/>
      <Similar/>
      <ul className='list-container'>
        {arrayList.map((each) =>(
          <Cards gameDetails={each} />
        ))}
      </ul>
    </div>
  );
}

export default App;
