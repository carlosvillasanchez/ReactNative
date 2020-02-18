import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            // JS method
            console.log("JEJE", state.favoriteMeals)
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId); // -1 or an int
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals]; // COPY the real array
                updatedFavMeals.splice(existingIndex, 1)
                return { ...state, favoriteMeals: updatedFavMeals };
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
            }

        default: // This is reached when the app is created and the store is initialized
            return state
    }
    return state;
}

export default mealsReducer;