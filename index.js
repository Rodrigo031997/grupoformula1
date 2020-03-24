"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/stations", function(req, res) {
  var speech = "";
  switch (req.body.result.parameters.AudioSample.toLowerCase()) {
    //Speech Synthesis Markup Language 
    case "estacion ciento tres punto tres":
      speech =
        '<speak><audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio></speak>';
      break;
  }
  return res.json({
    speech: speech,
    displayText: speech,
    source: "grupo-radio-formula"
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("servidor corriendo");
});
