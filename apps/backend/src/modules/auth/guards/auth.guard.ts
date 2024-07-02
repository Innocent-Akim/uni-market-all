import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from 'rxjs';
import { Request } from 'express'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { } 
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req:Request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(req);
        if (!token) {
            throw new UnauthorizedException()
        } 
        try {
            const payload = this.jwtService.verify(token);
            req['user']=payload;
        } catch (error) {
            throw new UnauthorizedException()
        }
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        return request.headers.authorization.split(' ')[1]
    }
}