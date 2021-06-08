import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  };

  componentDidMount() {
    this.getReview();
  }

  getReview(){
  const query = new URLSearchParams(location.search);
  const bookId = query.get('bookId');
  // 18.220.21.137
  fetch(`http://18.220.21.137:2880/api/aggReview/${bookId}`)
    .then((response) => response.json())
    .then(data =>
      this.setState({reviews: data}))
      .catch(err => err)
    }



  render() {
    if(this.state.reviews.length <= 0){
      return (
        <div style={{color: "blue", padding: "25px",
        fontFamily: "Arial", textalign:"center"}}>Oops — we can’t find the page you’re looking for. Head back to the homepage and try again with another book!</div>
      )
    } else {
      return (
        <div>
          <Review reviews={this.state.reviews} />
        </div>
       );
    }

  }
}


export default App;
