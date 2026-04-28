import {NetworkConstants} from "../../../constants/index.js";
import BaseException from "./baseException.js";

class InternalException extends BaseException {

    handleRequest = function (request) {
        if (request.req_status === 500) {
            return {
                type: 'error',
                title: 'Error',
                error_code: 500,
                error_message: request.Message || NetworkConstants.errors.INTERNAL_ERROR,
            };
        }

        return this.next.handleRequest(request);
    }
}

export default InternalException;