import { CHANGE_AUTH, CHANGE_TITLE } from "./authStat";

export const handleAuthChange = (payload) => ({
    type: CHANGE_AUTH,
    payload,
})

export const handleTitleChange = (payload) => ({
    type: CHANGE_TITLE,
    payload,
})