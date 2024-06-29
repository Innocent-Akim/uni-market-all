import { BadGatewayException, BadRequestException, ConflictException, ForbiddenException, GatewayTimeoutException, GoneException, HttpStatus, HttpVersionNotSupportedException, ImATeapotException, InternalServerErrorException, MethodNotAllowedException, NotAcceptableException, NotFoundException, NotImplementedException, PayloadTooLargeException, PreconditionFailedException, RequestTimeoutException, ServiceUnavailableException, UnauthorizedException, UnprocessableEntityException, UnsupportedMediaTypeException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

// export class AppHelpers {


 


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

// }


export const  getHashPassword= async(password: string): Promise<string>=> {
    return await bcrypt.hash(password, 10)
}

