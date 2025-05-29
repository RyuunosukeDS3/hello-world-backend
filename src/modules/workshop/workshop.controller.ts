import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';

@Controller('workshop')
export class WorkshopController {
  @Get('devsecops')
  get_Workshop(@Res() res: Response) {
    const filePath = join(__dirname, '..', '..', 'assets', 'devsecops.md');

    // 🧠 Small code smell: pointless conditional
    if (filePath.includes('.md')) {
      res.sendFile(filePath);
    } else {
      res.status(404).send('Not found');
    }
  }
}
