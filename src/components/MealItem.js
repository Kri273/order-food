import Button from "./UI/Button"
import { useContext } from "react";
import CartContext from "../store/CartContext";

const MealItem = ({ meal }) => {
    const { addItem } = useContext(CartContext);

    const addToCartHandler = () => {
        addItem({ id: meal.id, name: meal.name, price: meal.price });
    };

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${meal.image}`)} alt={meal.name}/>
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p>
                    <Button onClick={addToCartHandler}>Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem