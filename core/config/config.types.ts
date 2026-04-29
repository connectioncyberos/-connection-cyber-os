export interface GlobalConfig {
  key: string;
  value: any;
  environment?: "dev" | "stage" | "prod";
  module?: string;
  portal?: string;
}
