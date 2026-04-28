import {NetworkConstants} from "../../../constants/index.js";
import BaseException from "./baseException.js";

class NotFoundException extends BaseException {

    handleRequest = function (request) {
        if (request.req_status === 404) {
            return {
                type: 'error',
                title: 'Error',
                error_code: 404,
                error_message: request.Message || NetworkConstants.errors.NOT_FOUND,
            };
        }
        return this.next.handleRequest(request);
    }
}

export default NotFoundException;
