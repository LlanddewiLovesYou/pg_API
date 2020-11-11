const express = require("express");
const PORT = 3000;
const { getEstimates } = require("./src/api/getEstimates");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/estimates", getEstimates);

app.listen(PORT, () => console.log(`PG APP IS RUNNING ON PORT ${PORT}`));
