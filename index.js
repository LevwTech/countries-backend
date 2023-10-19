const express = require('express');
const cors = require('cors');
const { auth } = require('express-oauth2-jwt-bearer');
const app = express();

const countryRouter = require('./route/countryRouter');

app.use(cors({ origin: '*' }));
const jwtCheck = auth({
  audience: process.env.SERVER_URL,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
  tokenSigningAlg: 'RS256',
});
app.use(jwtCheck);
app.use(express.json());

app.use('/countries', countryRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
