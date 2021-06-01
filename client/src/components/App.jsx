import React,  {lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
const Review = lazy(() => import('./Review.jsx'));
const renderLoader = () => <p>Loading</p>;

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
  fetch(`http://localhost:2880/api/aggReview/${bookId}`)
    .then((response) => response.json())
    .then(data =>
      this.setState({reviews: data}))
      .catch(err => err)
    }



  render() {
    if(this.state.reviews.length <= 0){
      return (
        <div style={{color: "blue", padding: "25px",
        fontFamily: "Arial", textalign:"center"}}>The Book you requested is not available. Please try again</div>
      )
    } else {
      return (
        <Suspense fallback={renderLoader()}>
        <div>
          <Review reviews={this.state.reviews} />
        </div>
        </Suspense>
       );
    }

  }
}


export default App;
