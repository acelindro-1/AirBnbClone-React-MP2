import { CHANGE_AUTH, CHANGE_TITLE } from "./authStat";
const initialState = {
    isOpen: false,
    title: ""
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

        default:
            return state;
    }
}
export default reducer;