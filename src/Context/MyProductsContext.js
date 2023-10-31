import { createContext, useReducer, useEffect } from "react"
import AppReducer from './AppReducer'

const initialState = {
    favProductsList: localStorage.getItem('favProductsList') ? JSON.parse(localStorage.getItem('favProductsList')) : []
}

const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem('favProductsList', JSON.stringify(state.favProductsList))
    }, [state])


    const addProductToList = productDetails => {
        if (!state.favProductsList.some(product => product.id === productDetails.id)) {
            dispatch({ type: 'ADD_PRODUCT_TO_LIST', payload: productDetails })

        }
        else { }


    }

    const removeProductFromList = productID => {
        dispatch({ type: 'REMOVE_PRODUCT_FROM_LIST', payload: productID })

    }

    return (
        <GlobalContext.Provider value={{ favProductsList: state.favProductsList, addProductToList, removeProductFromList }}>
            {props.children}
        </GlobalContext.Provider>

    )
}

export default GlobalContext