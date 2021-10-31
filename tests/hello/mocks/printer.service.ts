import { PrinterMessage, PrinterMessagePayload, PrinterService } from '../../../src/printer/printer.service';

export type MockPrinterServiceCallback = (payload: PrinterMessagePayload) => void;

export class MockPrinterService extends PrinterService {
  private callback: MockPrinterServiceCallback;

  constructor(callback: MockPrinterServiceCallback) {
    super();

    this.callback = callback;
  }

  print({ payload }: PrinterMessage) {
    this.callback(payload);
  }
}