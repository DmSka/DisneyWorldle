const rides = [
  {
  "codeName" : "space_mountain",
  "name" : "Space Mountain",
  "park" : "Magic Kingdom",
  "land" : "Tomorrowland",
  "height" : 44,
  "type" : "Roller Coaster", 
  "year" : 1975
  },
  {
  "codeName" : "big_thunder",
  "name" : "Big Thunder Mountain",
  "park" : "Magic Kingdom",
  "land" : "Frontierland",
  "height" : 40,
  "type" : "Roller Coaster", 
  "year" : 1980
  },
  {
    "codeName" : "haunted_mansion",
    "name" : "Haunted Mansion",
    "park" : "Magic Kingdom",
    "land" : "Liberty Square",
    "height" : 1,
    "type" : "Dark Ride", 
    "year" : 1971
  },
  {
    "codeName" : "splash_mountain",
    "name" : "Splash Mountain",
    "park" : "Magic Kingdom",
    "land" : "Frontierland",
    "height" : 40,
    "type" : "Water Ride", 
    "year" : 1992
  },
  {
    "codeName" : "pirates_caribbean",
    "name" : "Pirates of the Caribbean",
    "park" : "Magic Kingdom",
    "land" : "Adventureland",
    "height" : 1,
    "type" : "Water Ride", 
    "year" : 1973
  },
  {
    "codeName" : "seven_dwarfs",
    "name" : "Seven Dwarfs",
    "park" : "Magic Kingdom",
    "land" : "Fantasyland",
    "height" : 38,
    "type" : "Roller Coaster", 
    "year" : 2014
  },
  {
    "codeName" : "spaceship_earth",
    "name" : "Spaceship Earth",
    "park" : "EPCOT",
    "land" : "Future World",
    "height" : 1,
    "type" : "Dark Ride", 
    "year" : 1982
  },
  {
    "codeName" : "test_track",
    "name" : "Test Track",
    "park" : "EPCOT",
    "land" : "Future World",
    "height" : 40,
    "type" : "Roller Coaster", 
    "year" : 1999
  },
  {
    "codeName" : "mission_space",
    "name" : "Mission: SPACE",
    "park" : "EPCOT",
    "land" : "Future World",
    "height" : 40,
    "type" : "Simulator", 
    "year" : 2003
  },
  {
    "codeName" : "soarin",
    "name" : "Soarin'",
    "park" : "EPCOT",
    "land" : "The Land",
    "height" : 40,
    "type" : "Simulator", 
    "year" : 2005
  },
  {
    "codeName" : "living_with_the_land",
    "name" : "Living with the Land",
    "park" : "EPCOT",
    "land" : "The Land",
    "height" : 1,
    "type" : "Water Ride", 
    "year" : 1982
  },
  {
    "codeName" : "frozen_ever_after",
    "name" : "Frozen Ever After",
    "park" : "EPCOT",
    "land" : "World Showcase",
    "height" : 1,
    "type" : "Water Ride", 
    "year" : 2016
  },
  {
    "codeName": "flight_of_passage",
    "name": "Avatar Flight of Passage",
    "park": "Animal Kingdom",
    "land": "Pandora",
    "height": 44,
    "type": "Simulator",
    "year": 2017
  },
  {
    "codeName": "navi_river",
    "name": "Na'vi River Journey",
    "park": "Animal Kingdom",
    "land": "Pandora",
    "height": 1,
    "type": "Water Ride",
    "year": 2017
  },
  {
    "codeName": "expedition_everest",
    "name": "Expedition Everest",
    "park": "Animal Kingdom",
    "land": "Asia",
    "height": 44,
    "type": "Roller Coaster",
    "year": 2006
  },
  {
    "codeName": "kali_river_rapids",
    "name": "Kali River Rapids",
    "park": "Animal Kingdom",
    "land": "Asia",
    "height": 38,
    "type": "Water Ride",
    "year": 1999
  },
  {
    "codeName": "kilimanjaro_safaris",
    "name": "Kilimanjaro Safaris",
    "park": "Animal Kingdom",
    "land": "Africa",
    "height": 1,
    "type": "Safari Ride",
    "year": 1998
  },
  {
    "codeName": "dinosaur",
    "name": "DINOSAUR",
    "park": "Animal Kingdom",
    "land": "DinoLand U.S.A.",
    "height": 40,
    "type": "Dark Ride",
    "year": 1998
  },
  {
    codeName: "triceratop_spin",
    name: "TriceraTop Spin",
    park: "Animal Kingdom",
    land: "DinoLand U.S.A.",
    height: 1,
    type: "Flat Ride",
    year: 2001
  },
  {
    codeName: "tower_of_terror",
    name: "The Twilight Zone Tower of Terror",
    park: "Hollywood Studios",
    land: "Sunset Boulevard",
    height: 40,
    type: "Drop Ride",
    year: 1994
  },
  {
    codeName: "rock_n_roller_coaster",
    name: "Rock 'n' Roller Coaster",
    park: "Hollywood Studios",
    land: "Sunset Boulevard",
    height: 48,
    type: "Roller Coaster",
    year: 1999
  },
  {
    codeName: "millennium_falcon",
    name: "Millennium Falcon: Smugglers Run",
    park: "Hollywood Studios",
    land: "Star Wars: Galaxy's Edge",
    height: 38,
    type: "Simulator",
    year: 2019
  },
  {
    codeName: "rise_resistance",
    name: "Star Wars: Rise of the Resistance",
    park: "Hollywood Studios",
    land: "Star Wars: Galaxy's Edge",
    height: 40,
    type: "Dark Ride",
    year: 2019
  },
  {
    codeName: "slinky_dog_dash",
    name: "Slinky Dog Dash",
    park: "Hollywood Studios",
    land: "Toy Story Land",
    height: 38,
    type: "Roller Coaster",
    year: 2018
  },
  {
    codeName: "alien_saucers",
    name: "Alien Swirling Saucers",
    park: "Hollywood Studios",
    land: "Toy Story Land",
    height: 1,
    type: "Flat Ride",
    year: 2018
  },
  {
    codeName: "toy_story_mania",
    name: "Toy Story Mania",
    park: "Hollywood Studios",
    land: "Toy Story Land",
    height: 1,
    type: "Dark Ride",
    year: 2008
  },
  {
    codeName: "runaway_railway",
    name: "Mickey & Minnie's Runaway Railway",
    park: "Hollywood Studios",
    land: "Hollywood Boulevard",
    height: 1,
    type: "Dark Ride",
    year: 2020
  },
  {
    codeName: "star_tours",
    name: "Star Tours – The Adventures Continue",
    park: "Hollywood Studios",
    land: "Echo Lake",
    height: 40,
    type: "Simulator",
    year: 1989
  },  
  {
    "codeName": "festival_lion_king",
    "name": "Festival of the Lion King",
    "park": "Animal Kingdom",
    "land": "Africa",
    "height": 1,
    "type": "Show",
    "year": 1998
  },
  {
    "codeName": "country_bear_jamboree",
    "name": "Country Bear Jamboree",
    "park": "Magic Kingdom",
    "land": "Frontierland",
    "height": 1,
    "type": "Show",
    "year": 1971
  },
  {
    "codeName": "philarmagic",
    "name": "Mickey's PhilharMagic",
    "park": "Magic Kingdom",
    "land": "Fantasyland",
    "height": 1,
    "type": "Show",
    "year": 2003
  },
  {
    "codeName": "fantasmic",
    "name": "Fantasmic!",
    "park": "Hollywood Studios",
    "land": "Sunset Boulevard",
    "height": 1,
    "type": "Show",
    "year": 1998
  },
  {
    "codeName": "indiana_jones_stunt",
    "name": "Indiana Jones Epic Stunt Spectacular!",
    "park": "Hollywood Studios",
    "land": "Echo Lake",
    "height": 1,
    "type": "Show",
    "year": 1989
  },
  {
    "codeName": "finding_nemo",
    "name": "Finding Nemo: The Big Blue… and Beyond!",
    "park": "Animal Kingdom",
    "land": "DinoLand U.S.A.",
    "height": 1,
    "type": "Show",
    "year": 2022
  },
  {
    "codeName": "harmonious",
    "name": "Harmonious",
    "park": "EPCOT",
    "land": "World Showcase",
    "height": 1,
    "type": "Show",
    "year": 2021
  },
  {
    "codeName": "america_sings",
    "name": "America Sings",
    "park": "Disneyland",
    "land": "Tomorrowland",
    "height": 1,
    "type": "Show",
    "year": 1974
  },
  {
    "codeName": "canada_show",
    "name": "Canada: Far and Wide in Circle-Vision 360",
    "park": "EPCOT",
    "land": "World Showcase",
    "height": 1,
    "type": "Show",
    "year": 2020
  },
  {
    "codeName": "matterhorn_bobsleds",
    "name": "Matterhorn Bobsleds",
    "park": "Disneyland",
    "land": "Fantasyland",
    "height": 42,
    "type": "Roller Coaster",
    "year": 1959
  },
  {
    "codeName": "alice",
    "name": "Alice in Wonderland",
    "park": "Disneyland",
    "land": "Fantasyland",
    "height": 1,
    "type": "Dark Ride",
    "year": 1958
  },
  {
    "codeName": "toad",
    "name": "Mr Toad's Wild Ride",
    "park": "Disneyland",
    "land": "Fantasyland",
    "height": 1,
    "type": "Dark Ride",
    "year": 1955
  },
  {
    "codeName": "radiator_springs_racers",
    "name": "Radiator Springs Racers",
    "park": "California Adventure",
    "land": "Cars Land",
    "height": 40,
    "type": "Roller Coaster",
    "year": 2012
  },
  {
    "codeName": "incredicoaster",
    "name": "Incredicoaster",
    "park": "California Adventure",
    "land": "Pixar Pier",
    "height": 48,
    "type": "Roller Coaster",
    "year": 2018
  },
  {
    "codeName": "soarin",
    "name": "Soarin' Around the World",
    "park": "California Adventure",
    "land": "Grizzly Peak",
    "height": 40,
    "type": "Simulator",
    "year": 2001
  },
  {
    "codeName": "guardians_mission_breakout",
    "name": "Guardians of the Galaxy – Mission: BREAKOUT!",
    "park": "California Adventure",
    "land": "Avengers Campus",
    "height": 40,
    "type": "Drop Tower",
    "year": 2017
  },
  {
    "codeName": "web_slingers",
    "name": "WEB SLINGERS: A Spider-Man Adventure",
    "park": "California Adventure",
    "land": "Avengers Campus",
    "height": 32,
    "type": "Dark Ride",
    "year": 2021
  },
  {
    "codeName": "grizzly_river_run",
    "name": "Grizzly River Run",
    "park": "California Adventure",
    "land": "Grizzly Peak",
    "height": 42,
    "type": "Water Ride",
    "year": 2001
  },
  {
    "codeName": "little_mermaid",
    "name": "The Little Mermaid: Ariel's Undersea Adventure",
    "park": "California Adventure",
    "land": "Paradise Gardens Park",
    "height": 1,
    "type": "Dark Ride",
    "year": 2011
  },
  {
    "codeName": "monsters_inc",
    "name": "Monsters, Inc. Mike & Sulley to the Rescue!",
    "park": "California Adventure",
    "land": "Hollywood Land",
    "height": 1,
    "type": "Dark Ride",
    "year": 2006
  },
  {
    "codeName": "world_of_color",
    "name": "World of Color",
    "park": "California Adventure",
    "land": "Paradise Gardens Park",
    "height": 1,
    "type": "Show",
    "year": 2010
  },
  {
    "codeName": "emotional_whirlwind",
    "name": "Inside Out Emotional Whirlwind",
    "park": "California Adventure",
    "land": "Pixar Pier",
    "height": 1,
    "type": "Flat Ride",
    "year": 2019
  },
  {
    "codeName": "indiana_jones",
    "name": "Indiana Jones Adventure",
    "park": "Disneyland",
    "land": "Adventureland",
    "height": 46,
    "type": "Dark Ride",
    "year": 1995
  }

];


