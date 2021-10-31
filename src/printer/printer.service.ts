export type PrinterMessagePayload = any;

export interface PrinterMessage {
  payload: PrinterMessagePayload;
}

export class PrinterService {
  print({ payload }: PrinterMessage) {
    console.log(payload);
  }
}
