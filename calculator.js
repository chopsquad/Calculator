const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
//bmi calc get
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

//bmi calc post
app.post("/bmicalculator", function (req, res) {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);

  let bmi = (weight / height / height) * 703;

  console.log(weight, height);
  res.send(`Your BMI is: ${Math.round(bmi)}`);
});

app.post("/", function (req, res) {
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);

  let result = num1 + num2;
  res.send(`The result of the calculation is ${result}`);
});

app.listen(port, function () {
  console.log("This Server is now running on port 3000");
});
