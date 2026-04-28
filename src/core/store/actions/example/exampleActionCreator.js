import ExampleActionTypes from "./exampleActionTypes";

export const getExampleData = (payload) => ({
    type: ExampleActionTypes.GET_EXAMPLE_DATA,
    payload,
});

export const saveExampleData = (payload) => ({
    type: ExampleActionTypes.SAVE_EXAMPLE_DATA,
    payload,
});

export const saveExampleLoading = (payload) => ({
    type: ExampleActionTypes.SAVE_EXAMPLE_LOADING,
    payload,
});