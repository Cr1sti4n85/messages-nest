import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages') //class decorator
export class MessagesController {
  @Get() //method decorator
  listMessages() {
    return 'hi';
  }

  @Post()
  createMessage(@Body() /*argument decorator*/ body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
