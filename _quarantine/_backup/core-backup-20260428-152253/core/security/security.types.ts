export interface SecurityToken {
  token: string;
  expiresIn?: number;
  algorithm?: string;
}
