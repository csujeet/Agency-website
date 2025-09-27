export interface EmailFormData {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export function sendEmail(formData: EmailFormData): Promise<any>;

export {};
