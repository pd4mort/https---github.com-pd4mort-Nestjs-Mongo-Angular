import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Config document swagger
  const options = new DocumentBuilder() 
    .setTitle('Users REST API')
    .setDescription('API REST MongoDB')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options); 

  // Swagger
  SwaggerModule.setup('docs', app, document); 

  await app.listen(3000);
}
bootstrap();