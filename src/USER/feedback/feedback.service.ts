import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';


@Injectable()
export class FeedbackService {
  create(createFeedbackDto: CreateFeedbackDto) {
    return 'This action adds a new feedback';
  }

  findAll() {
    return `This action returns all feedback`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feedback`;
  }



  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
