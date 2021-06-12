const { AggReview, mongoose } = require("./index.js");

let save = (aggReviewData, callback) => {
  const query = { "id": aggReviewData.bookId };
  const update = { $set: { "id": aggReviewData.bookId, "overall.total": aggReviewData.overall.total, "overall.average": aggReviewData.overall.average, "overall.fiveStars": aggReviewData.overall.fiveStars, "overall.fourStars": aggReviewData.overall.fourStars, "overall.threeStars": aggReviewData.overall.threeStars, "overall.twoStars": aggReviewData.overall.twoStars, "overall.oneStars": aggReviewData.overall.oneStars, "performance.total": aggReviewData.performance.total, "performance.average": aggReviewData.performance.average, "performance.fiveStars": aggReviewData.performance.fiveStars, "performance.fourStars": aggReviewData.performance.fourStars, "performance.threeStars": aggReviewData.performance.threeStars, "performance.twoStars": aggReviewData.performance.twoStars, "performance.oneStars": aggReviewData.performance.oneStars, "story.total": aggReviewData.story.total, "story.average": aggReviewData.story.average, "story.fiveStars": aggReviewData.story.fiveStars, "story.fourStars": aggReviewData.story.fourStars, "story.threeStars": aggReviewData.story.threeStars, "story.twoStars": aggReviewData.story.twoStars, "story.oneStars": aggReviewData.story.oneStars} };
  const options = { upsert: true };
  AggReview.updateOne(query, update, options, callback);
};
for (let i = 0; i < 100; i++) {
  let aggregateReviewData = {
    bookId: i
  }

  for (let j = 0; j < 3; j++) {
    const fiveStars = Math.floor(Math.random() * 32000 + 3000);
    const fourStars = Math.floor(Math.random() * 7000 + 2500);
    const threeStars = Math.floor(Math.random() * 900 + 100);
    const twoStars = Math.floor(Math.random() * 400 + 50);
    const oneStars = Math.floor(Math.random() * 125 + 25);
    const total = oneStars + twoStars + threeStars + fourStars + fiveStars;
    const average = ((5*fiveStars + 4*fourStars + 3*threeStars + 2*twoStars + 1*oneStars)/total).toFixed(1);

    if (j === 0) {
      let overall = {
        total: total,
        average: average,
        fiveStars: fiveStars,
        fourStars: fourStars,
        threeStars: threeStars,
        twoStars: twoStars,
        oneStars: oneStars
      }
      aggregateReviewData.overall = overall;
    }

    if (j === 1) {
      let performance = {
        total: total,
        average: average,
        fiveStars: fiveStars,
        fourStars: fourStars,
        threeStars: threeStars,
        twoStars: twoStars,
        oneStars: oneStars
      }
      aggregateReviewData.performance = performance;
    }

    if (j === 2) {
      let story = {
        total: total,
        average: average,
        fiveStars: fiveStars,
        fourStars: fourStars,
        threeStars: threeStars,
        twoStars: twoStars,
        oneStars: oneStars
      }
      aggregateReviewData.story = story;
    }
  }
  save(aggregateReviewData, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(i, ': ' + JSON.stringify(res));
      if (i === 99) {
        mongoose.connection.close();
        process.exit();
      }
    }
  });
}