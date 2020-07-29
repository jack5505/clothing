import {CartTypes} from './cart.types'


const INITIL_STATE =  {
  hidden:true
};

export const cartReducer = (state = INITIL_STATE, action ) =>{

    switch (action.type) {
        case CartTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            };
        default:
            return state;
    }
};

