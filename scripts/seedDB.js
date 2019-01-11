const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Apps collection and inserts the apps below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/appertreelist"
);

const apperSeed = [
  {
    title: "Essentials App",
    author: "Daisy Dinh",
    synopsis:
      "This App is designed to provide a snapshot of the Essential areas found in most cities and towns. Easy to click cards link back to an interactive map to allow users to get around easily when traveling to a new location.",
    githublink: "https://github.com/dinhdothuy/project1Team2",
    deploylink: "https://dinhdothuy.github.io/project1Team2/",
    image: "https://dinhdothuy.github.io/Main-portfolio/images/Essentials-App.png",
    date: new Date(Date.now())
  },
  {
    title: "Trivia Game",
    author: "Daisy Dinh",
    synopsis:
      "If you are looking for free quiz questions to make a quiz yourself, then you are at the right place! This website offers free online quizzes and questions with answers. With the help of this website it is possible to make a quiz in less than thirty minutes. Here you can create pub quizzes for free with our easy to use quiz maker. At this moment we have more than two hundred questions online on various topics. Moreover you can test your knowledge of diverse topics from culture to geography with our quizzes.",
    githublink: "https://github.com/dinhdothuy/TriviaGame",
    deploylink: "https://dinhdothuy.github.io/TriviaGame/",
    image: "https://dinhdothuy.github.io/Main-portfolio/images/trivia-game.png",
    date: new Date(Date.now())
  },
  {
    title: "4 Unit Game",
    author: "Daisy Dinh",
    synopsis:
      "There will be four crystals displayed as buttons on the page. The player will be shown a random number at the start of the game. When the player clicks on a crystal, it will add a specific amount of points to the player's total score. Your game will hide this amount until the player clicks a crystal. When they do click one, update the player's score counter. The player wins if their total score matches the random number from the beginning of the game.",
    githublink: "https://github.com/dinhdothuy/unit4game",
    deploylink: "https://dinhdothuy.github.io/unit4game/",
    image: "https://dinhdothuy.github.io/Main-portfolio/images/crystals-collector-game.png",  
    date: new Date(Date.now())
  },
  {
    title: "Animal Gifs",
    author: "Daisy Dinh",
    synopsis:
      "In this excercise, I used the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, I get the GIPHY API and use JavaScript and jQuery to change the HTML of the site. There is a loop that appends a button for each string in the array. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.",
    githublink: "https://github.com/dinhdothuy/giftastic",
    deploylink: "https://dinhdothuy.github.io/giftastic/",
    image: "https://dinhdothuy.github.io/Main-portfolio/images/gifs-game.png",
    date: new Date(Date.now())
  },
  {
    title: "Train Time Schedule",
    author: "Daisy Dinh",
    synopsis:
      "Create a train schedule application that incorporates Firebase to host arrival and departure data The app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station. This app will calculate when the next train will arrive; this should be relative to the current time. Users from many different machines must be able to view same train times.",
    githublink: "https://github.com/dinhdothuy/train-time",
    deploylink: "https://dinhdothuy.github.io/train-time/",
    image: "https://dinhdothuy.github.io/Main-portfolio/images/train-time.png",
    date: new Date(Date.now())
  },
  {
    title: "Psychic Game",
    author: "Daisy Dinh",
    synopsis:
      "The app randomly picks a letter, and the user has to guess which letter the app chose. Then... Guess what letter I'm thinking of... When the player wins, increase the Wins counter and start the game over again. When the player loses, increase the Losses counter and restart the game.",
    githublink: "https://github.com/dinhdothuy/psychic_game",
    deploylink: "https://dinhdothuy.github.io/psychic_game/",
    image: "https://dinhdothuy.github.io/Main-portfolio/images/psychic-game.png",
    date: new Date(Date.now())
  }
];

db.Apper
  .remove({})
  .then(() => db.Apper.collection.insertMany(apperSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
