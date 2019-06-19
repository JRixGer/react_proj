import products from './products';

const SET_ACCOUNT = 'uq/account/SET_ACCOUNT';
const RESET_ACCOUNT = 'uq/account/RESET_ACCOUNT';
const ADD_CART = 'uq/account/ADD_CART';
const ADD_NOTIFICATION = 'uq/account/ADD_NOTIFICATION';
const UPDATE_CART = 'uq/account/UPDATE_CART';
const CLEAR_CART = 'uq/account/CLEAR_CART';
const REMOVE_ITEM_CART = 'uq/account/REMOVE_ITEM_CART';

const initialState = {
  user: null,
  cart: [],
  products,
  notifications: []
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_ACCOUNT: {
      return { ...state, user: payload };
    }
    case RESET_ACCOUNT:
      return { ...state, user: null };

    case ADD_CART:
      return { ...state, cart: [...state.cart, { ...payload }] };
    
    case UPDATE_CART:
      return { ...state, cart: [...state.cart.filter(i => i.id !== payload.id), { ...payload.item }] };
    
    case CLEAR_CART:
      return { ...state, cart: [] };
    
    case REMOVE_ITEM_CART: {
      return { ...state, cart: [...state.cart.filter(i => i.id !== payload.id)] };
    }
    
    case ADD_NOTIFICATION:
      return { ...state, notifications: [...state.notifications, { ...payload }] };

    default:
      return state;
  }
};
