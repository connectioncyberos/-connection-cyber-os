export interface GlobalNavigationRule {
  route: string;
  module: string;
  portal?: string;
  environment?: "dev" | "stage" | "prod";
  enabled: boolean;
}
