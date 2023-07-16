import { ADD, DELETE } from "./actionType";

const initialState = []

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD:

            return [...state,
            { ...action.payload }

            ]
        case DELETE:

            return [...(state.filter(d => d.id !== action.payload))];

        default:
            return state;
    }

}

export default reducer;