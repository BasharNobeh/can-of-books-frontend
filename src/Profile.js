import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Profile.css"
import myPic from "./myPic.jpg"
import { withAuth0 } from '@auth0/auth0-react';




class Profile extends React.Component{
render (){

  const { user } = this.props.auth0
    return (


<div id = "ProfileDiv">
    
<Card  className = "MyCard">
      <Card.Img variant="top" src={user.picture} class ="myPic" />
      <Card.Body>
        <Card.Title>{user.nickname}</Card.Title>
        <Card.Text>
       {user.email}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>


    )
}



}


export default withAuth0(Profile);