import { Controller, Get } from '@nestjs/common';

@Controller('')
export class ThemeController {
  @Get('theme')
  getTheme() {
    const theme = process.env.APP_THEME === 'dark' ? 'dark' : 'light';
    return { theme };
  }
}
