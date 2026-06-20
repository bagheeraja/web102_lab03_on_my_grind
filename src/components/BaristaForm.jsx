import { useState } from "react";
const BaristaForm = () => {

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': '',
    });

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const onNewDrink = () => {

    }

    const onCheckAnswer = () => {

    }

    return (
        <div>
            <h2>Hi, I'd like to order:</h2>

            <form>

            </form>
            <button 
                className="button submit"  
                onClick={onCheckAnswer}>
                    Check Answer
            </button>

            <button 
                className="button submit" 
                onClick={onNewDrink}>
                    New Drink
            </button>
        </div>
    )

}

export default BaristaForm;