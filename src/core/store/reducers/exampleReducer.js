const initialState = {
    data: [],
    isLoading: false,
}

const ExampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EXAMPLE_ACTION":
            return {
                ...state,
                data: [...action.payload.data],
                isLoading: action.payload.isLoading,
            };
        default:
            return state;
    }
}

export default ExampleReducer;