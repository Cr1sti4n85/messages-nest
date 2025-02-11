import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages') //class decorator
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}
  @Get() //method decorator
  listMessages() {
    return this.messageService.findall();
  }

  @Post()
  createMessage(@Body() /*argument decorator*/ body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }
}
