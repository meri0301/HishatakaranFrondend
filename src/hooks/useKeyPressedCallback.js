import {useEffect} from 'react';
import PropTypes from 'prop-types';

function useKeyPressedCallback({
                                   configs,
                                   deps,
                                   addingListenerPredicate = () => true,
                               }) {

    const validDeps = deps || [];


    useEffect(() => {
        if (!addingListenerPredicate())
            return;

        const configObject = configs.reduce((acc, item) => {
            item.keyMap.forEach(key => {
                acc[key] = item.callback;
            });
            return acc;
        }, {});


        const downHandler = (e) => {
            let key = e.key;
            let callback = configObject[key];

            if (callback !== undefined) {
                e.stopPropagation();
                e.preventDefault();
                if (typeof callback === 'function')
                    return callback();
            }
        };
        document.addEventListener("keydown", downHandler);
        return () => {
            document.removeEventListener("keydown", downHandler);
        };
    }, validDeps);
}

useKeyPressedCallback.propTypes = {
    configs: PropTypes.array,
    callback: PropTypes.func
};

export default useKeyPressedCallback;