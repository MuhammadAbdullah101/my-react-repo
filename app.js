import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
/**
 * Header
 *  - Logo
 *  - Nav Items
 *  - Cart Button
 *
 * Body
 *  - Search bar
 *  - Search Button
 *  - Card Container
 *     - Cards
 *       - Food Image
 *       - Food Name
 *       - Food Price
 *       - ratings
 * Footer
 *  - Copyright
 *  - Footer Links
 *  - Contact
 */

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/5462907/screenshots/11960844/5.png"
          alt="image of food order"
        />
        <span>Let's Feast</span>
      </div>
      <div className="navigation">
        <ul>
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Resturants</a>
          </li>
          <li className="nav-item">
            <a href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="cart-icon-container">
        <img
          className="cart-icon"
          src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
          alt=""
        />
      </div>
    </header>
  );
};
const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search Food Or Resturant ...."
      />
      <button type="submit" className="submit-btn">
        <img
          className="search-icon"
          src="https://static.thenounproject.com/png/3381255-200.png"
          role="presentation"
        />
      </button>
    </div>
  );
};
const FoodCard = (props) => {
  const { food } = props;
  const { foodName,image,cuisine,deliveryTime,price} = food;
 

  return (
    <div className="food-card">
      <a href="#" className="food-link">
        <div className="food-image-container">
          <img
            className="food-image"
            src={image}
          />
        </div>
        <div className="food-card-detail">
          <p className="food-name">{foodName}</p>
          <p className="food-cuisine">Cuisine: {cuisine}</p>
          <hr/>
          <p className="food-price">Price: {price}</p>
          <span>Deliver in: {deliveryTime}</span>
        </div>
      </a>
    </div>
  );
};

const FoodCards = (props) => {
  const { foodData } = props;
  return (
    <div className="food-cards-container">
      {foodData.map((food) => (
        <FoodCard key={food.foodName} food={food} />
      ))}
    </div>
  );
};
const foodData = [
  {
    foodName: "Pizza",
    cuisine: "Italian , Europe",
    image:
      "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    deliveryTime: " 38 Min",
    price: "$7.90",
  },
  {
    foodName: "Burger",
    cuisine: "American , USA",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg",
    deliveryTime: " 10 Min",
    price: "$5.00",
  },
  {
    foodName: "Pasta",
    cuisine: "Italian , Europe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU",
    deliveryTime: " 30 Min",
    price: "$4.11",
  },
  {
    foodName: "Ramen Noodles",
    cuisine: "Chinese , Asia",
    image:
      "https://api.vip.foodnetwork.ca/wp-content/uploads/2022/01/FNC_OGImage_Taiwanese-Beef-Noodle-Soup.jpg",
    deliveryTime: "1 Hr",
    price: "$8.50",
  },
  {
    foodName: "Seafood, Shrips",
    cuisine: "Chinese , Asia",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg",
    deliveryTime: "35 Min",
    price: "$5.00",
  },
];
const Body = () => {
  return (
    <div className="main">
      <Search />
      <FoodCards foodData={foodData} />
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);
root.render(<AppLayout />);
