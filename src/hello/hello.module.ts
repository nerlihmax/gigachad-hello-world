import { PrinterMessage, PrinterService } from '../printer/printer.service';
import { HELLO_WORLD_MESSAGE } from './hello.strings';

export class HelloModule {
  private printerService: PrinterService;

  constructor(printerService: PrinterService) {
    this.printerService = printerService;
  }

  hello() {
    const message: PrinterMessage = {
      payload: HELLO_WORLD_MESSAGE
    };

    this.printerService.print(message);
  }
}