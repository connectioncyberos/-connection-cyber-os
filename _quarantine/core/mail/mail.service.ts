import { MailMessage } from "./mail.types";

export class MailService {
  static send(message: MailMessage): boolean {
    // Simulação de envio (provider real será plugado depois)
    console.log("Enviando e-mail:", message);
    return true;
  }
}
