import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishID, rating, author,comment ) => ({
    
    type: ActionTypes.ADD_COMMENT,
    payload:{
        dishID: dishID,
        rating:rating,
        author: author,
        comment:comment
    }

}); 

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (ermess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: ermess
    
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});