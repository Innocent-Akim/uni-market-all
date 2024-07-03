import { BadGatewayException, BadRequestException, ConflictException, ForbiddenException, GatewayTimeoutException, GoneException, HttpStatus, HttpVersionNotSupportedException, ImATeapotException, Injectable, InternalServerErrorException, MethodNotAllowedException, NotAcceptableException, NotFoundException, NotImplementedException, PayloadTooLargeException, PreconditionFailedException, RequestTimeoutException, ServiceUnavailableException, UnauthorizedException, UnprocessableEntityException, UnsupportedMediaTypeException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IGetUser, IUser } from '@uni/contracts';
import * as bcrypt from 'bcrypt';
import { JsonWebTokenError, JwtPayload, sign, verify } from 'jsonwebtoken';

@Injectable()
export class AppHelpers {
    constructor(
        private jwtService: JwtService
    ) { }



    async getHashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10)
    }

    async generateAuthToken(user: Partial<IUser>): Promise<string> {
        try {

            const { id, email, companyId, succursaleId, storeId, depositId } = user;
            if (!id || !email) {
                throw new Error('User id and email are required to generate JWT.');
            }
            const payload: JwtPayload = { id, email, companyId, succursaleId, storeId, depositId };
            return this.jwtService.sign(payload, {
                secret: process.env.JWT_SECRET,
                expiresIn: '1h',
            });
        } catch (error) {
            console.error('Error generating auth token:', error);
            throw new Error('Could not generate auth token.');
        }
    }

    async handleException(httpStatusCode: HttpStatus) {
        switch (httpStatusCode) {
            case 400:
                throw new BadRequestException("Bad Request: The server could not understand the request due to invalid syntax.");
            case 401:
                throw new UnauthorizedException("Unauthorized: The client must authenticate itself to get the requested response.");
            case 403:
                throw new ForbiddenException("Forbidden: The client does not have access rights to the content.");
            case 404:
                throw new NotFoundException("Not Found: The server can not find the requested resource.");
            case 406:
                throw new NotAcceptableException("Not Acceptable: The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers.");
            case 408:
                throw new RequestTimeoutException("Request Timeout: The server timed out waiting for the request.");
            case 409:
                throw new ConflictException("Conflict: The request could not be completed due to a conflict with the current state of the target resource.");
            case 410:
                throw new GoneException("Gone: The requested resource is no longer available and will not be available again.");
            case 413:
                throw new PayloadTooLargeException("Payload Too Large: The request entity is larger than limits defined by the server.");
            case 415:
                throw new UnsupportedMediaTypeException("Unsupported Media Type: The media format of the requested data is not supported by the server.");
            case 422:
                throw new UnprocessableEntityException("Unprocessable Entity: The request was well-formed but was unable to be followed due to semantic errors.");
            case 500:
                throw new InternalServerErrorException("Internal Server Error: The server has encountered a situation it doesn't know how to handle.");
            case 501:
                throw new NotImplementedException("Not Implemented: The request method is not supported by the server and cannot be handled.");
            case 502:
                throw new BadGatewayException("Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.");
            case 503:
                throw new ServiceUnavailableException("Service Unavailable: The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.");
            case 504:
                throw new GatewayTimeoutException("Gateway Timeout: The server is acting as a gateway and cannot get a response in time.");
            case 505:
                throw new HttpVersionNotSupportedException("HTTP Version Not Supported: The HTTP version used in the request is not supported by the server.");
            case 418:
                throw new ImATeapotException("I'm a Teapot: The server refuses the attempt to brew coffee with a teapot.");
            case 405:
                throw new MethodNotAllowedException("Method Not Allowed: The request method is known by the server but is not supported by the target resource.");
        }
    }
}


