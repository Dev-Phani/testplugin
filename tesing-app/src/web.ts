import { WebPlugin } from '@capacitor/core';
import { TestingAppPlugin } from './definitions';

export class TestingAppWeb extends WebPlugin implements TestingAppPlugin {
  constructor() {
    super({
      name: 'TestingApp',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const TestingApp = new TestingAppWeb();

export { TestingApp };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(TestingApp);
