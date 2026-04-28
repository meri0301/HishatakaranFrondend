const apiMiddleware = configs => store => next => action => {
    typeof configs.get(action.type) === 'function'
        ? configs.get(action.type)(store, action)
        : next(action);
};

export default apiMiddleware;