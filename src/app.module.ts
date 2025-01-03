import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { PokemonModule } from "./pokemon/pokemon.module";
import { CommonModule } from "./common/common.module";
import { SeedModule } from "./seed/seed.module";
import { EnviConfiguration } from "./config/app.config";
import { JoiValidationSchema } from "./config/joi.validation";

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[EnviConfiguration],
      validationSchema: JoiValidationSchema
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
    MongooseModule.forRoot(process.env.MONGODB, {
      dbName: 'pokemondb'
    }),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
