import NotFoundException from "../services/exception/types/notFoundException.js";
import BadRequestException from "../services/exception/types/badRequestException.js";
import InternalException from "../services/exception/types/internalException.js";
import PaymentRequiredException from "../services/exception/types/paymentRequiredException.js";
import PermissionDeniedException from "../services/exception/types/permissionDeniedException.js";
import ValidationFieldException from "../services/exception/types/validationFieldException.js";
import MethodNotAllowedException from "../services/exception/types/methodNotAllowedException.js";
import NetworkService from "../services/networkService/networkService.js";
import exceptionHandlerService from "../services/exception/exceptionHandlerService.js";

const exceptions = [
    new NotFoundException(),
    new BadRequestException(),
    new InternalException(),
    new PaymentRequiredException(),
    new PermissionDeniedException(),
    new ValidationFieldException(),
    new MethodNotAllowedException(),
];

const networkService = new NetworkService(exceptionHandlerService);

export {
    networkService,
    exceptionHandlerService,
};