import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <section className="menu">
      <h1>Menu</h1>
      <div className="menu-items">
        <div className="menu-section">
          <h2>Food</h2>
          <ul>
            <li>
              <img src="path/to/salmon.jpg" alt="Grilled Salmon" className="food-icon" />
              <div>
                <h3>Grilled Salmon</h3>
                <p>Delicious grilled salmon served with a side of vegetables.</p>
              </div>
            </li>
            <li>
              <img src="path/to/chicken_alfredo.jpg" alt="Chicken Alfredo" className="food-icon" />
              <div>
                <h3>Chicken Alfredo</h3>
                <p>Creamy Alfredo sauce over tender chicken and pasta.</p>
              </div>
            </li>
            <li>
              <img src="path/to/caesar_salad.jpg" alt="Caesar Salad" className="food-icon" />
              <div>
                <h3>Caesar Salad</h3>
                <p>Fresh romaine lettuce with Caesar dressing and croutons.</p>
              </div>
            </li>
            <li>
              <img src="path/to/margherita_pizza.jpg" alt="Margherita Pizza" className="food-icon" />
              <div>
                <h3>Margherita Pizza</h3>
                <p>Classic pizza with fresh tomatoes, mozzarella, and basil.</p>
              </div>
            </li>
            <li>
              <img src="path/to/beef_tacos.jpg" alt="Beef Tacos" className="food-icon" />
              <div>
                <h3>Beef Tacos</h3>
                <p>Soft tacos filled with seasoned beef, lettuce, and cheese.</p>
              </div>
            </li>
            <li>
              <img src="path/to/vegetable_stir_fry.jpg" alt="Vegetable Stir Fry" className="food-icon" />
              <div>
                <h3>Vegetable Stir Fry</h3>
                <p>Mixed vegetables stir-fried with a savory sauce.</p>
              </div>
            </li>
            <li>
              <img src="path/to/spaghetti_carbonara.jpg" alt="Spaghetti Carbonara" className="food-icon" />
              <div>
                <h3>Spaghetti Carbonara</h3>
                <p>Spaghetti in a creamy sauce with pancetta and Parmesan.</p>
              </div>
            </li>
            <li>
              <img src="path/to/bbq_ribs.jpg" alt="BBQ Ribs" className="food-icon" />
              <div>
                <h3>BBQ Ribs</h3>
                <p>Tender ribs glazed with a tangy BBQ sauce.</p>
              </div>
            </li>
            <li>
              <img src="path/to/cheeseburger.jpg" alt="Cheeseburger" className="food-icon" />
              <div>
                <h3>Cheeseburger</h3>
                <p>Juicy beef patty with melted cheese and fresh toppings.</p>
              </div>
            </li>
            <li>
              <img src="path/to/lobster_bisque.jpg" alt="Lobster Bisque" className="food-icon" />
              <div>
                <h3>Lobster Bisque</h3>
                <p>Rich and creamy lobster bisque with a hint of sherry.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="menu-section">
          <h2>Beverages</h2>
          <ul>
            <li>
              <img src="path/to/lemonade.jpg" alt="Fresh Lemonade" className="beverage-icon" />
              <div>
                <h3>Fresh Lemonade</h3>
                <p>Refreshing lemonade made with fresh lemons.</p>
              </div>
            </li>
            <li>
              <img src="path/to/iced_tea.jpg" alt="Iced Tea" className="beverage-icon" />
              <div>
                <h3>Iced Tea</h3>
                <p>Cool and refreshing iced tea, lightly sweetened.</p>
              </div>
            </li>
            <li>
              <img src="path/to/craft_beer.jpg" alt="Craft Beer" className="beverage-icon" />
              <div>
                <h3>Craft Beer</h3>
                <p>A selection of local craft beers on tap.</p>
              </div>
            </li>
            <li>
              <img src="path/to/red_wine.jpg" alt="Red Wine" className="beverage-icon" />
              <div>
                <h3>Red Wine</h3>
                <p>Full-bodied red wines from renowned vineyards.</p>
              </div>
            </li>
            <li>
              <img src="path/to/white_wine.jpg" alt="White Wine" className="beverage-icon" />
              <div>
                <h3>White Wine</h3>
                <p>Crisp and refreshing white wines.</p>
              </div>
            </li>
            <li>
              <img src="path/to/cocktails.jpg" alt="Cocktails" className="beverage-icon" />
              <div>
                <h3>Cocktails</h3>
                <p>Signature cocktails crafted by our expert bartenders.</p>
              </div>
            </li>
            <li>
              <img src="path/to/espresso.jpg" alt="Espresso" className="beverage-icon" />
              <div>
                <h3>Espresso</h3>
                <p>Rich and intense espresso shots.</p>
              </div>
            </li>
            <li>
              <img src="path/to/cappuccino.jpg" alt="Cappuccino" className="beverage-icon" />
              <div>
                <h3>Cappuccino</h3>
                <p>Creamy cappuccino with a perfect foam top.</p>
              </div>
            </li>
            <li>
              <img src="path/to/green_tea.jpg" alt="Green Tea" className="beverage-icon" />
              <div>
                <h3>Green Tea</h3>
                <p>Soothing green tea with a delicate flavor.</p>
              </div>
            </li>
            <li>
              <img src="path/to/mineral_water.jpg" alt="Mineral Water" className="beverage-icon" />
              <div>
                <h3>Mineral Water</h3>
                <p>Pure mineral water, still or sparkling.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
