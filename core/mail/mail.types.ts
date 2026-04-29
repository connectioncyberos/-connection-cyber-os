export interface MailMessage {
  to: string;
  subject: string;
  body: string;
  provider?: string;
}
