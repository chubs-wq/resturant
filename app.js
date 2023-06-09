let foodMenu = document.querySelectorAll(".list-food-hover");
const foodList = document.querySelector(".food-items");
let foodPageButton = document.querySelector(".pagination");

for (let i = 0; i < foodMenu.length; i++) {
  foodMenu[i].addEventListener("click", listFood);
}

let foods = [
  {
    image: "./images/chicken.png",
    name: "Chicken Massala",
    price: "$100",
    category: "breakfast",
  },
  {
    image: "./images/western.png",
    name: "Western Suprise",
    price: "$100",
    category: "breakfast",
  },
  {
    image: "./images/chicken.png",
    name: "Chicken Massala",
    price: "$100",
    category: "breakfast",
  },

  {
    image: "./images/sandwich.png",
    name: "Sandwich Soup",
    price: "$200",
    category: "lunch",
  },
  {
    image: "./images/chicken.png",
    name: "Sandwich Soup",
    price: "$200",
    category: "lunch",
  },
  {
    image: "./images/western.png",
    name: "Sandwich Soup",
    price: "$200",
    category: "lunch",
  },

  {
    image: "./images/chicken.png",
    name: "Sandwich Soup",
    price: "$300",
    category: "dinner",
  },
  {
    image: "./images/western.png",
    name: "Sandwich Soup",
    price: "$300",
    category: "dinner",
  },
  {
    image: "./images/sandwich.png",
    name: "Sandwich Soup",
    price: "$300",
    category: "dinner",
  },
  {
    image: "./images/chilli.png",
    name: "Chilli Soup",
    price: "$300",
    category: "soups",
  },
  {
    image: "./images/ramen.png",
    name: "Ramen Soup",
    price: "$300",
    category: "soups",
  },
  {
    image: "./images/beef.png",
    name: "Beef Soup",
    price: "$300",
    category: "soups",
  },
  {
    image: "./images/cupcake.png",
    name: "Cupcake",
    price: "$300",
    category: "desert",
  },
  {
    image: "./images/toast.png",
    name: "Toast",
    price: "$300",
    category: "desert",
  },
  {
    image: "./images/pancake.png",
    name: "Pancake",
    price: "$300",
    category: "desert",
  },
  {
    image: "./images/cocktail.png",
    name: "Cocktail",
    price: "$300",
    category: "drinks",
  },
  {
    image: "./images/cola.png",
    name: "Cola",
    price: "$300",
    category: "drinks",
  },
  {
    image: "./images/jiuce.png",
    name: "Fruit Juice",
    price: "$300",
    category: "drinks",
  },
];

function listFood(e) {
  let filteredFood = foods.filter(function (food) {
    if (e.target.innerText.toLowerCase() === food.category) {
      return food;
    }
  });
  foodList.innerHTML = "";
  UI(filteredFood);
}

function UI(foods) {

  foods.slice(0, 3).map(function (food) {
    const html = `<div class="menu-card">
            <img src=${food.image} alt="" style="width: 200px; height: 180px" />
            <h2>${food.name}</h2>
            <h3 class="menu-price">${food.price}</h3>
            </div>`;
    foodList.insertAdjacentHTML("afterbegin", html);
  });
}

UI(foods);

/* foodPageButton.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    console.log(e.target.innerText);
  }
}); */
