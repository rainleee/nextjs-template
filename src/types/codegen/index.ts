export interface MockDataGenConfig {
  generator: string;
  arguments?: any;
  extra?: {
    function?: string;
    arguments?: any;
  };
}
export type MockFieldGeneration = Record<string, MockDataGenConfig>;
export type MockScalars = Record<string, MockDataGenConfig>;
