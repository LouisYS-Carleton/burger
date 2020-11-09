const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server successfully listening: http://localhost:${PORT}`);
});