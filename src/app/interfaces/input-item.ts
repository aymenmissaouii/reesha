export interface InputItem {
  label: string;
  type:'text' | 'number' | 'date' | 'email' | 'password' | 'checkbox' | 'radio' | 'textarea' | 'email' | 'select';
  placeholder: string;
  value: any;
  icon: string;
}
