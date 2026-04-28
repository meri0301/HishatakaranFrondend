import ObjectHelper from "./objectHelper.js";

class ArrayHelper {

    #isContain(searchValueArray, text) {
        text = text?.toLowerCase();
        if (!text) return false;
        let result = true;

        for (let ix = 0; ix < searchValueArray.length; ++ix) {
            if (text.indexOf(searchValueArray[ix].trim().toLowerCase()) === -1)
                result = false;
            text = text.replace(searchValueArray[ix].trim().toLowerCase(), "");
        }
        return result;
    }

    search(arr, searchText, valueExtractor, exact) {
        if (!Array.isArray(arr)) return [];
        if (!searchText) return arr;

        if (exact) {
            return arr.filter(item => {
                const val = valueExtractor(item);
                return val.slice(0, searchText.length).toLowerCase() === searchText.toLowerCase();
            })
        }

        const searchTextArray = searchText.split(' ');
        const highPriority = [];
        const lowPriority = [];

        arr.forEach(item => {
            const val = valueExtractor(item)?.toString();
            if (this.#isContain(searchTextArray, val)) {
                if (val.slice(0, searchText.length).toLowerCase() === searchText.toLowerCase())
                    highPriority.push(item);
                else
                    lowPriority.push(item);
            }
        })

        return [...highPriority, ...lowPriority];
    }

    isEmpty(array) {
        return !array || !Array.isArray(array) || array.length === 0;
    }

    toObject = (arr, keySelector, valueSelector = (x) => x) => {
        return arr.reduce((accumulator, item) => {
            accumulator[keySelector(item)] = valueSelector(item);
            return accumulator
        }, {});
    };

    sort = (arr, sortBy, sortingType) => {
        if (!Array.isArray(arr) || !sortBy) return;
        sortingType = +sortingType ?? 1;

        arr.sort((item1, item2) => {
            const firstItem = typeof sortBy === 'function' ? sortBy(item1) : ObjectHelper.getValidValue(item1, sortBy, undefined);
            const secondItem = typeof sortBy === 'function' ? sortBy(item2) : ObjectHelper.getValidValue(item2, sortBy, undefined)

            return sortingType * (+(firstItem > secondItem) || +(firstItem === secondItem) - 1);
        });
    }

}

export default new ArrayHelper();