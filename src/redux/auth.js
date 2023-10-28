import { CHANGE_AUTH, CHANGE_TITLE, CHANGE_REG_HOME } from "./authStat";

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