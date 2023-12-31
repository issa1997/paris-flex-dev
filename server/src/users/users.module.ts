import { Logger, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService, Logger],
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  exports: [UsersService],
})
export class UsersModule {}
