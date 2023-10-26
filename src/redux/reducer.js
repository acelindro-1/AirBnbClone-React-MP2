import { CHANGE_AUTH } from "./authStat";
const initialState = {
    isOpen: false
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_AUTH:
            return {
                ...state,
                isOpen: action.payload
            }
        default:
            return state;
    }
}
export default reducer;