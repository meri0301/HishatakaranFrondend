import BaseException from "./baseException.js";
import {NetworkConstants} from "../../../constants/index.js";

class ValidationFieldException extends BaseException {

    handleRequest = function (request) {
        if (request.req_status === 422) {
            return {
                type: 'error',
                title: 'Error',
                error_code: 422,
                error_message: request.Message || NetworkConstants.errors.VALIDATION_FIELD,
            };
        }
        return this.next.handleRequest(request);
    }
}

export default ValidationFieldException;
