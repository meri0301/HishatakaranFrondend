class BaseException {
    next = {
        handleRequest: function () {
        }
    };

    setNext = function(next) {
        this.next = next;
    };

    handleRequest = function () { };
}

export default BaseException;
