const express = require('express');
const cors = require('cors');
const app = express();
const countryRouter = require('./route/countryRouter');

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/countries', countryRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
