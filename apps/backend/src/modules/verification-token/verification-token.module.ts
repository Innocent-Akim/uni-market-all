import { Module } from '@nestjs/common';
import { VerificationTokenController } from './controller/verification-token.controller';
import { VerificationTokenService } from './service/verification-token.service';

@Module({
  controllers: [VerificationTokenController],
  providers: [VerificationTokenService]
})
export class VerificationTokenModule {}
