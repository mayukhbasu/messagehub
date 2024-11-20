import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AppController],
  providers: [AppService, JwtAuthGuard, JwtService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

export function LoggerMiddleware(req: any, res: any, next: () => void) {
  const logger = new Logger('HTTP');
  logger.log(`${req.method} ${req.url}`);
  res.on('finish', () => {
    logger.log(`Response: ${res.statusCode}`);
  });
  next();
}
