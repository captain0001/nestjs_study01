import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_PIPE } from '@nestjs/core';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //     return {
    //       // postgreSQL利用の場合
    //       type: 'postgres',
    //       host: config.get<string>('DATABASE_HOST'),
    //       port: +config.get<string>('DATABASE_PORT'),
    //       username: config.get<string>('DATABASE_USER'),
    //       password: config.get<string>('pass12'),
    //       database: config.get<string>('DATABASE_NAME'),
    //       entities: [
    //         // Entitiesを記載
    //       ],
    //       synchronize: true,
    //     };
    //   },
    // }),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // テストしやすいようにmain.tsから分離
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
