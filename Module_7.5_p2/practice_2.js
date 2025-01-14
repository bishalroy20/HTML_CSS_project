


const searchButton = document.getElementById('search-food');

searchButton.addEventListener('click', () => {
    const mealInput = document.querySelector('#meal_container input').value;
    loadMeal(mealInput);
});

const loadMeal = (mealName) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => {
            if (data.meals) { 
                displayMeals(data.meals); 
            } else {
                 displayNoResults(); 
            }
        });
};




const displayMeals = (meals) => {
    const meal_container = document.getElementById('meal_container');


    meal_container.innerHTML = `
        <input placeholder="Input food name......">
        <button id="search-food">Search</button>
    `;

    const foodContainer = document.createElement("div");
    foodContainer.className = "food-container";
    meal_container.appendChild(foodContainer);

    if (meals) {
        meals.forEach((meal) => {
            const div = document.createElement("div");
            div.className = "meal";

            div.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <h5>${meal.strMeal}</h5>
            
            <button onclick="showDetails('${meal.idMeal}')">Details</button>
            <button>Add to cart</button>
            `;
            foodContainer.appendChild(div);
        });
    } else {
        const noResults = document.createElement("div");
        noResults.className = "no-results";
        noResults.textContent = "No meals found. Please try a different search.";
        meal_container.appendChild(noResults);
    }

    document.getElementById('search-food').addEventListener('click', () => {
        const mealInput = document.querySelector('#meal_container input').value;
        loadMeal(mealInput);
    });
};


const displayNoResults = () => { 
    const meal_container = document.getElementById('meal_container'); 
    meal_container.innerHTML = ` <input placeholder="Input food name......"> 
    <button id="search-food">Search</button> `; const noResults = document.createElement("div"); 
    noResults.className = "no-results"; 
    noResults.textContent = "No meals found. Please try a different search."; 
    meal_container.appendChild(noResults); 
    document.getElementById('search-food').addEventListener('click', () => { 
        const mealInput = document.querySelector('#meal_container input').value;
        loadMeal(mealInput); 
    }); 
};


const showDetails = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            if (!data.meals || data.meals.length === 0) {
                throw new Error('No meal found');
            }
            const meal = data.meals[0];
            const detailContainer = document.getElementById('detail_container');
            if (detailContainer) {
                detailContainer.innerHTML = `
                    <div class="meal-detail">
                        <h3>${meal.strMeal}</h3>
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                        <p><strong>Category:</strong> ${meal.strCategory}</p>
                        <p><strong>Area:</strong> ${meal.strArea}</p>
                        <p><strong>Instructions:</strong> ${meal.strInstructions.slice(0,40)}</p>
                    </div>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch meal details. Please try again.');
        });
};







