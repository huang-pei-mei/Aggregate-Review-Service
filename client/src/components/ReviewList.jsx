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


   <div className="rating">Overall</div>
  <div className="overallRating">Overall Ratings</div>

<span>
 	<ul className="table1">
<li className="averagereview">
<StarRatings rating={getStars(props.review.overall.average)} starRatedColor='#FFA000' starDimension='24px' starSpacing='3px' starEmptyColor='rgb(230, 230, 230)'/>
<span>{props.review.overall.average} Out of 5</span>
</li>

<li id="overall">
<span>5 Stars</span>
{<progress id="bar" value="80" max="100"> 80% </progress>}
<span>{props.review.overall.fiveStars}</span>
</li>

<li id="overall">
<span>4 Stars</span>
<progress id="bar" value="30" max="100"> 80% </progress>
<span>{props.review.overall.fourStars}</span>
</li>

<li id="overall">
<span>3 Stars</span>
<progress id="bar" value="20" max="100"> 80% </progress>
<span>{props.review.overall.threeStars}</span>
</li>

<li id="overall">
<span>2 Stars</span>
<progress id="bar" value="10" max="100"> 80% </progress>
<span>{props.review.overall.twoStars}</span>
</li>

<li id="overall">
<span>1 Stars</span>
<progress id="bar" value="5" max="100"> 80% </progress>
<span>{props.review.overall.oneStars}</span>
</li>

</ul>
</span>


<div className="performancerating">Performance</div>


<span>
 	<ul className="table2">
<li className="averagereview">
<StarRatings rating={getStars(props.review.performance.average)} starRatedColor='#FFA000' starDimension='24px' starSpacing='3px' starEmptyColor='rgb(230, 230, 230)'/>
<span>{props.review.performance.average} Out of 5</span>
</li>

<li id="performance">
<span>5 Stars</span>
{<progress id="bar" value="80" max="100"> 80% </progress>}
<span>{props.review.performance.fiveStars}</span>
</li>

<li id="performance">
<span>4 Stars</span>
<progress id="bar" value="30" max="100"> 80% </progress>
<span>{props.review.performance.fourStars}</span>
</li>

<li id="performance">
<span>3 Stars</span>
<progress id="bar" value="20" max="100"> 80% </progress>
<span>{props.review.performance.threeStars}</span>
</li>

<li id="performance">
<span>2 Stars</span>
<progress id="bar" value="10" max="100"> 80% </progress>
<span>{props.review.performance.twoStars}</span>
</li>

<li id="performance">
<span>1 Stars</span>
<progress id="bar" value="5" max="100"> 80% </progress>
<span>{props.review.performance.oneStars}</span>
</li>

</ul>
</span>

<div className="storyrating">Story</div>


<span>
 	<ul className="table3">
<li className="averagereview">
<StarRatings rating={getStars(props.review.story.average)} starRatedColor='#FFA000' starDimension='24px' starSpacing='3px' starEmptyColor='rgb(230, 230, 230)' starBorders='#FFA000'/>
<span>{props.review.story.average} Out of 5</span>
</li>

<li id="story">
<span>5 Stars</span>
{<progress id="bar" value="80" max="100"> 80% </progress>}
<span>{props.review.story.fiveStars}</span>
</li>

<li id="story">
<span>4 Stars</span>
<progress id="bar" value="30" max="100"> 80% </progress>
<span>{props.review.story.fourStars}</span>
</li>

<li id="story">
<span>3 Stars</span>
<progress id="bar" value="20" max="100"> 80% </progress>
<span>{props.review.story.threeStars}</span>
</li>

<li id="story">
<span>2 Stars</span>
<progress id="bar" value="10" max="100"> 80% </progress>
<span>{props.review.story.twoStars}</span>
</li>

<li id="story">
<span>1 Stars</span>
<progress id="bar" value="5" max="100"> 80% </progress>
<span>{props.review.story.oneStars}</span>
</li>

</ul>
</span>
</div>

)

};

export default ReviewList;



