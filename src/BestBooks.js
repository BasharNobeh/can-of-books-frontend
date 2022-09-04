import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css'


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = () =>{
    axios
    .get(`http://localhost:3001/Books`)
    .then(result =>{
    
      // if(result.length != 0){
        this.setState({
          books:result.data
        })
      // }
     
     
    })
    .catch(err =>{
      console.log(err);
    })
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
<div id="myDiv" style={{width:"600px" }}>
<Carousel fade>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/I/81P7aJab6iL.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> {this.state.books[0].title}</h3>
          <p >{this.state.books[0].description}</p>
          <h3 >{this.state.books[0].states}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/I/61P9aKsNR5L.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>{this.state.books[1].title}</h3>
          <p>{this.state.books[1].description}</p>
          <h3>{this.state.books[1].states}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kbimages1-a.akamaihd.net/5ebc28cd-1f11-4df3-84ec-719309ee6ae4/1200/1200/False/don-quixote-136.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>{this.state.books[2].title}</h3>
          <p>{this.state.books[2].description}</p>
          <h3>{this.state.books[2].states}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/I/81MI6+TpYkL.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>{this.state.books[3].title}</h3>
          <p>{this.state.books[3].description}</p>
          <h3>{this.state.books[3].states}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>







</div>



          
        ) : (
          <h3>The Books Collection Is Empty :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
