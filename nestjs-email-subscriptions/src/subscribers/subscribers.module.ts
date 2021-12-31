import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscribersController } from './controllers/subscribers.controller';
import { Subscriber } from './entities';
import { SubscribersService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  providers: [SubscribersService],
  controllers: [SubscribersController],
})
export class SubscribersModule {}
