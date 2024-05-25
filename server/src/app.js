const mongoose = require('mongoose');
// const movies = require('./routes/movies');
// const customers  = require('./routes/customers');
// const genres  = require('./routes/genres');
const users  = require('./api/v1/users');
const video  = require('./api/v1/videos');
const comment  = require('./api/v1/comments');
const favorite  = require('./api/v1/favorites');
const search  = require('./api/v1/search');
const problem  = require('./api/v1/problems');
const category  = require('./api/v1/categories');
const auth  = require('./api/v1/auth');
const express = require('express');
const config = require('config');
const cors = require('cors')
const app = express();
app.use(cors())
if(!config.get('jwtKey')){
  console.log('FATAL ERROR: jwtPrivateKey not defined');
  process.exit(1);
} else{
  console.log(config.get('jwtKey'))
}
mongoose.connect('mongodb+srv://root:aabbcc11@streamin.i2ynohd.mongodb.net/')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());
app.use('/api/v1/favorite',favorite);
app.use('/api/v1/comment', comment);
app.use('/api/v1/video', video);
app.use('/api/v1/users', users);
app.use('/api/v1/search', search);
app.use('/api/v1/problems', problem);
app.use('/api/v1/categories', category);
app.use('/api/v1/auth', auth);



const port = process.env.PORT || 27017;
app.listen(port, () => console.log(`Listening on port ${port}...`));