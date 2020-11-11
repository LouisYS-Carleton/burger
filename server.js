const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(require("./controllers/burgers_controller"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server successfully listening: http://localhost:${PORT}`);
});