import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages') //class decorator
export class MessagesController {
  @Get() //method decorator
  listMessages() {
    return 'hi';
  }

  @Post()
  createMessage(@Body() /*argument decorator*/ body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
