import * as types from './../constants/ActionType'

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product: {
            id: 1,
            name: 'iPhone 7 Plus',
            image: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600.jpg',
            description: 'Sản phẩm do Apple Mỹ sản xuất',
            price: 300,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 3,
            name: 'iPhone XS Max',
            image: 'https://imgs.viettelstore.vn/images/Product/ProductImage/medium/Xs.jpg',
            description: 'Sản phẩm do Apple Nhật Bản sản xuất',
            price: 500,
            inventory: 20,
            rating: 4
        },
        quantity: 3
    }
];

const cart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return [...state]
        default: return [...state]
    }
}

export default cart;