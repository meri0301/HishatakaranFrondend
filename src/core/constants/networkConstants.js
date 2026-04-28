const NetworkConstants = {

    SERVICE_PATH: 'something',
    REST_API_URL: import.meta.env.API_HOST, //"https://,

    request_methods: {
        GET: 'get',
        POST: 'post',
        PUT: 'put',
        DELETE: 'delete',
        PATCH: 'patch'
    },
    errors: {
        INVALID_REQUEST_PARAMS: 'invalid_request_parameters',
        RESPONSE_PARSING_ERROR: 'response_parsing_error',
        INVALID_RESPONSE_DATA: 'invalid_response_data',
        METHOD_NOT_ALLOWED: 'method_not_allowed',
        VALIDATION_FIELD: 'validation_field',
        PAYMENT_REQUIRED: 'payment_required',
        PERMISSION_DENIED: 'permission_denied',
        INTERNAL_ERROR: 'internal_error',
        TOKEN_EXPIRED: 'token_expired',
        BAD_REQUEST: 'bad_request',
        NO_NETWORK: 'no_network',
        NOT_FOUND: 'Not Found',
        SUCCESS: 'success',
        REJECTED: 'rejected'
    }
}

export default NetworkConstants;