import DISHES from './../data/dishes';
import COMMENTS from './../data/comments';

const intialstate = {
    dishes : DISHES,
    comment : COMMENTS
}

export const Reducer = (state = intialstate , action) => {
    return state;
}