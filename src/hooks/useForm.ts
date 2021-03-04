import React, { ChangeEvent, FC } from 'react';

import { useTranslation } from 'react-i18next';

// models
import { formErrors, formValues, useFormItem } from '../models/Form/Form';

import utils from '../utils';

const useForm = (
  configForm: useFormItem[],
): {
  values: formValues;
  errors: formErrors;
  isValid: boolean;
  handleInputChange(e: ChangeEvent<HTMLInputElement>): void;
  reset(): void;
} => {
  // init config values
  const [values, setValues] = React.useState(() => {
    const initValues = {};
    configForm.forEach((configItem: useFormItem) => {
      initValues[configItem.id] = '';
    });
    return initValues;
  });

  const [errors, setErrors] = React.useState({});

  const [isValid, setIsValid] = React.useState(false);

  const { t } = useTranslation();

  // form validation
  React.useEffect(() => {
    validate();
    // console.log(values);
  }, [values]);

  // init values
  React.useEffect(() => {
    const newValues = {};

    configForm.forEach((configItem: useFormItem) => {
      if (configItem.value) newValues[configItem.id] = configItem.value;
    });

    setValues(newValues);
  }, []);

  // form validation
  const validate = () => {
    const validation_errors = {};

    configForm.forEach((configItem: useFormItem) => {
      if (configItem.validation) {
        const inputErrors = [];

        for (const validationType in configItem.validation) {
          // standard validation rules
          switch (validationType) {
            case 'required':
              if (
                (configItem.validation[validationType] === true && values[configItem.id] === '') ||
                values[configItem.id] === null ||
                values[configItem.id] === undefined ||
                (configItem.type === 'checkbox' && values[configItem.id] === false)
              )
                inputErrors.push(t('common.form.required'));
              break;
            case 'password':
              if (!utils.string.isPassword(values[configItem.id])) inputErrors.push(t('common.form.password'));
              break;
            case 'sameValueAs':
              // eslint-disable-next-line no-case-declarations
              const sameValueAsField = configItem.validation[validationType];

              if (sameValueAsField && values[configItem.id] !== values[sameValueAsField])
                inputErrors.push(t('common.form.equal'));

              break;
            default:
              break;
            // ... add more validation rules over here
          }
        }

        if (inputErrors.length > 0) validation_errors[configItem.id] = inputErrors.join(', ');
      }
    });

    setErrors(validation_errors);

    // console.log(validation_errors);

    setIsValid(Object.keys(validation_errors).length === 0);
  };

  const getInputById = (name: string) => {
    for (const i in configForm) {
      if (configForm[i].id === name) return configForm[i];
    }
    return null;
  };

  // handle input value
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = getInputById(event.target.name);
    if (!input) return null;
    setValues({
      ...values,
      [event.target.name]: input.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  // reset to initialValues
  const reset = () => {
    setValues({});
  };

  return {
    values,
    handleInputChange,
    errors,
    isValid,
    reset,
  };
};

export default useForm;
