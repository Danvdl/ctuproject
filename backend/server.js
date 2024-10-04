const express = require('express');
const bodyParser = require('body-parser');
const discussionsRoute = require('./routes/discussions');
const repliesRoute = require('./routes/replies');
const subscriptionsRoute = require('./routes/subscriptions');
const resourcesRoute = require('./routes/resources');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Routes
app.use('/api/discussions', discussionsRoute);
app.use('/api/replies', repliesRoute);
app.use('/api/subscriptions', subscriptionsRoute);
app.use('/api/resources', resourcesRoute);

// Static folder for file uploads
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
