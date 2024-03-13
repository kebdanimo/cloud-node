const express = require("express");
const app = express();
const axios = require("axios");
var cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/products", (req, res) => {
  axios
    .get("http://127.0.0.1:8000/api/products")
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });
});

app.post("/add-product", (req, res) => {

    let result = req.body
    axios
      .post("http://127.0.0.1:8000/api/products", result)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        res.send(error);
      });
    
});

app.listen(3000);
