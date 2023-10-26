import { CHANGE_AUTH } from "./authStat";

export const handleAuthChange = (payload) => ({
    type: CHANGE_AUTH,
    payload,
})