class ObjectHelper {

    isEmpty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    getValidValue(item, propPath, defaultValue = "", pathSplitChar = '.') {
        if (item == null || !propPath)
            return defaultValue;

        const keys = propPath.toString().split(pathSplitChar);
        for (let index = 0; index < keys.length; index++) {
            let key = keys[index];
            if ((item[key] === undefined || item[key] === null) && item[key] !== 0)
                return defaultValue;
            item = item[key];
        }

        return item;
    }

    toArray = (obj, itemBuilder = (key, val) => val) => {
        if (!obj) return null;

        return Object.keys(obj).reduce((accumulator, key) => {
            accumulator.push(itemBuilder(key, obj[key]));
            return accumulator;
        }, []);
    };
}

export default new ObjectHelper();