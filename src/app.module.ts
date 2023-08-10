import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './USER/user.module';


@Module({
  imports: [UserModule,TypeOrmModule.forRoot(
    { type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'root',
     database: 'Game',
     autoLoadEntities: true,
     synchronize: true,
   }
   ),],
  controllers: [],
  providers: [],
})
export class AppModule {}
