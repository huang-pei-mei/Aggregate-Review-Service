import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './ReviewList.jsx';

const Review = (props) => (

<div className="review-list">

{
   props.reviews.map((review, index)=>{
   return (
   < ReviewList review={review} key={index}/>
   )
  })
}
</div>

  );

export default Review;




