import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { userEntity } from '../registration/entities/registration.entity';
import { feedbackEntity } from './entities/feedback.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([userEntity, feedbackEntity])],
  controllers: [FeedbackController],
  providers: [FeedbackService]
})
export class FeedbackModule {}
