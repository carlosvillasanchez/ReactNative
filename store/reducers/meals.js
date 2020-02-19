import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            // JS method
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId); // -1 or an int
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals]; // COPY the real array
                updatedFavMeals.splice(existingIndex, 1)
                return { ...state, favoriteMeals: updatedFavMeals };
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
            }

        case SET_FILTERS:
            const appliedFilters = action.filters;
            // This JS method returns a new array, does not change the oriinal
            const filteredMeals = state.meals.filter(meal => {
                if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.isVegan && !meal.isVegan) {
                    return false;
                }
                if (appliedFilters.isVegetarian && !meal.isVegetarian) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredMeals: filteredMeals }

        default: // This is reached when the app is created and the store is initialized
            return state
    }
    return state;
}

export default mealsReducer;