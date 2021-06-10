import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './ProgressBar.jsx';
import StarRatings from 'react-star-ratings';

function getStars(average) {
  let minStars = Math.floor(average);
  let remaining = (average % 1).toFixed(1);
  if (remaining < 0.3) {
    return minStars;
  } else if (remaining < 0.8) {
    return minStars + 0.5;
  } else {
    return minStars + 1;
  }
}

const ReviewList = (props) => {
  return (
    <div>
      <div className="main-heading">
        What listeners say about {props.currentBook.title}
      </div>
      <div className="rating-heading">
        Average Customer Ratings
    </div>
      <div className="threeTables">
        <div className="rating">Overall</div>
        <div className="overallRating">Overall Ratings</div>
        <span>
          <ul className="table1">
            <li className="averagereview">
              <StarRatings rating={getStars(props.review.overall.average)} starRatedColor='#FFA000' starDimension='24px' starSpacing='3px' starEmptyColor='rgb(230, 230, 230)' />
              <span>&nbsp;&nbsp;{props.review.overall.average} Out of 5</span>
            </li>
            <li id="overall">
              <span>5 Stars&nbsp;&nbsp;</span>
              {<progress id="bar" value="80" max="100"> 80% </progress>}
              <span>&nbsp;&nbsp;{props.review.overall.fiveStars}</span>
            </li>
            <li id="overall">
              <span>4 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="30" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.overall.fourStars}</span>
            </li>
            <li id="overall">
              <span>3 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="20" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.overall.threeStars}</span>
            </li>
            <li id="overall">
              <span>2 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="10" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.overall.twoStars}</span>
            </li>
            <li id="overall">
              <span>1 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="5" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.overall.oneStars}</span>
            </li>
          </ul>
        </span>
        <div className="performancerating">Performance</div>
        <span>
          <ul className="table2">
            <li className="averagereview">
              <StarRatings rating={getStars(props.review.performance.average)} starRatedColor='#FFA000' starDimension='24px' starSpacing='3px' starEmptyColor='rgb(230, 230, 230)' />
              <span>&nbsp;&nbsp;{props.review.performance.average} Out of 5</span>
            </li>
            <li id="performance">
              <span>5 Stars&nbsp;&nbsp;</span>
              {<progress id="bar" value="80" max="100"> 80% </progress>}
              <span>&nbsp;&nbsp;{props.review.performance.fiveStars}</span>
            </li>
            <li id="performance">
              <span>4 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="30" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.performance.fourStars}</span>
            </li>
            <li id="performance">
              <span>3 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="20" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.performance.threeStars}</span>
            </li>
            <li id="performance">
              <span>2 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="10" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.performance.twoStars}</span>
            </li>
            <li id="performance">
              <span>1 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="5" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.performance.oneStars}</span>
            </li>
          </ul>
        </span>
        <div className="storyrating">Story</div>
        <span>
          <ul className="table3">
            <li className="averagereview">
              <StarRatings rating={getStars(props.review.story.average)} starRatedColor='#FFA000' starDimension='24px' starSpacing='3px' starEmptyColor='rgb(230, 230, 230)' starBorders='#FFA000' />
              <span>&nbsp;&nbsp;{props.review.story.average} Out of 5</span>
            </li>
            <li id="story">
              <span>5 Stars&nbsp;&nbsp;</span>
              {<progress id="bar" value="80" max="100"> 80% </progress>}
              <span>&nbsp;&nbsp;{props.review.story.fiveStars}</span>
            </li>
            <li id="story">
              <span>4 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="30" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.story.fourStars}</span>
            </li>
            <li id="story">
              <span>3 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="20" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.story.threeStars}</span>
            </li>
            <li id="story">
              <span>2 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="10" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.story.twoStars}</span>
            </li>
            <li id="story">
              <span>1 Stars&nbsp;&nbsp;</span>
              <progress id="bar" value="5" max="100"> 80% </progress>
              <span>&nbsp;&nbsp;{props.review.story.oneStars}</span>
            </li>
          </ul>
        </span>
      </div>
    </div>
  )
};

export default ReviewList;




