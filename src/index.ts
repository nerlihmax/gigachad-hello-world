import { HelloModule } from './hello/hello.module';
import { PrinterService } from './printer/printer.service';

class Application {
  private helloModule: HelloModule;

  constructor(helloModule: HelloModule) {
    this.helloModule = helloModule;

    this.helloModule.hello();
  }
}

const bootstrap = () => {
  const printerService = new PrinterService();
  const helloModule = new HelloModule(printerService);

  const app = new Application(helloModule);
};

bootstrap();