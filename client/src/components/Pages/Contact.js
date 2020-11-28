import React, {Component} from 'react';
import '../../css/styles.css';
import {Link, withRouter} from 'react-router-dom';
import Navbar from '../Layout/NavbarLanding';
import {BrowserRouter} from 'react-router-dom';
import Logo from '../pics/KLEVRlab.jpg';
import Logo1 from '../pics/SCE.jpg';
import Logo2 from '../pics/WellnessCenter.jpg';
import Logo3 from '../pics/SoundStudio.jpg';
import Logo4 from '../pics/table.jpg';

class FavListpage extends Component {
  var express = require('express');
  var bodyParser = require('body-parser');
  var mongodb = require('mongodb');

  var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/users');

  var msg = express();

  var MessageSchema = mongoose.Schema({
  title: String,
  post: String,
  author: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

var Message = mongoose.model("Message", MessageSchema);

  msg.post("/mgs/:id", (req, res) => {
  let id = ObjectID(req.params.id);

  Message.find(id, (err, post) => {
    res.render("editPost", { post: post });
  });
});

msg.put("/editPost/:id", (req, res) => {
  let id = req.params.id;

  const updates = {
    title: req.body.title,
    author: req.body.author,
    post: req.body.post
  };

  Message.update(id, updates, (err, result) => {
    if (err) {
      res.send("error occurred");
    } else {
      res.send(updates);
    }
  })

  .exec()
  .then(result => {
    res.redirect("/");
  });
});

render() {
    return (
      <BrowserRouter>
      <div className="Landingpage">
      <Navbar />

      <h1><center>Contact Us</center></h1>

      <div class="split left">
      <div class="centered">
      <h3>Phone Number:</h3>
      <p>408-123-4567</p>
      <h3>Email:</h3>
      <p>spiritworldfall2020@gmail.com</p>
      <h3>Social Media:</h3>
      <p>Facebook</p>
      <p>Twitter</p>
      </div>
      </div>

      <div class="split right">
      <div class="centered">
      <h4>Write a message</h4>
      <form>
      <textarea rows="1" cols="57">
      Subject
      </textarea>
      <textarea rows="10" cols="57">
      Enter Message
      </textarea>
      <input type="submit" value="Submit"></input>
      </form>
      </div>
      </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default FavListpage
