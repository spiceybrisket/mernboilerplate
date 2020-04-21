const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@whatyalookinat-r3bvs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch(err => console.err);

const app = express();

const port = process.env.PORT || 5004;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
