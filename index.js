const express = require('express');
const cors = require('cors');
const { auth, requiresAuth } = require('express-openid-connect');
const app = express();
const countryRouter = require('./route/countryRouter');

app.use(cors({ origin: '*' }));
app.use(express.json());

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.SERVER_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
  secret: process.env.AUTH0_SECRET,
};

app.use(auth(config));

app.use('/countries', requiresAuth(), countryRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
