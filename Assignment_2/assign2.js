

const athletes = [
    {
        "id": 1,
        "name": "Usain Bolt",
        "age": 36,
        "country": "Jamaica",
        "sport": "Athletics",
        "picture": "https://th.bing.com/th/id/OIP.rEefoTqpKtFGsfhK_0FJUwHaE8?w=273&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7https://dynaimage.cdn.cnn.com/cnn/digital-images/org/51ae1592-d8ad-404d-a3a6-bc6e8679842b.jpg",
        "social": {
            "facebook": "https://www.facebook.com/usainbolt/",
            "instagram": "https://www.instagram.com/usainbolt/?hl=en"
        }
    },
        {
            "id": 2,
            "name": "Lionel Messi",
            "age": 36,
            "country": "Argentina",
            "sport": "Football",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/800px-Lionel_Messi_20180626.jpg",
            "social": {
            "facebook": "https://www.facebook.com/leomessi",
            "instagram": "https://www.instagram.com/leomessi"
        }
        },
        {
            "id": 3,
            "name": "Serena Williams",
            "age": 42,
            "country": "USA",
            "sport": "Tennis",
            "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJFEkumii9w8meOfSMAxqGGfGp3lVPKIcFQ&s",
            "social": {
            "facebook": "https://www.facebook.com/SerenaWilliams",
            "instagram": "https://www.instagram.com/serenawilliams"
        }
        },
        {
            "id": 4,
            "name": "Michael Phelps",
            "age": 38,
            "country": "USA",
            "sport": "Swimming",
            "picture": "https://miro.medium.com/v2/resize:fit:2608/1*xQZZCvKdS5pJo8km-TADsg.jpeg",
            "social": {
            "facebook": "https://www.facebook.com/michaelphelps",
            "instagram": "https://www.instagram.com/m_phelps00"
        }
        },
        {
            "id": 5,
            "name": "Virat Kohli",
            "age": 35,
            "country": "India",
            "sport": "Cricket",
            "picture": "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png",
            "social": {
              "facebook": "https://www.facebook.com/virat.kohli",
              "instagram": "https://www.instagram.com/virat.kohli"
          }
        },
        {
            "id": 6,
            "name": "Cristiano Ronaldo",
            "age": 39,
            "country": "Portugal",
            "sport": "Football",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/800px-Cristiano_Ronaldo_2018.jpg",
            "social": {
              "facebook": "https://www.facebook.com/Cristiano",
              "instagram": "https://www.instagram.com/cristiano"
          }
        },
        {
            "id": 7,
            "name": "Naomi Osaka",
            "age": 26,
            "country": "Japan",
            "sport": "Tennis",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/NaomiOsaka-smile-2020_%28cropped_tight%29.png/1200px-NaomiOsaka-smile-2020_%28cropped_tight%29.png",
            "social": {
              "facebook": "https://www.facebook.com/naomiosaka",
              "instagram": "https://www.instagram.com/naomiosaka"
          }

        },
        {
            "id": 8,
            "name": "Simone Biles",
            "age": 27,
            "country": "USA",
            "sport": "Gymnastics",
            "picture": "https://hips.hearstapps.com/hmg-prod/images/simone-biles-celebrates-after-placing-first-in-the-floor-news-photo-1693236365.jpg?crop=0.949xw:0.633xh;0.0170xw,0.0465xh&resize=640:*",
            "social": {
            "facebook": "https://www.facebook.com/SimoneBiles",
            "instagram": "https://www.instagram.com/simonebiles"
        }
        },
        {
            "id": 9,
            "name": "Roger Federer",
            "age": 42,
            "country": "Switzerland",
            "sport": "Tennis",
            "picture": "https://i2-prod.mirror.co.uk/sport/football/news/article33420302.ece/ALTERNATES/s615b/0_roger-federer-announces-retirement-from-tennis.jpg",
            "social": {
            "facebook": "https://www.facebook.com/Federer",
            "instagram": "https://www.instagram.com/rogerfederer"
        }
        },
        {
            "id": 10,
            "name": "Novak Djokovic",
            "age": 37,
            "country": "Serbia",
            "sport": "Tennis",
            "picture": "https://live-production.wcms.abc-cdn.net.au/eb4a934249febe1a514a492c24578381?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=101&width=862&height=485",
            "social": {
            "facebook": "https://www.facebook.com/NovakDjokovic",
            "instagram": "https://www.instagram.com/djokernole"
        }
        },
        {
            "id": 11,
            "name": "Megan Rapinoe",
            "age": 39,
            "country": "USA",
            "sport": "Football",
            "picture": "https://www.sportsnet.ca/wp-content/uploads/2019/07/Megan-Rapinoe.jpg",
            "social": {
            "facebook": "https://www.facebook.com/MeganRapinoe",
            "instagram": "https://www.instagram.com/mrapinoe"
        }
        },
        {
            "id": 12,
            "name": "Sachin Tendulkar",
            "age": 50,
            "country": "India",
            "sport": "Cricket",
            "picture": "https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2020-03/srt100.jpg?h=65a4b400&itok=ui_3Quqa",
            "social": {
            "facebook": "https://www.facebook.com/SachinTendulkar",
            "instagram": "https://www.instagram.com/sachintendulkar"
        }
        } 
  ];
  
  
  document.addEventListener('DOMContentLoaded', () => {
    displayResults(athletes);
  });
  
  function searchAthlete() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const results = athletes.filter(athlete => athlete.name.toLowerCase().includes(searchQuery));
    displayResults(results);
  }
  

