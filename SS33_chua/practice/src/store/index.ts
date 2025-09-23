import { createStore } from "redux";

// State kiểu
type CartItem = {
    id: number;
    name: string;
    price: number;
    img: string;
    desc: string;
    qty: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

// Action types
const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_QTY = "UPDATE_QTY";
const REMOVE_ITEM = "REMOVE_ITEM";

// Reducer
function cartReducer(state = initialState, action: any): CartState {
    switch (action.type) {
        case ADD_TO_CART:
            const exist = state.items.find((i) => i.id === action.payload.id);
            if (exist) {
                return {
                    ...state,
                    items: state.items.map((i) =>
                        i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
                    ),
                };
            }
            return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };

        case UPDATE_QTY:
            return {
                ...state,
                items: state.items.map((i) =>
                    i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
                ),
            };

        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((i) => i.id !== action.payload),
            };

        default:
            return state;
    }
}

// Store
export const store = createStore(cartReducer);

// Action creators
export const addToCart = (product: Omit<CartItem, "qty">) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const updateQty = (id: number, qty: number) => ({
    type: UPDATE_QTY,
    payload: { id, qty },
});

export const removeItem = (id: number) => ({
    type: REMOVE_ITEM,
    payload: id,
});

export type RootState = ReturnType<typeof cartReducer>;
