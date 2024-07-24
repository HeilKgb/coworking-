import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function configSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle("Coworking - Estudo Nest")
    .setDescription(
      "Backend Coworking - Estudo Nest"
    )
    .setVersion("1.0")
    .build()

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);
}