export interface useFormItem {
  id: string | number;
  type: string;
  validation?: {
    required?: boolean;
    password?: boolean;
    sameValueAs?: string;
  };
  value?: string | number;
}

export type formValues =
  | {
      [key: string]: string | number;
    }[]
  | Record<string, never>;

export type formErrors =
  | {
      [key: string]: string;
    }[]
  | Record<string, never>;