function displayResults(results) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  results.forEach(athlete => {
      const athleteDiv = document.createElement('div');
      athleteDiv.className = 'athlete';
      athleteDiv.innerHTML = `
          <div class="athlete-card">
            <img src="${athlete.picture}" alt="${athlete.name}" class="athlete-picture" onerror="this.src='placeholder.jpg';">
            <div class="athlete-details">
              <p>Name : ${athlete.name}</p>
              <p>Sport : ${athlete.sport}</p>
              <p>Age : ${athlete.age}</p>
              <p>Country : ${athlete.country}</p>
              <div>
                  <button class="btn-add" onclick='addToCart(${JSON.stringify(athlete)})'>Add to Cart</button>
                  <button class="btn-details" onclick='viewDetails("${athlete.name}")'>Details</button>
              </div>
              <div class="social-icons">
                  <a href="${athlete.facebook}" target="_blank"><i class="fab fa-facebook-square"></i></a>
                  <a href="${athlete.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
      `;
      resultsDiv.appendChild(athleteDiv);
  });
}

  
  
let playerCount = 0;

function addToCart(athlete) {
  if(playerCount > 10){
    alert("We can't add player more htan 11!!!");
    return;
  }
  const { name, age, sport, country, picture } = athlete; 
  console.log('Image URL:', picture); 
  const cartList = document.getElementById('cartList');
  const totalPlayers = document.getElementById('totalPlayers');

  const cartItem = document.createElement('li');
  cartItem.classList.add('cart-item');

  const img = document.createElement('img');
  img.src = picture;
  img.alt = `${name}'s picture`;
  img.classList.add('athlete-img');

  const details = document.createElement('div');
  details.classList.add('athlete-details');
  details.innerHTML = `Name: ${name}<br>Age: ${age}<br>Sport: ${sport}<br>Country: ${country}`;

  cartItem.appendChild(img);
  cartItem.appendChild(details);
  cartList.appendChild(cartItem);

  playerCount++;
  totalPlayers.textContent = playerCount;
}






  
  function viewDetails(athleteName) {
    const athlete = athletes.find(athlete => athlete.name === athleteName);
    alert(`
      Name: ${athlete.name}
      Age: ${athlete.age}
      Country: ${athlete.country}
      Sport: ${athlete.sport}
    `);
  }


  