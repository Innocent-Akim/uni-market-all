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
            
            const { id, email,companyId,succursaleId,storeId,depositId } = user;
            if (!id || !email) {
                throw new Error('User id and email are required to generate JWT.');
            }
            const payload: JwtPayload = { id, email, companyId,succursaleId,storeId,depositId};
            return this.jwtService.sign(payload, {
                secret: process.env.JWT_SECRET,
                expiresIn: '1h', 
            });
        } catch (error) {
            console.error('Error generating auth token:', error);
            throw new Error('Could not generate auth token.');
        }
    }

    //     exception(status:HttpStatus) {
    //         switch(status){
    //             case 200:
    //                 throw new BadRequestException()



    //         }


    //         throw new UnauthorizedException()
    //         throw new NotFoundException()
    //         throw new ForbiddenException()
    //         throw new NotAcceptableException()
    //         throw new RequestTimeoutException()
    //         throw new ConflictException()
    //         throw new GoneException()
    //         throw new HttpVersionNotSupportedException()
    //         throw new PayloadTooLargeException()
    //         throw new UnsupportedMediaTypeException()
    //         throw new UnprocessableEntityException()
    //         throw new InternalServerErrorException()
    //         throw new NotImplementedException()
    //         throw new ImATeapotException()
    //         throw new MethodNotAllowedException()
    //         throw new BadGatewayException()
    //         throw new ServiceUnavailableException()
    //         throw new GatewayTimeoutException()
    //         throw new PreconditionFailedException()

    //     }

}


