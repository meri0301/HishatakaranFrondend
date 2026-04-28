import BaseException from './baseException.js';
import {NetworkConstants} from "../../../constants/index.js";

class BadRequestException extends BaseException {

    handleRequest = function (request) {
        if (request.req_status === 400) {
            return {
                type: 'error',
                title: 'Error',
                error_code: 400,
                error_message: request.Message || NetworkConstants.errors.BAD_REQUEST,
            };
        }

        return this.next.handleRequest(request);
    }
}

export default BadRequestException;
