export class AuthenticationError extends Error {
    constructor(message) {
        super(message || 'Unauthorized');
        this.name = 'AuthenticationError';
        Error.captureStackTrace(this, AuthenticationError);
    }
}

export class NotFoundError extends Error {
    constructor(message) {
        super(message || 'Not Found');
        this.name = 'NotFoundError';
        Error.captureStackTrace(this, NotFoundError);
    }
}

export class MalformedIncomingPayloadError extends Error {
    constructor(message) {
        super(`Provided SNS Payload is malformed, ${message}`);
        this.name = 'MalformedIncomingPayloadError';
        Error.captureStackTrace(this, NotFoundError);
    }
}
