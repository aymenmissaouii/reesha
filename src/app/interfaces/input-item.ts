export interface InputItem {
  label: string;
  type:'text' | 'number' | 'date' | 'email' | 'password' | 'checkbox' | 'radio' | 'textarea' | 'email' | 'select' | 'button';
  placeholder: string;
  value: any;
  icon: string;
}
