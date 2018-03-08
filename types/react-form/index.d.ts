// Type definitions for react-form 3.2
// Project: https://github.com/tannerlinsley/react-form#readme
// Definitions by: Cameron McAteer <https://github.com/cameron-mcateer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

// Helper Types
export type FormValue = any;
export type FormError = string | undefined;
export interface Nested<T> {
    [key: string]: T | Nested<T>;
}
export type FormValues = Nested<FormValue>;
export type Touched = Nested<boolean>;
export interface FormErrors {
    [key: string]: FormError;
}
// export type NestedErrors = Nested<FormErrors>;
export type RenderReturn = JSX.Element | false | null;

// Form
export interface FormState {
    values: FormValues;
    touched: Touched;
    errors: FormErrors;
    warnings: FormErrors;
    successes: FormErrors;
    submits: number;
    submitted: boolean;
    submitting: boolean;
    asyncValidations: number;
    validating: { [field: string]: boolean };
    validationFailures: number;
    validationFailed: { [field: string]: boolean };
}

export interface FormProps {
    component?: React.Component;
    render?(formApi: FormApi): void;
    pure?: boolean;
    preValidate?(values: FormValues): FormValues;
    validate?: ValidateValuesFunction;
    asyncValidate?: AsyncValidateValuesFunction;
    validateOnMount?: boolean;
    validateOnSubmit?: boolean;
    defaultValues?: FormValues;
    onSubmit?(values: FormValues, submissionEvent: React.SyntheticEvent<any>, formApi: FormApi): void;
    preSubmit?(values: FormValues): FormValues;
    onSubmitFailure?(errors: FormErrors, onSubmitError: FormError, formApi: FormApi): void;
    onChange?(formState: FormState, formApi: FormApi): void;
    preventDefault?: boolean;
    getApi?(formApi: FormApi): FormApi;
}

export interface FormApi {
    submitForm(event: React.SyntheticEvent<any>): void;
    setValue(fieldName: string, value: any): void;
    setAllValues(values: FormValues): void;
    setError(field: string, error: string): void;
    setWarning(field: string, warning: string): void;
    setSuccess(field: string, success: string): void;
    setTouched(field: string, touched: boolean): void;
    setAllTouched(touches: { [field: string]: boolean }): void;
    addValue(name: string, value: any): void;
    removeValue(name: string, index: number): void;
    swapValues(name: string, index1: number, index2: number): void;
    resetAll(): void;
    getFormState(): FormState;
    setFormState(state: FormState): void;
}

export type ValidateValuesFunction = (values: FormValues) => FormErrors;
export type AsyncValidateValuesFunction = (values: FormValues) => Promise<FormErrors>;

export interface FormFunctionProps extends FormProps, FormState, FormApi {}

export interface FormContext {
    formApi: FormApi;
}

export class Form
    extends React.Component<FormProps & { children?: ((props: FormFunctionProps) => RenderReturn) | RenderReturn }>
    implements React.ChildContextProvider<FormContext> {
    static defaultProps: FormProps;
    static childContextTypes: {
        formApi: React.Validator<any>;
    };

    getDefaultState(): FormState;
    getChildContext(): FormContext;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Readonly<Partial<FormProps>>, nextContext: any): void;
    componentWillUmount(): void;

    render(): RenderReturn;
}

// export function Field(component: React.ComponentType<any>): React.ComponentClass<any>;

// Fields

export interface FieldState {
    error: FormError;
    warning: FormError;
    success: FormError;
    touched: boolean;
    fieldName: string;
}

export type FieldError =
    | string
    | {
          error?: string | null;
          warning?: string | null;
          success?: string | null;
      };

export interface FieldProps {
    field: string | string[] | React.ReactText[] | Array<string | React.ReactText[]>;
    preValidate?(value: FormValue): FormValue;
    validate?: (value: string) => FieldError | null;
    asyncValidate?: (value: string) => Promise<FieldError>;
    pure?: boolean;
}

export interface FieldApi {
    setValue(value: FormValue): void;
    setError(error: FormError): void;
    setWarning(warning: FormError): void;
    setSuccess(success: FormError): void;
    setTouched(touched: boolean): void;
}

export interface FieldFunctionProps
    extends FieldProps,
        FieldState,
        FieldApi,
        React.SelectHTMLAttributes<HTMLInputElement> {}

export interface FieldContext {
    fieldApi: FieldApi;
}

export class Field
    extends React.Component<FieldProps & { children?: ((props: FieldFunctionProps) => RenderReturn) | RenderReturn }>
    implements React.ChildContextProvider<FieldContext> {
    static defaultProps: FieldProps;
    static childContextTypes: {
        fieldApi: React.Validator<any>;
    };

    getDefaultState(): FormState;
    getChildContext(): FieldContext;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Readonly<Partial<FieldProps>>, nextContext: any): void;
    componentWillUmount(): void;

    render(): RenderReturn;
}

// Nested Field
export const NestedField: React.StatelessComponent<FieldProps & { component?: React.ComponentType }>;

// Text
export const Text: React.StatelessComponent<FieldProps & React.InputHTMLAttributes<HTMLInputElement>>;

// Radio
export const Radio: React.StatelessComponent<FieldProps & React.InputHTMLAttributes<HTMLInputElement>>;

// TextArea
export const TextArea: React.StatelessComponent<FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>;

// Select
export type SelectOptions = Array<{
    value: FormValue;
    label: string;
}>;

export interface SelectProps extends FieldProps, React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOptions;
}

export const Select: React.StatelessComponent<SelectProps>;

// Checkbox
export const Checkbox: React.StatelessComponent<FieldProps & React.InputHTMLAttributes<HTMLInputElement>>;
