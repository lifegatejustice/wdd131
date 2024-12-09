const image = document.getElementById('myImage');
const images = [
    "images/tvseries.webp",
    "images/movies.webp",
    "images/sport.webp"
];
let currentIndex = 0;

function changeImage() {
    // Add the swipe-left class for animation
    image.classList.add('swipe-left');
    
    // Wait for the animation to complete before changing the image
    setTimeout(() => {
        // Update the image source
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
        
        // Reset the animation class
        image.classList.remove('swipe-left');
    }, 500); // Match the CSS transition duration
}

// Automatically change the image every 3 seconds
setInterval(changeImage, 3000);

const movies = [
  {
    id: 1,
    movieName: "Deadpool X Wolverine",
    type: "movie",
    imageUrl: "deadpoolxwolverine.webp",
    rating: 4.5,
    description: "Action-packed movie featuring Deadpool and Wolverine"
  },
  {
    id: 2,
    movieName: "The Avengers",
    type: "movie",
    imageUrl: "images/Avengers.webp",
    rating: 4.8,
    description: "Superhero movie featuring the Avengers team"
  },
  {
    id: 3,
    movieName: "The Dark Knight",
    type: "movie",
    imageUrl: "batman.webp",
    rating: 4.9,
    description: "Superhero thriller movie featuring Batman"
  },
  {
    id: 4,
    movieName: "Spider-Man: No Way Home",
    type: "movie",
    imageUrl: "spiderman.webp",
    rating: 4.7,
    description: "Superhero movie featuring Spider-Man"
  }
];

const series = [
  {
    id: 1,
    seriesName: "Stranger Things",
    type: "series",
    imageUrl: "strangerthings.webp",
    rating: 4.6,
    description: "Mystery and sci-fi series set in the 1980s"
  },
  {
    id: 2,
    seriesName: "Game of Thrones",
    type: "series",
    imageUrl: "gameofthrones.webp",
    rating: 4.9,
    description: "Epic fantasy series based on George R.R. Martin's novels"
  },
  {
    id: 3,
    seriesName: "The Witcher",
    type: "series",
    imageUrl: "thewitcher.webp",
    rating: 4.7,
    description: "Fantasy drama series based on the popular video game"
  },
  {
    id: 4,
    seriesName: "Breaking Bad",
    type: "series",
    imageUrl: "breakingbad.webp",
    rating: 4.9,
    description: "Crime drama series about a high school chemistry teacher turned meth kingpin"
  }
];

const sports = [
  {
    id: 1,
    sportName: "Formula 1",
    type: "sport",
    imageUrl: "formula1.webp",
    rating: 4.5,
    description: "High-speed racing sport"
  },
  {
    id: 2,
    sportName: "NBA",
    type: "sport",
    imageUrl: "nba.webp",
    rating: 4.7,
    description: "Professional basketball league"
  },
  {
    id: 3,
    sportName: "Tennis",
    type: "sport",
    imageUrl: "tennis.webp",
    rating: 4.3,
    description: "Individual or team sport played with rackets and a ball"
  },
  {
    id: 4,
    sportName: "Cricket",
    type: "sport",
    imageUrl: "cricket.webp",
    rating: 4.6,
    description: "Team sport played with a bat and ball"
  },
  {
    id: 5,
    sportName: "Football",
    type: "sport",
    imageUrl: "football.webp",
    rating: 4.8,
    description: "Team sport played with a ball and goals"
  }
];

