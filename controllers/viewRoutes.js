const router = require('express').Router();
const Bootcamp = require('../models/Bootcamp.js');
const bootcampData = require('../seeds/bingo-seeds.json');

// router.get('/', async (req, res) => {
//   try {
//     // Pass serialized data and session flag into template
//     res.render('bootcamp', {
//       greeting: 'hello world!'
//     });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/', async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  const bootcampData = await Bootcamp.findAll().catch((err) => {
    res.json(err);
  });
  // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it.
  const bingoData = bootcampData.map((data) => data.get({ plain: true }));
  const shuffledArray = bingoData.sort((a, b) => 0.5 - Math.random());

  let bingoData1 = shuffledArray.splice(0, 5);
  let bingoData2 = shuffledArray.splice(0, 5);
  let bingoData3 = shuffledArray.splice(0, 5);
  let bingoData4 = shuffledArray.splice(0, 5);
  let bingoData5 = shuffledArray.splice(0, 5);

  res.render('bootcamp', {
    bingoData1,
    bingoData2,
    bingoData3,
    bingoData4,
    bingoData5,
  });
});

// router.get('/', async (req, res) => {
//   res.render('bootcamp', { bootcampData });
// });

module.exports = router;
