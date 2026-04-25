// Local: web/src/types/academy.ts

export type CourseAccessType = 
  | 'free' 
  | 'paid' 
  | 'scholarship' 
  | 'partner_referral' 
  | 'referral' 
  | 'sponsored' 
  | 'institutional' 
  | 'trial' 
  | 'gift';

export interface ManagementStat {
  label: string;
  value: string | number;
  trend?: string;
  icon: React.ReactNode;
}