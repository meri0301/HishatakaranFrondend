import BaseException from "./baseException.js";
import {NetworkConstants} from "../../../constants/index.js";

class PermissionDeniedException extends BaseException {

    handleRequest = function (request) {
        if (request.req_status === 403) {
            return {
                type: 'error',
                title: 'Error',
                error_code: 403,
                error_message: request.Message || NetworkConstants.errors.PERMISSION_DENIED,
            };
        }
        return this.next.handleRequest(request);
    }
}

export default PermissionDeniedException;
