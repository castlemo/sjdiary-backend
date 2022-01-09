import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { passportJwtSecret } from 'jwks-rsa';

import { AUTH0 } from '../common/constants';
import { IAuth0 } from '../config/config.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    const auth0Config: IAuth0 = configService.get(AUTH0);

    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${auth0Config.domain}/.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: `https://${auth0Config.audience}`,
      issuer: `https://${auth0Config.domain}/`,
      algorithms: ['RS256'],
    });
  }

  validate(payload: any) {
    return payload;
  }
}
