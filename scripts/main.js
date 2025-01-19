const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
      id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://imgs.search.brave.com/9-R2jw1XL2X8zrwf08XBn4FSmU_j_2ulmkIkFG3Rw0E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWN0aXZld2lsZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDcvVGFyYm9z/YXVydXMuanBn",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "https://imgs.search.brave.com/ZopEylkbGSX0txRodJysPWhvD620w5-Fh-gXP3wZij4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGl0cGF0LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/NS9EU0MwMDY0Mi0x/LTEwMjR4Njg0LTEu/d2VicA"
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl: "https://imgs.search.brave.com/ASHNaWwJN1KW-vWIbcEuJwKWgO9wCFCFSzlhm0AYYU0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzI1LzEwLzk0/LzM2MF9GXzIyNTEw/OTQyN19Gb3RYTERz/UllpTzdORHV3U1NW/U2tzQXhHZG5PMlFk/Ny5qcGc"
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl: "https://imgs.search.brave.com/Kr4J44eexRmy4mGgvXR4O_6RWn22q9ABRSpYVXC6NuA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0Qz/ZHZOd2pMZkp1NjhU/ZFlKV1VKRzgtMzIw/LTgwLmpwZw"
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "https://imgs.search.brave.com/B802k9XRGjCrrgq6ZRkItj7kS7Mlca-zmgfR58N0TzU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWtjLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8xMS9D/YW5hYW4tRG9nLU9u/LVdoaXRlLTAxLmpw/Zw"
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "https://imgs.search.brave.com/JRn3fY7oxZOiP0MS6qBBJ5WWpLTNVTTT7Y6NHMN50HY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzMwLzM4LzA2/LzM2MF9GXzkzMDM4/MDYwM19UV0pMeWFs/WTlSQ2tOelZCOWlk/dmdUclhPdnJLZ3p3/VS5qcGc"
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "https://imgs.search.brave.com/CpjNXLX9xFZOUl7dQBodq1X1UyB7jfpeuC1tUlRGO9A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWN0aXZld2lsZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDkvRWRtb250/b3NhdXJ1cy5qcGc"
  },
  {
   id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://imgs.search.brave.com/2oTo55w8ucqrCFrTH7mDS6gtOlw0LtzWoY5Uwpu5ThQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/NjMyNDIyOS9waG90/by9jYXQtd2l0aC1h/LWNhbmUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWVBai15/dHdWc3AxLUlpaHhf/MndieTVWaUxMZ2VY/aFNTLW9VbndOdmIx/Q2c9"
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl: "https://imgs.search.brave.com/5mKH1Bc-MqtRb5v8oar2w5UQ3MTjI7E8-RpnnjqEMuk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NTMxMzc2OC9waG90/by9kaW5vc2F1ci10/eXJhbm5vc2F1cnVz/LXJleC1vbi10b3At/b2YtbW91bnRhaW4t/cm9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9N2hZdW9J/dDNtUGp1d1dzV1dR/LXNZYjNJT2dyS2pQ/UVVybGlWV19ENlhv/TT0"
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "https://imgs.search.brave.com/nImtljpa2JM2kiS2CGaZ9JgOmWrTWm1WUTmS0kQpn1s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aS13aWxsLW1pc3Mt/eW91LWRlYXJseS1t/eS1iZXN0LWZyaWVu/ZC1tYXgtdjAtY3Nq/ZDU0cGYwb2RlMS5q/cGc_d2lkdGg9NjQw/JmNyb3A9c21hcnQm/YXV0bz13ZWJwJnM9/NWYxODMyMGQwZTM4/MjQyOGIwZmY5ZjBh/OWZmNThmYTllZDNm/ZGU5Zg"
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://imgs.search.brave.com/Yyks3nuMBwjw_gUxc2lHKxMf8KQjn6y_jK5eWiCk1HE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/MTk1NjE1My9waG90/by9ibGFjay1jYXQt/c3RpY2tpbmctb3V0/LXRvbmd1ZS1mdW5u/eS1wb3J0cmFpdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SnRYbjdCTlRXbDU3/M255ak9KRnNJOTlm/WEVqY3RuWHNNejV6/cm9uenM1QT0"
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "https://imgs.search.brave.com/fnTN-aFO2clYnoHJOrm_8i6GdD1WO00_LQ6sBlSYL6I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MzE4MDk2L3Bob3Rv/L2Rpbm9zYXVyLWZh/Y2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVNxQ2hfbVR3/WmtzaURkUmh1eV9T/dUtQdjdpajRKLXc0/Tm9QQ0QxRUl5QVU9"
  },
  {
      id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://imgs.search.brave.com/6-o25ixOVhH7E_ThmVy2gcL436L59rC-6_WGBLvTA_s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YmVhdXRpZnVsLWNh/dC5qcGc_d2lkdGg9/MTAwMCZmb3JtYXQ9/cGpwZyZleGlmPTAm/aXB0Yz0w"
  },
  {
      id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
      id: 24,
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "https://imgs.search.brave.com/SbCAgKShzIhXbwPmVc13lhVGKmrG4dfa-vSQ-7XpbwY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGQuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA1/L2N1dGVzdC1kb2ct/YnJlZWRzLWluLXRo/ZS13b3JsZC0wNC1h/dS5qcGcud2VicA"
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://imgs.search.brave.com/pV6tdvzg7IhQz8Xpfad_j28PKvKpN4h0jEgkkwP2oos/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MzA0Mjc0L3Bob3Rv/L2tpdHRlbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WFpZ/NVVsUEdrTEhCSGst/cFlUMGQzNm81NGdO/VW0tWW5RcWYtLTNi/MkU5QT0"
  },
  {
      id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
      id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
      id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
      id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  },
  {
      id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl: "https://imgs.search.brave.com/FIRQ9CYOIQnkMdxNq5n9X4AcL4w7iIJ6TneN8fbZRrk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXZlcnl0aGluZ2Rp/bm9zYXVyLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/Ny9QTlNPLUFuZHJl/YS10aGUtVC1yZXgt/bGF0ZXJhbC12aWV3/Mi5qcGc"
  }
];

