const express = require('express');
const rp = require('request-promise-native');

const port = process.env.PORT || 4000;
const app = express();

app.use('/api', async (req, res) => {
  const url = req.query.url;
  let resp;
  if (!url) {
    res.json({ errors: 'Url not defined' });
  }
  try {
    resp = await rp(url, { mode: 'cors', strictSSL: false, secureProtocol: 'TLSv1_method', rejectUnauthorized: false })
      .then(result => JSON.parse(result));
  } catch (e) {
    res.json({ errors: e });
  }
  res.json(resp);
});

app.use('/', express.static('dist'));

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
