export interface GlobalContext {
  environment: "dev" | "stage" | "prod";
  module: string;
  portal?: string;
  tenantId?: string;
  timestamp: string;
}
