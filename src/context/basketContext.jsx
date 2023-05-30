import { createContext, useReducer } from "react";
import rootReducer from "../reducers";
import { 
    addToBasket, 
    clearBasket, 
    addQtyItem, 
    minusQtyItem, 
    removeFromBasket, 
    setBasketMsgOn, 
    setBasketMsgOff, 
    getBasketTotal,
    addToCheckout,
    removeFromCheckout,
    getCheckoutTotal,
    setCheckoutAll,
    unsetCheckoutAll,
} from "../actions/basketActions";
import { fetchFromLocalStorage } from "../utils/helpers";
import PropTypes from "prop-types";

const initialState = {
basket: fetchFromLocalStorage("basket"),
  itemsCount: 0,
  totalAmount: 0,
  checkoutCount: 0,
  checkoutTotal: 0,
  checkoutAll: false,
  basketMsgStatus: false,
  checkedItemCount: 0,
};

export const BasketContext = createContext({});
export const BasketProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer.basket, initialState);

    const addToCheckout = (itemId) => {
        dispatch({ type: 'ADD_CHECKOUT_ITEM', payload: itemId });
        dispatch({ type: 'INCREMENT_CHECKED_ITEM_COUNT' }); // Increment checkedItemCount
      };
    
      const removeFromCheckout = (itemId) => {
        dispatch({ type: 'REMOVE_CHECKOUT_ITEM', payload: itemId });
        dispatch({ type: 'DECREMENT_CHECKED_ITEM_COUNT' }); // Decrement checkedItemCount
      };

    return (
        <BasketContext.Provider value = {{
            ...state,
            dispatch,
            addToBasket,
            clearBasket,
            addQtyItem,
            minusQtyItem,
            removeFromBasket,
            setBasketMsgOn,
            setBasketMsgOff,
            getBasketTotal,
            addToCheckout,
            removeFromCheckout,
            getCheckoutTotal,
            setCheckoutAll,
            unsetCheckoutAll,
        }}>
            {children}
        </BasketContext.Provider>
    )
}

BasketProvider.propTypes = {
    children: PropTypes.node
}