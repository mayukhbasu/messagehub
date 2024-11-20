import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure session middleware
  app.use(
    session({
      secret: 'your-secret-key', // Replace with a strong secret
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 3600000, // 1 hour
      },
    }),
  );

  // Enable CORS
  app.enableCors({
    origin: '*', // Allow Angular frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Allow cookies and credentials
  });
  

  await app.listen(3000);
}
bootstrap();
