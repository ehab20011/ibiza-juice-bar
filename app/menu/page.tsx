"use client";

import React from "react";

/** 
 * 1) DEFINE YOUR MENU CATEGORIES & ITEMS
 *    Each category has a "name" and an array of "items".
 *    Each item can have "name", "price", and "desc".
 */
const menuCategories = [
  {
    name: "Best Sellers (Most ordered on Seamless)",
    items: [
      { name: "Tropicana Bowl", price: "$12.99", desc: "" },
      { name: "Chicken Quesadilla", price: "$13.99", desc: "" },
      { name: "Original Ibiza Waffle", price: "$12.99", desc: "" },
    ],
  },
  {
    name: "NEW Dubai Chocolate Fall Items",
    items: [
      {
        name: "Peppermint Hot Chocolate",
        price: "$5.99+",
        desc: "Peppermint Hot Chocolate",
      },
      {
        name: "Mocha Hot Chocolate",
        price: "$5.99+",
        desc: "Our decadent mocha hot chocolate",
      },
      {
        name: "Biscoff Cookie Latte",
        price: "$5.49+",
        desc: "Cookie butter Biscoff Latte with Cookie Butter Cold Foam",
      },
      {
        name: "Dubai Chocolate Strawberries",
        price: "$15.99",
        desc: "Strawberries with Nutella, pistachio crème, & Dubai chocolate",
      },
      {
        name: "Dubai Chocolate Brownie",
        price: "$15.99",
        desc: "",
      },
      {
        name: "Jumbo Dubai Chocolate Bar",
        price: "$19.99",
        desc: "Handmade bar filled with pistachio cream & kunafa",
      },
      {
        name: "Pumpkin Spiced Latte",
        price: "$5.49+",
        desc: "",
      },
      {
        name: "Oatmeal",
        price: "$5.99",
        desc: "Warm oatmeal with coconut milk & organic agave",
      },
      {
        name: "Dubai Chocolate Crepe",
        price: "$15.99",
        desc: "Crepe w/ pistachio creme, kunafa, strawberry, Nutella drizzle",
      },
      {
        name: "Dubai Chocolate Acai Bowl",
        price: "$19.99",
        desc: "Brazilian acai w/ granola, strawberries, pistachio cream, chocolate",
      },
      {
        name: "Create or Layer Own Bowl",
        price: "",
        desc: "Layer your bowl with more than one base",
      },
    ],
  },
  {
    name: "Breakfast Menu (NEW PANCAKE)",
    items: [
      {
        name: "Eggs with your choice of meat",
        price: "$8.49+",
        desc: "Two eggs any style",
      },
      {
        name: "Bacon, Egg & Cheese",
        price: "$8.49+",
        desc: "Eggs, turkey bacon on a warm biscuit",
      },
      {
        name: "Avocado Toast with Egg",
        price: "$13.99+",
        desc: "Avocado toast topped with egg on two multigrain toasts",
      },
      {
        name: "Ibiza Breakfast Burrito",
        price: "$12.99+",
        desc: "Scrambled eggs, tater tots, cheese, turkey bacon",
      },
      {
        name: "Cali Breakfast Burrito",
        price: "$11.99",
        desc: "Scrambled eggs, cheddar, pickled onion, avocado, tomato",
      },
      {
        name: "Sweet Heaven Breakfast Burrito",
        price: "$12.99",
        desc: "Eggs, cheddar, sweet potatoes fries, crispy chicken, chipotle mayo",
      },
      {
        name: "Spicy Chorizo Burrito",
        price: "$12.99",
        desc: "Eggs, spicy beef chorizo, tater tots, cheddar mix",
      },
      {
        name: "Ibiza Buttermilk Pancakes",
        price: "$8.99",
        desc: "3 buttermilk stacked pancakes with syrup",
      },
      {
        name: "Berry Pancakes",
        price: "$11.99",
        desc: "3 blueberry pancakes topped w/ strawberry & honey",
      },
      {
        name: "Choco Chip Pancakes",
        price: "$11.99",
        desc: "3 chocolate chip pancakes topped w/ strawberry, Nutella",
      },
      {
        name: "Berry French Toast",
        price: "$9.99",
        desc: "",
      },
      {
        name: "Bagel with Cream Cheese",
        price: "$4.49",
        desc: "",
      },
      {
        name: "Croissant Burrata",
        price: "$8.99",
        desc: "Sliced Turkey, Pesto, Burrata Cheese, Spinach, balsamic glaze",
      },
    ],
  },
  {
    name: "Cafe | Tea | Milkshake",
    items: [
      { name: "Hot Coffee", price: "$2.49+", desc: "" },
      { name: "Iced Coffee", price: "$2.99+", desc: "" },
      { name: "Hot Latte", price: "$4.49+", desc: "" },
      { name: "Iced Latte", price: "$4.95+", desc: "" },
      { name: "Caramel Iced Latte", price: "$5.49+", desc: "" },
      {
        name: "Fresh Apple Ginger Tea",
        price: "$5.49+",
        desc: "Green Tea w/ ginger, apple, lemon, cinnamon, honey",
      },
      { name: "Milkshake", price: "$8.00+", desc: "" },
      { name: "Signature Frozen Frappes", price: "$6.99+", desc: "Decadent" },
      { name: "Hot Cappuccino", price: "$4.49+", desc: "" },
      { name: "Hot Chai Tea Latte", price: "$5.49+", desc: "With cinnamon topping" },
      { name: "Iced Chai Latte", price: "$5.49+", desc: "" },
      { name: "Iced Passion Herbal Tea", price: "$3.99+", desc: "" },
      { name: "Hot Tea", price: "$2.79+", desc: "" },
      { name: "Iced Passion Green Tea", price: "$5.49+", desc: "Passion fruit + green tea" },
      {
        name: "Vegan Chocolate Milkshake",
        price: "$8.49+",
        desc: "Creamy non-dairy vegan chocolate milkshake",
      },
    ],
  },
  {
    name: "Organic Brazilian Acai Bowls",
    items: [
      {
        name: "Ibiza Bowl",
        price: "$12.99+",
        desc: "Topped with granola, strawberry, banana, blueberry, honey",
      },
      {
        name: "Peanut Bowl",
        price: "$12.99+",
        desc: "Topped w/ granola, banana, sliced almonds, peanut butter",
      },
      {
        name: "Choco Charm Bowl",
        price: "$12.99",
        desc: "Topped w/ granola, strawberry, banana, Nutella",
      },
      {
        name: "Tropicana Bowl",
        price: "$12.99",
        desc: "Best Seller. Topped w/ strawberry, mango, pineapple, coconut flakes",
      },
      {
        name: "Almond Bliss",
        price: "$13.99",
        desc: "Topped w/ granola, banana, coconut almonds, almond butter",
      },
    ],
  },
  {
    name: "Organic Pitaya Bowls & Coconut Bowls",
    items: [
      {
        name: "Pink Coco",
        price: "$12.99",
        desc: "Kiwi, pineapple, goji berries, coconut flakes",
      },
      {
        name: "Chocolate Crunch",
        price: "$12.99",
        desc: "Granola, banana, strawberry, organic raw cacao nibs",
      },
      {
        name: "Coco Colada Bowl",
        price: "$12.99",
        desc: "Base: Coconut, Pineapple, Banana. Topped w/ strawberry, banana, coconut",
      },
    ],
  },
  {
    name: "Green Bowl & Mango Bowls",
    items: [
      {
        name: "Gotcha Matcha Bowl",
        price: "$13.49",
        desc: "Matcha, mango, banana, agave. Topped w/ strawberry, mango, coconut",
      },
      { name: "Electric Kale", price: "$12.95", desc: "Non dairy blend" },
      {
        name: "SoCal",
        price: "$12.99+",
        desc: "Mango, pineapple, orange. Topped w/ granola, banana, pineapple",
      },
    ],
  },
  {
    name: "Juices",
    items: [
      { name: "Cold Kill Pill", price: "$8.89+", desc: "Apple, lemon, orange, kale, ginger, mint, cayenne" },
      { name: "Greentini Juice", price: "$8.89+", desc: "Green apple, spinach, celery, pineapple" },
      { name: "C Squeeze Juice", price: "$8.89+", desc: "Orange, carrot, lemon, ginger" },
      { name: "Citrust Juice", price: "$8.89+", desc: "Grapefruit, orange, lemon, apple, beet, carrot" },
      { name: "Palm Green Juice", price: "$8.89+", desc: "Celery, cucumber, pineapple, kale, mint" },
      { name: "Wanderlust", price: "$7.99+", desc: "Watermelon, mint, lime" },
      { name: "Bee Booster", price: "$8.89+", desc: "Orange, bee pollen, grapefruit, ginger, lemon" },
      { name: "ABC", price: "$8.89+", desc: "Apple, beet, carrot" },
      { name: "Freshly Squeezed Orange Juice", price: "$8.89+", desc: "" },
      { name: "Freshly Squeezed Apple Juice", price: "$8.89+", desc: "" },
      { name: "Celery Juice", price: "$8.89+", desc: "" },
      { name: "Create a Juice", price: "$8.89+", desc: "" },
    ],
  },
  {
    name: "Matcha Lovers",
    items: [
      { name: "Matcha Iced Latte", price: "$5.49+", desc: "" },
      { name: "Hot Matcha Latte", price: "$5.29+", desc: "" },
      {
        name: "Strawberry Iced Matcha",
        price: "$6.99+",
        desc: "Organic green tea sweetened w/ agave + fresh strawberry jam",
      },
    ],
  },
  {
    name: "Smoothies",
    items: [
      { name: "Create A Smoothie", price: "$8.89+", desc: "" },
      { name: "Strawberry Banana", price: "$8.89+", desc: "Strawberry, banana, milk" },
      { name: "Mango Tango", price: "$8.89+", desc: "Mango, pineapple, orange, agave" },
      { name: "Kissland", price: "$8.89+", desc: "Strawberry, berry, pineapple, milk" },
      { name: "Spinacha", price: "$8.89+", desc: "Matcha, spinach, banana, mango, coconut milk" },
      { name: "Peach Bum", price: "$8.89+", desc: "Peach, strawberry, mango, OJ, milk" },
      { name: "Pitaya Berry Blast", price: "$8.89+", desc: "Pitaya, blueberry, strawberry, mango, passion fruit" },
      { name: "Piña Colada", price: "$8.89+", desc: "Pineapple, coconut cream, milk" },
      { name: "Avolicious", price: "$8.89+", desc: "Avocado, banana, agave, milk" },
      { name: "Acaiya Boost", price: "$8.89+", desc: "Acai, banana, strawberry, blueberry, agave" },
      { name: "Mangarita", price: "$8.89+", desc: "Mango, lemon, ginger, water" },
      {
        name: "Cinnamon Apple (no protein powder)",
        price: "$8.89+",
        desc: "Apple, banana, cinnamon, almond butter, oats, milk",
      },
      { name: "Cancun Beach", price: "$8.89+", desc: "Green apple, spinach, mango, pineapple juice" },
      { name: "Mangonada Smoothie", price: "$8.89+", desc: "Mango, pineapple, OJ, milk, Tajin, Chamoy" },
    ],
  },
  {
    name: "Protein Shakes",
    items: [
      {
        name: "Chocopeanut",
        price: "$8.00+",
        desc: "Peanut butter, banana, chocolate protein, cacao powder",
      },
      {
        name: "Bananzaberry",
        price: "$8.00+",
        desc: "Strawberry, banana, greek yogurt, vanilla protein",
      },
      {
        name: "Mint Chip",
        price: "$8.00+",
        desc: "Vanilla protein, spinach, banana, mint, cacao nibs",
      },
      {
        name: "Protein Cinnamon Apple",
        price: "$8.49+",
        desc: "Protein choice, banana, cinnamon, apple, almond butter, oats, milk",
      },
      { name: "PB Blueberry", price: "$8.00+", desc: "Blueberry, PB, banana, milk" },
      { name: "Honey Cheer-io", price: "$8.00+", desc: "Banana, honey, cinnamon, oats, milk" },
      {
        name: "Pumpkin Protein",
        price: "$7.99+",
        desc: "Banana, oats, pumpkin spice, vanilla protein, nut butter, milk",
      },
      {
        name: "Coffee bean protein",
        price: "$8.00+",
        desc: "Banana, cold brew, almond butter, chocolate protein, milk",
      },
    ],
  },
  {
    name: "Wellness Shots",
    items: [
      { name: "2 oz Ginger Shot", price: "$4.99", desc: "Ginger, lemon, cayenne" },
      { name: "2oz Ginger Spice", price: "$4.99", desc: "Ginger, lemon, cayenne, turmeric" },
      {
        name: "2 oz Metabolism Boost",
        price: "$4.99",
        desc: "Apple cider vinegar, honey, lemon",
      },
      {
        name: "2 oz Make It Light Ginger Shot",
        price: "$4.99",
        desc: "Ginger, lemon, pineapple",
      },
      {
        name: "Bottled Ginger Shot Package",
        price: "$19.99",
        desc: "5 bottles, keep refrigerated",
      },
    ],
  },
  {
    name: "Fresh Boba Lemonade | Refreshers",
    items: [
      {
        name: "Freshly Squeezed Lemonade",
        price: "$7.00+",
        desc: "All natural, sweetened w/ agave",
      },
      {
        name: "Frozen Lemonade",
        price: "$7.00+",
        desc: "All natural, sweetened w/ agave",
      },
      { name: "Blueberry Lemonade Refresher", price: "$5.49+", desc: "" },
    ],
  },
  {
    name: "New Ice Cream Flavors",
    items: [
      { name: "Chocolate Chip Cookie Dough", price: "$6.25+", desc: "" },
      { name: "Moose Track w/ PB Cups", price: "$6.25+", desc: "" },
      { name: "Mint Chocolate Chip", price: "$6.25+", desc: "" },
      { name: "Cookies N Cream", price: "$6.25+", desc: "" },
      { name: "Vanilla", price: "$4.99+", desc: "" },
      { name: "Chocolate Ice cream", price: "$4.99+", desc: "" },
      { name: "Strawberry Ice cream", price: "$4.99+", desc: "" },
      { name: "Mango Sorbet (Non dairy)", price: "$6.25+", desc: "" },
      { name: "Pumpkin Spice Icecream", price: "$6.25+", desc: "" },
      {
        name: "Vegan Chocolate Icecream",
        price: "$7.29",
        desc: "New vegan chocolate creamy ice cream",
      },
    ],
  },
  {
    name: "Crepe & Waffle Menu (vegan options)",
    items: [
      { name: "Create Your Own Crepe", price: "$9.99", desc: "" },
      {
        name: "Strawberry Kiss Crepe",
        price: "$11.99",
        desc: "Crepes w/ strawberry, banana, Nutella, powdered sugar",
      },
      {
        name: "Dulce de leche Crepe",
        price: "$11.99",
        desc: "Cinnamon sugar, dulce de leche, banana",
      },
      {
        name: "Vegan Ibiza Waffle",
        price: "$12.99",
        desc: "Vegan waffle topped w/ strawberry, blueberry, honey",
      },
      {
        name: "Original Ibiza Waffle",
        price: "$12.99",
        desc: "Best Seller. Powdered sugar, strawberry, blueberry, chocolate syrup",
      },
      {
        name: "Strawberry Kiss Waffle",
        price: "$12.99",
        desc: "Powdered sugar, Nutella, strawberry, banana",
      },
      {
        name: "Biscoff Lotus Crepe",
        price: "$11.99",
        desc: "Banana, biscoff sauce, white chocolate chips, chocolate sauce",
      },
      {
        name: "Choco Butter Protein Waffle",
        price: "$12.99",
        desc: "~22g protein, banana, peanut butter",
      },
      { name: "Turkey & Cheese Crepe", price: "$12.99", desc: "" },
      {
        name: "Egg and cheese Crepe",
        price: "$10.99",
        desc: "2 scrambled eggs, cheddar & mozz blend",
      },
    ],
  },
  {
    name: "Croissants & Baked Goods",
    items: [
      { name: "Plain Croissant", price: "$2.99", desc: "" },
      { name: "Banana Nut Bread", price: "$3.95", desc: "Moist & delicious" },
      { name: "Nutella Croissant", price: "$3.99", desc: "" },
      { name: "Banana Nutella Croissant", price: "$4.79", desc: "" },
      { name: "Turkey and Provolone Croissant", price: "$5.99", desc: "" },
      { name: "Spinach and Cheese Croissant", price: "$4.99", desc: "" },
      {
        name: "Pesto Burrata Croissant",
        price: "$8.99",
        desc: "Croissant w/ pesto, burrata, tomato, balsamic",
      },
      { name: "Tiramisu Cheesecake", price: "$5.99", desc: "" },
      { name: "Cheescake", price: "$5.99", desc: "" },
    ],
  },
  {
    name: "Tacos & Quesadillas",
    items: [
      {
        name: "Choose any 3 tacos",
        price: "$10.99",
        desc: "Pick any 3 from only 10.99",
      },
      {
        name: "Chicken Quesadilla",
        price: "$13.99",
        desc: "Signature grilled chicken, cheese, sour cream, salsa, guac",
      },
      {
        name: "Beef Carnita Quesadilla",
        price: "$14.99",
        desc: "Slow cooked beef carnita, cheese, side of salsa, guac, sour cream",
      },
      {
        name: "Vegan Smashed Buffalo Chickpea Quesadilla",
        price: "$11.99",
        desc: "Buffalo chickpea, vegan cheese, tomato, avocado, pickled onion",
      },
    ],
  },
  {
    name: "Signature Sandwiches",
    items: [
      { name: "Create your own sandwich", price: "$11.99", desc: "" },
      {
        name: "Veggie Wrap",
        price: "$9.99",
        desc: "Hummus, carrot, pickled onion, cucumber, lettuce, avocado, tomato",
      },
      {
        name: "New Crunchy Shrimp Wrap",
        price: "$13.99",
        desc: "Honey battered shrimp tossed in signature sauce, pickled onion",
      },
      {
        name: "Thai Chicken Wrap",
        price: "$11.99",
        desc: "Grilled chicken, Thai peanut sauce, carrots, lettuce, peanut",
      },
      {
        name: "Grilled Chicken Wrap",
        price: "$11.99+",
        desc: "Romaine, tomato, onion, mayo",
      },
      {
        name: "Crispy Chicken Cutlet Wrap",
        price: "$11.99+",
        desc: "Romaine, tomato, onion, mayo",
      },
      {
        name: "Chipotle Avocado Wrap",
        price: "$11.99+",
        desc: "Grilled chicken, chipotle mayo, mozz, tomato, romaine, avocado",
      },
      {
        name: "Pesto Turkey Panini",
        price: "$12.99",
        desc: "Turkey, pesto, mozzarella, tomato, spinach",
      },
      {
        name: "Avocado Spice Panini",
        price: "$12.99",
        desc: "Grilled chicken, chipotle mayo, spinach, provolone, avocado",
      },
      {
        name: "Hummus Vegan Panini",
        price: "$11.99",
        desc: "Hummus, avocado, tomato, spinach, pickled onion",
      },
      {
        name: "Carnita Playa",
        price: "$13.99",
        desc: "Slow roasted beef carnita, sweet plantains, jalapeño, cheese, avocado crema",
      },
      {
        name: "Crispy Buffalo Chicken Ranch Wrap",
        price: "$11.99+",
        desc: "Melted mozz, romaine, ranch drizzle",
      },
      {
        name: "Honey Garlic Kick",
        price: "$11.99",
        desc: "Grilled chicken, honey garlic sauce, carrots, pickled onion, cucumber, lettuce",
      },
      {
        name: "Crispy Ranch Wrap",
        price: "$13.98+",
        desc: "Crispy chicken, ranch, turkey bacon, lettuce",
      },
      {
        name: "Turkey Melt Panini",
        price: "$11.99",
        desc: "Smoked turkey, provolone, spinach, honey mustard",
      },
      {
        name: "NEW Roma Panini",
        price: "$14.99",
        desc: "Oven roasted turkey, burrata, tomato, pesto, balsamic, spinach",
      },
      {
        name: "Tuna Melt Panini",
        price: "$11.99",
        desc: "House made tuna salad w/ onions, cheddar cheese",
      },
    ],
  },
  {
    name: "Signature Salads & Toasts",
    items: [
      { name: "Build Your Own Salad", price: "$11.99", desc: "" },
      { name: "Garden Salad", price: "$10.99", desc: "Green pepper, cucumber, tomato, onion, italian dressing" },
      { name: "Romaine Caesar", price: "$10.99", desc: "Romaine w/ parmesan, croutons, caesar dressing" },
      {
        name: "Greek Salad",
        price: "$13.99",
        desc: "Romaine, tomato, onion, green pepper, olive, cucumber, feta",
      },
      {
        name: "Thai Crunch Salad",
        price: "$15.99",
        desc: "Romaine, crispy chicken, cilantro, kale, wontons, peanut dressing",
      },
      {
        name: "Avocado Toast",
        price: "$11.99",
        desc: "Smashed avocado on two multigrain bread w/ tomato",
      },
      {
        name: "Peanut Butter Toast",
        price: "$4.99+",
        desc: "PB w/ banana & honey",
      },
      {
        name: "Almond Butter Toast",
        price: "$4.95+",
        desc: "Almond butter, banana, chia seeds, honey",
      },
      {
        name: "Ibiza Dreams Toast",
        price: "$4.95+",
        desc: "Strawberry & banana w/ Nutella spread on multigrain",
      },
    ],
  },
  {
    name: "Side order & Homemade Soups",
    items: [
      { name: "Sweet Plantain", price: "$5.29", desc: "" },
      { name: "Lentil Soup", price: "$6.99", desc: "Turkish red lentil soup" },
      { name: "Chicken Noodle Soup", price: "$8.99", desc: "" },
    ],
  },
  {
    name: "Fruit Cup & Parfaits",
    items: [
      { name: "Build your own parfait", price: "$4.95+", desc: "" },
      {
        name: "Sweet Berry Parfait",
        price: "$5.95",
        desc: "Greek yogurt, granola, strawberries, blueberries, honey",
      },
      {
        name: "Apple Cinna Parfait",
        price: "$5.95",
        desc: "Greek yogurt, apple, cranberries, cinnamon, honey",
      },
      {
        name: "PB & Protein Parfait",
        price: "$8.99",
        desc: "Greek yogurt w/ protein, peanut butter, banana, granola",
      },
      {
        name: "Mixed Fruit",
        price: "$5.95",
        desc: "Strawberry, blueberry, pineapple",
      },
      {
        name: "Pineapple Fruit cup",
        price: "$4.99",
        desc: "12 oz",
      },
    ],
  },
  {
    name: "Bottled Beverages",
    items: [
      { name: "Health Ade Kombucha", price: "$5.99", desc: "Health Ade Kombucha" },
      { name: "Kevita Kombucha", price: "$5.99", desc: "Pineapple Peach" },
      { name: "Humm Kombucha", price: "$5.99", desc: "" },
      { name: "Bai", price: "$3.25", desc: "" },
      { name: "Bottled Water", price: "$2.29", desc: "" },
    ],
  },
  {
    name: "Sides Sauce",
    items: [
      { name: "House Chipotle Sauce", price: "$0.69", desc: "" },
      { name: "Avocado Crema", price: "$0.69", desc: "" },
      { name: "Green Salsa", price: "$0.69", desc: "" },
      { name: "Red Salsa", price: "$0.69", desc: "" },
      { name: "Honey Garlic Sauce", price: "$0.69", desc: "" },
      { name: "Ranch Sauce", price: "$0.69", desc: "" },
    ],
  },
];

/** 
 * 2) RENDER THE PAGE 
 *    - Loop through each category, then loop through that category's items.
 *    - Display them in a 3-column Tailwind grid.
 */
export default function FullMenu() {
  return (
    <main className="bg-gradient-to-b from-[#FFFBE8] to-[#FFF8E0] min-h-screen text-black px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      {menuCategories.map((cat) => (
        <section key={cat.name} className="max-w-7xl mx-auto mb-16">
          {/* Category Title */}
          <div className="relative mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 inline-block">
              {cat.name}
            </h2>
            <div className="absolute bottom-0 left-0 w-32 h-1 bg-orange-500 rounded-full mt-2"></div>
          </div>

          {/* Items Grid (3 columns on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.items.map((item) => (
              <div 
                key={item.name} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex-grow">
                    {item.name}
                  </h3>
                  {item.price && (
                    <p className="text-orange-600 font-bold ml-4 whitespace-nowrap">
                      {item.price}
                    </p>
                  )}
                </div>
                {item.desc && (
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
