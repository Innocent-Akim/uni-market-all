import { BadGatewayException, BadRequestException, ConflictException, ForbiddenException, GatewayTimeoutException, GoneException, HttpStatus, HttpVersionNotSupportedException, ImATeapotException, Injectable, InternalServerErrorException, MethodNotAllowedException, NotAcceptableException, NotFoundException, NotImplementedException, PayloadTooLargeException, PreconditionFailedException, RequestTimeoutException, ServiceUnavailableException, UnauthorizedException, UnprocessableEntityException, UnsupportedMediaTypeException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppHelpers {
    constructor(
        private jwtService:JwtService
    ){}


 
async  getHashPassword(password: string): Promise<string>{
    return await bcrypt.hash(password, 10)
}

async generateAuthToken(userId:string){
   return this.jwtService.sign({userId},{expiresIn:'1h'})
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


