import { AccordingItem } from "src/app/interfaces/according-item";
import { InputItem } from '../../interfaces/input-item';

export const COST_FLOCK_INPUTS: AccordingItem[] = [
  {
    title:'البيانات الأساسية',
    value:'first',
    inputs:[
    {
      label: 'المصدر(شخص أو معمل)',
      type: 'text',
      placeholder: 'المصدر',
      icon: 'information-circle-outline',
      value: ''
    },
    {
      label: 'إسم السائق(إختياري)',
      type: 'text',
      placeholder: 'الإسم',
      icon: 'information-circle-outline',
      value: ''
    },
    {
      label: 'سعر النقل',
      type: 'number',
      placeholder: 'السعر',
      icon: 'information-circle-outline',
      value: ''
    },
    {
      label: 'أدخل سعر الكتكوت الواحد',
      type: 'number',
      placeholder: 'سعر الكتكوت',
      icon: 'information-circle-outline',
      value: ''
    },

  ],
  total_price: 0,
  age: 1
 },
  {
    title:'معطيات عن العلف',
    value:'second',
    inputs:[
    {
      label: 'نوع العلف',
      type: 'select',
      placeholder: 'نوع العلف',
      icon: 'information-circle-outline',
      value: [
        { label: 'سوبر بادي', value: 'superbadi' },
        { label: 'بادي', value: 'badi' },
        { label: 'مكمل', value: 'mokamel' },
        { label: 'ناهي', value: 'nahi' },
      ]
    },
    {
      label: 'تاريخ الإستلام',
      type: 'date',
      placeholder: 'التاريخ ',
      icon: 'information-circle-outline',
      value: ''
    },
    {
      label: 'أدخل العدد الجملي للكتاكيت',
      type: 'number',
      placeholder: 'الكمية',
      icon: 'information-circle-outline',
      value: ''
    },
    {
      label: 'أدخل سعر الكتكوت الواحد',
      type: 'number',
      placeholder: 'سعر الكتكوت',
      icon: 'information-circle-outline',
      value: ''
    },

  ],
  total_price: 0,
  },
  {
    title:'مصروفات أخرى',
    value:'third',
    inputs:[
    {
      label: 'أدخل نوع المصروف',
      type: 'select',
      placeholder: 'مثال: حضيرة سالم',
      icon: 'information-circle-outline',
      value: [
        { label: 'الأدوية البيطرية', value: 'adwia' },
        { label: 'الكهرباء', value: 'elect' },
        { label: 'إيجار المزرعة', value: 'farm' },
        { label: 'إيجار العمال', value: 'worker' },
        { label: 'المازوط', value: 'desiel' },
        { label: 'النجارة', value: 'njara' },
        { label: 'أخرى', value: 'other' },
      ]
    },
  ],
  },
];


export const SELLS_FLOCK_INPUTS: AccordingItem[] = [
    {
    title:'مبيعات المذبوحات',
    value:'first',
    inputs:[
    {
      label: 'إسم المذبح',
      type: 'text',
      placeholder: 'الإسم',
      icon: 'information-circle-outline',
      value: ''
    },
    {
      label: 'تاريخ البيع',
      type: 'date',
      placeholder: 'التاريخ',
      icon: 'information-circle-outline',
      value: ''
    },
    {
      label: 'صافي الوزن بالكيلو',
      type: 'number',
      placeholder: 'الوزن',
      icon: 'information-circle-outline',
      value: ''
    },
    {
      label: 'سعر الكيلو الواحد',
      type: 'number',
      placeholder: 'سعر الكيلو',
      icon: 'information-circle-outline',
      value: ''
    },
        {
      label: 'عدد الطيور المباعة',
      type: 'number',
      placeholder: 'العدد',
      icon: 'information-circle-outline',
      value: ''
    },
  ],
  total_price: 0,
 },
  {
    title:'مبيعات أخرى',
    value:'third',
    inputs:[
    {
      label: 'أدخل الإسم',
      type: 'text',
      placeholder: 'مثال: السماد...',
      icon: 'information-circle-outline',
      value: ""
    },
    {
      label: 'أدخل السعر',
      type: 'text',
      placeholder: 'السعر',
      icon: 'plus-outline',
      value: ""
    },
    {
      label: 'أضف مبيع آخر',
      type: 'button',
      placeholder: '',
      icon: 'add-circle-outline',
      value: ""
    },
    ],
    total_price: 0,
  },
];