const state = {
  grid: Array(6)
    .fill()
    .map(() => Array(6).fill('')),
  currentRow: 0,
  currentCol: 0,
  selectedAnswer: null,
  correctAnswer: null,
};

function updateGrid() {
  for (let i = 0; i < state.grid.length; i++) {
    for (let j = 0; j < state.grid[i].length; j++) {
      const box = document.getElementById(`box${i}${j}`);
      box.textContent = state.grid[i][j];
    }
  }
}

function drawBox(container, row, col, text = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`;
    box.textContent = text;

    container.appendChild(box);
    return box;
}

function drawGrid(container)
{
    const grid = document.createElement('div');
    grid.className = 'grid';
  
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        drawBox(grid, i, j);
      }
    }
  
    container.appendChild(grid);
}

function showVictoryPopup(rideName) {
  const popup = document.getElementById('victory-popup');
  const rideNameElement = document.getElementById('correct-ride-name');
  rideNameElement.textContent = rideName;

  var audio = document.getElementById('myAudio');
  audio.play();

  // Show the popup
  popup.style.display = 'block';
}

function showLosePopup(rideName) {
  const popup = document.getElementById('lose-popup');
  const rideNameElement = document.getElementById('correct-ride-name2');
  
  // Set the content of the element to display the ride name
  rideNameElement.textContent = rideName;  // Update the correct answer text
  console.log(rideName);
  var audio = document.getElementById('myAudio2');
  audio.play();

  // Show the popup
  popup.style.display = 'block';
}

document.getElementById('play-again-btn2').addEventListener('click', restartGame);

// Function to restart the game
function restartGame() {
  location.reload();
}

// Add event listener to the "Play Again" button
document.getElementById('play-again-btn').addEventListener('click', restartGame);


function revealAnswer(guess) {
  const row = state.currentRow;

  let found = false;

  // Check for Name
  const nameBox = document.getElementById(`box${row}0`); // Column for name (index 0)
  const guessName = guess.name;
  const correctName = state.correctAnswer.name;
  
  nameBox.classList.remove('right', 'empty');
  if (guessName === correctName) {
    found = true;
    nameBox.classList.add('right'); // Correct guess
  } else {
    nameBox.classList.add('empty'); // Incorrect guess
  }

  nameBox.textContent = guessName;
  

  // Check for Park
  const parkBox = document.getElementById(`box${row}1`); // Column for park (index 1)
  const guessPark = guess.park;
  const correctPark = state.correctAnswer.park;
  
  parkBox.classList.remove('right', 'empty');
  if (guessPark === correctPark) {
    parkBox.classList.add('right'); // Correct guess
  } else {
    parkBox.classList.add('empty'); // Incorrect guess
  }

  parkBox.textContent = guessPark;

  // Check for Land
  const landBox = document.getElementById(`box${row}2`); // Column for land (index 2)
  const guessLand = guess.land;
  const correctLand = state.correctAnswer.land;
  
  landBox.classList.remove('right', 'empty');
  if (guessLand === correctLand) {
    landBox.classList.add('right'); // Correct guess
  } else {
    landBox.classList.add('empty'); // Incorrect guess
  }

  landBox.textContent = guessLand;

  // Check for Type
  const typeBox = document.getElementById(`box${row}3`); // Column for type (index 3)
  const guessType = guess.type;
  const correctType = state.correctAnswer.type;
  
  typeBox.classList.remove('right', 'empty');
  if (guessType === correctType) {
    typeBox.classList.add('right'); // Correct guess
  } else {
    typeBox.classList.add('empty'); // Incorrect guess
  }

  typeBox.textContent = guessType;

  // Check for Height (low/high logic)
  const heightBox = document.getElementById(`box${row}4`); // Column for height (index 4)
  const guessHeight = guess.height;
  const correctHeight = state.correctAnswer.height;
  
  heightBox.classList.remove('right', 'low', 'high');
  if (guessHeight === correctHeight) {
    heightBox.classList.add('right'); // Correct guess
    heightBox.textContent = guessHeight;
    if(guessHeight === 1)
      {
        heightBox.textContent = 'None';
      }
  } else if (guessHeight < correctHeight) {
    heightBox.classList.add('low'); // Low guess
    heightBox.textContent = guessHeight + '↑';
    if(guessHeight === 1)
      {
        heightBox.textContent = 'None ↑';
      }
  } else {
    heightBox.classList.add('high'); // High guess
    heightBox.textContent = guessHeight + '↓';
    if(guessHeight === 1)
      {
        heightBox.textContent = 'None ↓';
      }
  }


  // Check for Year (low/high logic)
  const yearBox = document.getElementById(`box${row}5`); // Column for year (index 5)
  const guessYear = guess.year;
  const correctYear = state.correctAnswer.year;
  
  yearBox.classList.remove('right', 'low', 'high');
  if (guessYear === correctYear) {
    yearBox.classList.add('right'); // Correct guess
    yearBox.textContent = guessYear;
  } else if (guessYear < correctYear) {
    yearBox.classList.add('low'); // Low guess
    yearBox.textContent = guessYear + '↑';
  } else {
    yearBox.classList.add('high'); // High guess
    yearBox.textContent = guessYear + '↓';
  }

  state.currentRow++;

  if (found) {
    // Victory actions
    showVictoryPopup(state.correctAnswer.name);
  } else
  {
    if(state.currentRow == 6)
    {
      showLosePopup(state.correctAnswer.name);
    }
  }
}

function pickRandomAnswer() {
  const randomIndex = Math.floor(Math.random() * rides.length);
  return rides[randomIndex];
}

function populateRideList() {
  const rideList = document.getElementById('ride-list');

  // Sort the rides alphabetically by name
  const sortedRides = rides.sort((a, b) => a.name.localeCompare(b.name));

  sortedRides.forEach(ride => {
    const div = document.createElement('div');
    div.className = 'ride-option';
    div.textContent = ride.name;

    div.addEventListener('click', () => {
      state.selectedAnswer = ride;
      console.log('Selected Ride:', state.selectedAnswer); // Debugging line
      revealAnswer(state.selectedAnswer);
    });

    rideList.appendChild(div);
  });
}

function startup()
{
  state.correctAnswer = pickRandomAnswer();
  console.log('Selected Answer:', state.correctAnswer);
  const game = document.getElementById('game');
  drawGrid(game);
  populateRideList();
  var audio = document.getElementById('myAudio3');
  audio.play();
}

startup();
