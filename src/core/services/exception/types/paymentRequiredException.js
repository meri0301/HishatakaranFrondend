import BaseException from "./baseException.js";
import {NetworkConstants} from "../../../constants/index.js";

class PaymentRequiredException extends BaseException {

    handleRequest = function (request) {
        if (request.req_status === 402) {
            return {
                type: 'error',
                title: 'Error',
                error_code: 402,
                error_message: request.Message || NetworkConstants.errors.PAYMENT_REQUIRED,
            };
        }
        return this.next.handleRequest(request);
    }
}

export default PaymentRequiredException;