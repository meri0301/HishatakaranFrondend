import {NetworkConstants} from "../../../constants/index.js";
import BaseException from "./baseException.js";

class MethodNotAllowedException extends BaseException {

    handleRequest = function (request) {
        if (request.req_status === 405) {
            return {
                type: 'error',
                title: 'Error',
                error_code: 405,
                error_message: request.Message || NetworkConstants.errors.METHOD_NOT_ALLOWED,
            };
        }
        return this.next.handleRequest(request);
    }
}

export default MethodNotAllowedException;
