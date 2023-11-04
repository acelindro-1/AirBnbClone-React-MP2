import { CHANGE_AUTH, CHANGE_TITLE, CHANGE_REG_HOME, CHANGE_CAT, CHANGE_IMG, CHANGE_PRICE, CHANGE_LIST, CHANGE_FILTER } from "./authStat";

export const handleAuthChange = (payload) => ({
    type: CHANGE_AUTH,
    payload,
})

export const handleTitleChange = (payload) => ({
    type: CHANGE_TITLE,
    payload,
})

export const handleRegHomeChange = (payload) => ({
    type: CHANGE_REG_HOME,
    payload,
})

export const handleCatChange = (payload) => ({
    type: CHANGE_CAT,
    payload,
})

export const handleImgChange = (payload) => ({
    type: CHANGE_IMG,
    payload,
})

export const handlePriceChange = (payload) => ({
    type: CHANGE_PRICE,
    payload,
})

export const handleListChange = (payload) => ({
    type: CHANGE_LIST,
    payload,
})

export const handleFilterChange = (payload) => ({
    type: CHANGE_FILTER,
    payload,
})