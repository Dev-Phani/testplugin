import { WebPlugin } from '@capacitor/core';
import { TestingAppPlugin } from './definitions';
export declare class TestingAppWeb extends WebPlugin implements TestingAppPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const TestingApp: TestingAppWeb;
export { TestingApp };
