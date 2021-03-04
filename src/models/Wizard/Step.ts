import { ChangeEvent } from 'react';
import { formErrors, formValues, useFormItem } from '../Form/Form';

export interface Step {
  id: string;
  title?: string;
  component: (props: StepComponentProps) => JSX.Element;
  isValid?: boolean;
  submit?: boolean;
  formConfig?: useFormItem[];
}

export interface StepComponentProps {
  step: Step;
  values: formValues;
  errors: formErrors;
  handleInputChange(e: ChangeEvent<HTMLInputElement>): void;
  success: boolean;
  successMsg?: string;
  errorMsg?: string;
}
