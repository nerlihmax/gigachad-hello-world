import { HelloModule } from '../../src/hello/hello.module';
import { HELLO_WORLD_MESSAGE } from '../../src/hello/hello.strings';
import { MockPrinterService, MockPrinterServiceCallback } from './mocks/printer.service';

describe('тест модуля hello', () => {
  it('функция hello() должна передать в принт-сервис правильное сообщение', () => {
    const onPrinted: MockPrinterServiceCallback = (payload) => {
      expect(payload).toEqual(HELLO_WORLD_MESSAGE);
    };

    const printerService = new MockPrinterService(onPrinted);

    const helloModule = new HelloModule(printerService);

    helloModule.hello();
  });
});
