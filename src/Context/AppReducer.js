const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_LIST':
            return {
                ...state,
                favProductsList: [action.payload, ...state.favProductsList]

            }

        case 'REMOVE_PRODUCT_FROM_LIST':
            return {
                ...state,
                favProductsList: [...state.favProductsList.filter(product => product.id !== action.payload)]
            }
        default:
            return state
    }
}

export default AppReducer