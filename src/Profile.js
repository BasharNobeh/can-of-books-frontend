import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Profile.css"
import myPic from "./myPic.jpg"




class Profile extends React.Component{
render (){


    return (


<div id = "ProfileDiv">
    
<Card  className = "MyCard">
      <Card.Img variant="top" src={myPic} class ="myPic" />
      <Card.Body>
        <Card.Title>Bashar Nobeh</Card.Title>
        <Card.Text>
         A Software developer Who's in love with the thing that he does . 
         I also have a great background as a full-stack
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>


    )
}



}


export default Profile;