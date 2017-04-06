var express = require('express')
var moment = require('moment')
var app = express()

app.get('/:dateStr', function (req, res) {


  var newDate;
  if(/^\d{8,}$/.test(req.params.dateStr)) {
    newDate = moment(req.params.dateStr, "X");
  } else {
    newDate = moment(req.params.dateStr, "MMMM D, YYYY");
  }

  if(newDate.isValid()) {
    res.json({
      unix: newDate.format("X"),
      natural: newDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 3000!')
})