declare module "@capacitor/core" {
    interface PluginRegistry {
        TestingApp: TestingAppPlugin;
    }
}
export interface TestingAppPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
