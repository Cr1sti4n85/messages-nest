import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages') //class decorator
export class MessagesController {
  constructor(public readonly messageService: MessagesService) {}
  @Get() //method decorator
  listMessages() {
    return this.messageService.findall();
  }

  @Post()
  createMessage(@Body() /*argument decorator*/ body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
