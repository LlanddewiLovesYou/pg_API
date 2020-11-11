const express = require("express");
const PORT = 3000;

const app = express();

app.get("/estimates", (req, res) => res.send("/estimates"));

app.listen(PORT, () => console.log(`PG APP IS RUNNING ON PORT ${PORT}`));
