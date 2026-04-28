class ExampleSelector {

    _getReducer = (state) => {
        return state.exampleReducer;
    }

    select = (state) => {
        return this._getReducer(state).data;
    }

    selectLoading = (state) => {
        return this._getReducer(state).isLoading;
    }

}

export default new ExampleSelector();