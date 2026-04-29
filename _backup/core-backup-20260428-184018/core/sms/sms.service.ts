import { SmsMessage } from "./sms.types";

export class SmsService {
  static send(message: SmsMessage): boolean {
    // Simulação de envio (provider real será plugado depois)
    console.log("Enviando SMS:", message);
    return true;
  }
}
