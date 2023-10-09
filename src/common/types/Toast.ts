export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}

export type ToastInterface = {
  type: ToastType;
  message: string;
  show: boolean;
};