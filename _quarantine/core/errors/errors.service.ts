import { GlobalError } from "./errors.types";
import { LogsService } from "../logs/logs.service";

export class ErrorsService {
  static throw(code: string, message: string, details?: any): never {
    const error: GlobalError = { code, message, details };

    LogsService.error(message, { code, details });

    throw error;
  }
}
