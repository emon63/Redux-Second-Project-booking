import { ADD, DELETE } from "./actionType"

export const add = (value) => {
    return {
        type: ADD,
        payload: value,
    }
}
export const remove = (id) => {
    return {
        type: DELETE,
        payload: id,
    }
}