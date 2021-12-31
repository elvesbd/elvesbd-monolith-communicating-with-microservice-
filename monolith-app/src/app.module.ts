import { Module } from '@nestjs/common';
import { SubscribersModule } from './subscribers/subscribers.module';

@Module({
  imports: [SubscribersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
