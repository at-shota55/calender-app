import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

export const count = (state = initState, { type, payload }) => {
    switch(type) {
        case INCREMENT: //増加
            return state + payload;
        
        case DECREMENT:　//減少
            return state - payload;

        default :
            return state;
    }
};