import * as Message from './../constants/Message';

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch(action.type) {
        default: return state;
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].product.id === product.id) {
                    index = -1;
                    break;
                }
            }
        }
    return index;
}

export default message;