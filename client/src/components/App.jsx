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
  fetch(`http://localhost:2880/api/aggReview/${bookId}`)
    .then((response) => response.json())
    .then(data =>
      this.setState({reviews: data}))
      .catch(err => err)
    }



  render() {
    return (
      <div>
        <Review reviews={this.state.reviews} />
      </div>
     );
  }
}


export default App;
