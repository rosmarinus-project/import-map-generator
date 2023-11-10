export interface Params {
  config?: string;
}

export interface Context {
  input: string[];
  outputFileName: string;
  cwd: string;
}
