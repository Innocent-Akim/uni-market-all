import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class RefreshTokeJwtGuard extends AuthGuard('jwt-refresh-token'){}