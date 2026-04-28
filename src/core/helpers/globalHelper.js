class GlobalHelper {
    isNullOrUndefined(value) {
        return value === null || value === undefined;
    }

    ensureUrl(str) {
        const newPart = "/*/";
        const oldPart = "://";
        let tempUrl = str.replace(oldPart, newPart);


        if (!tempUrl)
            throw new Error("invalid argument, url must have more then 1 character");

        let url = '';
        url = url.concat(tempUrl[0]);

        let urlLastIndex = 0;

        for (let i = 1; i < tempUrl.length; i++) {
            if (tempUrl[i] === '/' && url[urlLastIndex] === '/')
                continue;
            url = url.concat(tempUrl[i]);
            urlLastIndex++;
        }

        return url.replace(newPart, oldPart);
    }

}

export default new GlobalHelper();