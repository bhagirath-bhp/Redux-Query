export interface FormField {
  label: string;
  type: string;
  value: string;
  className: string,
}
export interface FormProps {
  fields: FormField[];
}
export interface UserBadgeProps {
  name: string,
  profileURL: string
}
