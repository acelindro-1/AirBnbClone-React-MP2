import { CHANGE_AUTH, CHANGE_TITLE, CHANGE_REG_HOME } from "./authStat";
const initialState = {
    isOpen: false,
    title: "",
    regHome: "category"
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

        default:
            return state;
    }
}
export default reducer;