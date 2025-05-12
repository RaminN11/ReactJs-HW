import { nanoid } from '@reduxjs/toolkit';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const TOGGLE_AVAILABILITY = 'TOGGLE_AVAILABILITY';

export const addProduct = ({ name, description, price, available }) => ({
    type: ADD_PRODUCT,
    payload: {
        id: nanoid(),
        name,
        description,
        price: parseFloat(price),
        available
    },
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
});

export const updateProduct = ({ id, name, description, price, available }) => ({
    type: UPDATE_PRODUCT,
    payload: {
        id,
        name,
        description,
        price: parseFloat(price),
        available,
    },
});

export const toggleAvailbility = (id) => ({
    type: TOGGLE_AVAILABILITY,
    payload: id,
});