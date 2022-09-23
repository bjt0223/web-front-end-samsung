import React, { useContext } from 'react'
import { any } from 'prop-types';

const CartContext = React.createContext();

export const CartProvider = ({value, children}) => {
    return  <CartContext.Provider value = {value}>{children}</CartContext.Provider>
}

CartProvider.propTypes = {
    value: any,
    children: any
  };

export const useCart = () => {
    const value = useContext(CartContext);
    if (!value) {
        throw new Error('Error!');
    }

    return value;
};