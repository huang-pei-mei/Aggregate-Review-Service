import React from 'react';
import ReactDOM from 'react-dom';
import  ProgressBar from './ProgressBar.jsx';
import StarRatings from 'react-star-ratings';



function getStars(average) {
  let minStars = Math.floor(average);
  let remaining = (average % 1).toFixed(1);

  if (remaining < 0.3) {
    return minStars;
  } else if (remaining < 0.8) {
    return minStars + 0.5;
  } else {
    return minStars + 1 ;
  }

}


const ReviewList = (props) => {
  const stars = {
    '1': '\u2605\u2606\u2606\u2606\u2606',
    '1.5': '\u2605\u2605\u2606\u2606\u2606',
    '2': '\u2605\u2605\u2606\u2606\u2606',
    '2.5': '\u2605\u2605\u2606\u2606\u2606',
    '3': '\u2605\u2605\u2605\u2606\u2606',
    '3.5': '\u2605\u2605\u2605\u2606\u2606',
    '4': '\u2605\u2605\u2605\u2605\u2606',
    '4.5': '\u2605\u2605\u2605\u2605\u2606',
    '5': '\u2605\u2605\u2605\u2605\u2605'
  }


  return (


<div id="wrapper">
<div className="main-heading">
What listeners say about this book
    </div>

    <div className="rating-heading">
      Average Customer Ratings
    </div>
<div id="threetables">
<div className="overall">
<table>

<tr className="rating">Overall</tr>
<div className="overallRating">Overall Ratings</div>
<div className="averagereview">

<StarRatings rating={getStars(props.review.overall.average)} starRatedColor='#FFA000' starDimension='24px' starSpacing='3px' starEmptyColor='rgb(230, 230, 230)'/>
<span>{props.review.overall.average} Out of 5</span>
</div>

<div id="overall">
<tr > 5 Stars &nbsp;
{<progress id="bar" value="80" max="100"> 80% </progress>}&nbsp;{props.review.overall.fiveStars}</tr>
</div>
 <tr > 4 Stars &nbsp;
<progress id="bar" value="30" max="100"> 80% </progress>&nbsp;{props.review.overall.fourStars}</tr>
 <tr > 3 Stars &nbsp;
<progress id="bar" value="20" max="100"> 80% </progress>&nbsp;{props.review.overall.threeStars}</tr>
 <tr > 2 Stars &nbsp;
<progress id="bar" value="10" max="100"> 80% </progress>&nbsp;{props.review.overall.twoStars}</tr>
 <tr > 1 Stars &nbsp;
<progress id="bar" value="5" max="100"> 80% </progress>&nbsp;{props.review.overall.oneStars}</tr>

</table>
 </div>

<div className="performance">
<table>

<tr className="rating">Performance</tr>
{/* <span class="review-star"> {stars[getStars(props.review.performance.average)]}</span> */}
<StarRatings rating={getStars(props.review.performance.average)} starRatedColor='#FFA000' starDimension='24px' starSpacing='3px' starEmptyColor='rgb(230, 230, 230)'/>
<span>{props.review.performance.average} Out of 5</span>

<tr > 5 Stars &nbsp;
<progress id="bar" value="80" max="100"> 80% </progress>&nbsp;{props.review.performance.fiveStars}</tr>
 <tr > 4 Stars &nbsp;
<progress id="bar" value="30" max="100"> 80% </progress>&nbsp;{props.review.performance.fourStars}</tr>
 <tr > 3 Stars &nbsp;
<progress id="bar" value="20" max="100"> 80% </progress>&nbsp;{props.review.performance.threeStars}</tr>
 <tr > 2 Stars &nbsp;
<progress id="bar" value="10" max="100"> 80% </progress>&nbsp;{props.review.performance.twoStars}</tr>
 <tr > 1 Stars &nbsp;
<progress id="bar" value="5" max="100"> 80% </progress>&nbsp;{props.review.performance.oneStars}</tr>

</table>
</div>

<div className="story">
<table>

<tr className="rating">Story</tr>
{/* <span class="review-star"> {stars[getStars(props.review.story.average)]}</span> */}
<StarRatings rating={getStars(props.review.story.average)} starRatedColor='#FFA000' starDimension='24px' starSpacing='3px' starEmptyColor='rgb(230, 230, 230)' starBorders='#FFA000'/>
<span>{props.review.story.average} Out of 5</span>

<tr > 5 Stars &nbsp;
<progress id="bar" value="80" max="100"> 80% </progress>&nbsp;{props.review.story.fiveStars}</tr>
 <tr > 4 Stars &nbsp;
<progress id="bar" value="30" max="100"> 80% </progress>&nbsp;{props.review.story.fourStars}</tr>
 <tr > 3 Stars &nbsp;
<progress id="bar" value="20" max="100"> 80% </progress>&nbsp;{props.review.story.threeStars}</tr>
 <tr > 2 Stars &nbsp;
<progress id="bar" value="10" max="100"> 80% </progress>&nbsp;{props.review.story.twoStars}</tr>
 <tr > 1 Stars &nbsp;
<progress id="bar" value="5" max="100"> 80% </progress>&nbsp;{props.review.story.oneStars}</tr>

</table>
</div>
</div>
</div>
)

};

export default ReviewList;




