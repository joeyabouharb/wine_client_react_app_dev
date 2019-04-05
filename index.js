import express from 'express';
import path from 'path';
import cors from 'cors';


const app = express();
app.use(express.static(path.join(__dirname, '/dist')));
app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'ejs');
app.use(cors());

app.get('/*', (req, res) => {
  res.render('index');

});

app.listen(process.env.PORT || 4000, () => {
  console.log('listening at 4000');
});