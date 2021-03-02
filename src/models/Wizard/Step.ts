export interface Step {
  id: string;
  component: (props: StepComponentProps) => JSX.Element;
  isValid?: boolean;
}

export interface StepComponentProps {
  onChangeValid?(step: Step): void;
}
