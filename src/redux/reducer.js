import { CHANGE_AUTH, CHANGE_TITLE, CHANGE_REG_HOME, CHANGE_CAT,  CHANGE_IMG, CHANGE_PRICE, CHANGE_LIST, CHANGE_FILTER } from "./authStat";
const initialState = {
    isOpen: false,
    title: "",
    regHome: "category",
    category: "Beach",
    img: "../../src/assets/images/arctic.jpg",
    price: "Php 0.00",
    list: [],
    filter:""
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_AUTH:
            return {
                ...state,
                isOpen: action.payload
            }

        case CHANGE_TITLE:
            return {
                ...state,
                title: action.payload
            }

        case CHANGE_REG_HOME:
            return {
                ...state,
                regHome: action.payload
            }

        case CHANGE_CAT:
            return {
                ...state,
                category: action.payload
            }    

        case CHANGE_IMG:
            return {
                ...state,
                img: action.payload
            }    

        case CHANGE_PRICE:
            return {
                ...state,
                price: action.payload
            }        

        case CHANGE_LIST:
            return {
                ...state,
                list: action.payload
            }       

        case CHANGE_FILTER:
            return {
                ...state,
                filter: action.payload
            }       

        default:
            return state;
    }
}
export default reducer;