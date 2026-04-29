export interface GlobalError {
  code: string;
  message: string;
  details?: Record<string, any>;
}
