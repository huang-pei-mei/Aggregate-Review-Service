(self["webpackChunkaggreview"] = self["webpackChunkaggreview"] || []).push([["client_src_components_Review_jsx"],{

/***/ "./client/src/components/ProgressBar.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/ProgressBar.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ProgressBar = function ProgressBar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "progressbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    classname: "w3-grey",
    style: {
      height: "4px",
      width: "50%"
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);

/***/ }),

/***/ "./client/src/components/Review.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Review.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _ReviewList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewList.jsx */ "./client/src/components/ReviewList.jsx");




var Review = function Review(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.reviews.map(function (review, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewList_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
      review: review,
      key: index
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Review);

/***/ }),

/***/ "./client/src/components/ReviewList.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/ReviewList.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _ProgressBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar.jsx */ "./client/src/components/ProgressBar.jsx");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js");





function getStars(average) {
  var minStars = Math.floor(average);
  var remaining = (average % 1).toFixed(1);

  if (remaining < 0.3) {
    return minStars;
  } else if (remaining < 0.8) {
    return minStars + 0.5;
  } else {
    return minStars + 1;
  }
}

var ReviewList = function ReviewList(props) {
  var stars = {
    '1': "\u2605\u2606\u2606\u2606\u2606",
    '1.5': "\u2605\u2605\u2606\u2606\u2606",
    '2': "\u2605\u2605\u2606\u2606\u2606",
    '2.5': "\u2605\u2605\u2606\u2606\u2606",
    '3': "\u2605\u2605\u2605\u2606\u2606",
    '3.5': "\u2605\u2605\u2605\u2606\u2606",
    '4': "\u2605\u2605\u2605\u2605\u2606",
    '4.5': "\u2605\u2605\u2605\u2605\u2606",
    '5': "\u2605\u2605\u2605\u2605\u2605"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "main-heading"
  }, "What listeners say about this book"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rating-heading"
  }, "Average Customer Ratings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "threeTables"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rating"
  }, "Overall"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "overallRating"
  }, "Overall Ratings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "table1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "averagereview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_star_ratings__WEBPACK_IMPORTED_MODULE_3__.default, {
    rating: getStars(props.review.overall.average),
    starRatedColor: "#FFA000",
    starDimension: "24px",
    starSpacing: "3px",
    starEmptyColor: "rgb(230, 230, 230)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.overall.average, " Out of 5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "overall"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "5 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "80",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.overall.fiveStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "overall"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "4 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "30",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.overall.fourStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "overall"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "3 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "20",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.overall.threeStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "overall"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "2 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "10",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.overall.twoStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "overall"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "1 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "5",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.overall.oneStars)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "performancerating"
  }, "Performance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "table2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "averagereview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_star_ratings__WEBPACK_IMPORTED_MODULE_3__.default, {
    rating: getStars(props.review.performance.average),
    starRatedColor: "#FFA000",
    starDimension: "24px",
    starSpacing: "3px",
    starEmptyColor: "rgb(230, 230, 230)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.performance.average, " Out of 5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "performance"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "5 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "80",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.performance.fiveStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "performance"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "4 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "30",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.performance.fourStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "performance"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "3 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "20",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.performance.threeStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "performance"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "2 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "10",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.performance.twoStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "performance"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "1 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "5",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.performance.oneStars)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "storyrating"
  }, "Story"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "table3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "averagereview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_star_ratings__WEBPACK_IMPORTED_MODULE_3__.default, {
    rating: getStars(props.review.story.average),
    starRatedColor: "#FFA000",
    starDimension: "24px",
    starSpacing: "3px",
    starEmptyColor: "rgb(230, 230, 230)",
    starBorders: "#FFA000"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.story.average, " Out of 5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "story"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "5 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "80",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.story.fiveStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "story"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "4 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "30",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.story.fourStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "story"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "3 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "20",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.story.threeStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "story"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "2 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "10",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.story.twoStars)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    id: "story"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "1 Stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    id: "bar",
    value: "5",
    max: "100"
  }, " 80% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.review.story.oneStars))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewList);

/***/ })

}]);
//# sourceMappingURL=client_src_components_Review_jsx.aggReview.js.map