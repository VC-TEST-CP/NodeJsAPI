const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(bodyParser.json());

// Read database
let db = JSON.parse(fs.readFileSync('db.json'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});

app.get('/posts', (req, res) => {
  const safePosts = db.posts.map(post => ({
    id: post.id,
    title: post.title,
    content: post.content,
  }));
  res.json(safePosts);
});


app.get('/search', (req, res) => {
  let query = `SELECT * FROM posts WHERE title = '${mysql.escape(req.query.keyword)}'`;
  db.query(query, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/posts/search', (req, res) => {
  const keyword = req.query.keyword;
  const results = db.posts.filter(post => post.title.includes(keyword));
  res.json(results);
});

app.post('/posts', (req, res) => {
  db.posts.push(req.body);
  fs.writeFileSync('db.json', JSON.stringify(db));
  res.status(201).json(req.body);
});

app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = db.posts.findIndex(post => post.id === id);
  if (index > -1) {
    db.posts[index] = req.body;
    fs.writeFileSync('db.json', JSON.stringify(db));
    res.json(req.body);
  } else {
    res.status(404).send('Post not found');
  }
});

app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = db.posts.findIndex(post => post.id === id);
  if (index > -1) {
    const deletedPost = db.posts.splice(index, 1);
    fs.writeFileSync('db.json', JSON.stringify(db));
    res.json(deletedPost);
  } else {
    res.status(404).send('Post not found');
  }
});

app.get('/posts', (req, res) => {
  const safePosts = db.posts.map(post => ({
    id: post.id,
    title: post.title,
    content: post.content,
  }));
  res.json(safePosts);
});