//DOM Utility Functions
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// Query for buttons and app
const targetingApp = document.querySelector("#app");
const targetBtns = document.querySelector("#btn-group");

// Creates create cards for each pet
const petsOnDom = (petArray) => {
let domString = "";
petArray.forEach((pet) => {
  domString += `<div class="card" style="width: 18rem;">
  <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
  <div class="card-body">
    <h5 class="card-title">${pet.name}</h5>
    <h3 class="card-title">${pet.color}</h3>
    <h3 class="card-title">${pet.specialSkill}</h3>
    <p class="card-text"><small>${pet.type}</small></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;  
});
  renderToDom("#app", domString);
}

// Function to filter pets by color
const filter = (array, petType) => {
  //Here we set an empty array to store the filtered pets
  const petTypeArray = [];

  // Loop through each pet in the array
  array.forEach((pet) => {
    // Check if the pet's color is in the array of pet colors
    if (pet.type === petType) {

      // If it is, add the pet to the new array
      petTypeArray.push(pet);
    }

  });

  // Return the new array with only the pets of the selected color(s)
  return petTypeArray;
};

// Targeting buttons and event listeners
const showAllCards = document.querySelector("#all-cards");
const showCatCards = document.querySelector("#cat-cards");
const showDogCards = document.querySelector("#dog-cards");
const showDinoCards = document.querySelector("#dino-cards");


// Displays the html on to the DOM
showAllCards.addEventListener("click", () => {
  petsOnDom(pets);
});

showCatCards.addEventListener("click", () => {
  const petCatTypes = filter(pets, "cat");
  petsOnDom(petCatTypes)
});

showDogCards.addEventListener("click", () => {
  const petDogTypes = filter(pets, "dog");
  petsOnDom(petDogTypes);
});

showDinoCards.addEventListener("click", () => {
  const petDinoTypes = filter(pets, "dino");
  petsOnDom(petDinoTypes);
});

//Extra sauce: Adding background Music
const audio = document.querySelector("#music");
audio.addEventListener("click", () => {
  audio.volume = 0.1;
  audio.play();
  
  
});
