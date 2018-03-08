import * as React from 'react';
import {
    Form,
    Field,
    // withField,
    // FormApi,
    // withFormApi,
    NestedField,
    // withNestedField,
    Text,
    Radio,
    TextArea,
    Select,
    Checkbox,
    // FieldApi,
} from 'react-form';

// Form Inputs
const TextInput = () => (
    <Form>
        {formApi => (
            <form onSubmit={formApi.submitForm} id="text-input-form">
                <label htmlFor="text-input-firstName">First name</label>
                <Text field="firstName" id="text-input-firstName" />
                <button type="submit" className="mb-4 btn btn-primary">
                    Submit
                </button>
            </form>
        )}
    </Form>
);

const TextAreaInput = () => (
    <Form>
        {formApi => (
            <form onSubmit={formApi.submitForm} id="text-area-input-form">
                <label htmlFor="text-area-input-bio">Bio</label>
                <TextArea field="bio" id="text-area-input-bio" />
                <button type="submit" className="mb-4 btn btn-primary">
                    Submit
                </button>
            </form>
        )}
    </Form>
);

const RadioInput = () => (
    <Form>
        {formApi => (
            <form onSubmit={formApi.submitForm} id="radio-input-form">
                <label htmlFor="radio-input-male" className="mr-2">
                    Male
                </label>
                <Radio field="gender" value="male" id="radio-input-male" />
                <label htmlFor="radio-input-female" className="mr-2">
                    Female
                </label>
                <Radio field="gender" value="female" id="radio-input-female" />
                <button type="submit" className="mb-4 btn btn-primary">
                    Submit
                </button>
            </form>
        )}
    </Form>
);

const CheckboxInput = () => (
    <Form>
        {formApi => (
            <form onSubmit={formApi.submitForm} id="checkbox-input-form">
                <label htmlFor="checkbox-input-authorize" className="mr-2">
                    Authorize
                </label>
                <Checkbox field="authorize" id="checkbox-input-authorize" />
                <button type="submit" className="mb-4 btn btn-primary">
                    Submit
                </button>
            </form>
        )}
    </Form>
);

const SelectInput = () => (
    <Form>
        {formApi => (
            <form onSubmit={formApi.submitForm} id="select-input-form">
                <label htmlFor="select-input-status">Relationship status</label>
                <Select field="status" id="select-input-status" options={statusOptions} className="mb-4" />
                <button type="submit" className="mb-4 btn btn-primary">
                    Submit
                </button>
            </form>
        )}
    </Form>
);

const DisabledTextInput = () => (
    <Form>
        {formApi => (
            <form onSubmit={formApi.submitForm} id="text-input-disabled-form">
                <label htmlFor="text-input-disabled-firstName">First name</label>
                <Text field="firstName" id="text-input-disabled-firstName" disabled />
                <button type="submit" className="mb-4 btn btn-primary">
                    Submit
                </button>
            </form>
        )}
    </Form>
);

// Basic Form Example
const statusOptions = [
    {
        label: 'Single',
        value: 'single',
    },
    {
        label: 'In a Relationship',
        value: 'relationship',
    },
    {
        label: "It's Complicated",
        value: 'complicated',
    },
];

class BasicForm extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
                {formApi => (
                    <form onSubmit={formApi.submitForm} id="form2">
                        <label htmlFor="firstName">First name</label>
                        <Text field="firstName" id="firstName" />
                        <label htmlFor="lastName">Last name</label>
                        <Text field="lastName" id="lastName" />
                        <div>
                            <label htmlFor="male" className="mr-2">
                                Male
                            </label>
                            <Radio field="gender" value="male" id="male" className="mr-3 d-inline-block" />
                            <label htmlFor="female" className="mr-2">
                                Female
                            </label>
                            <Radio field="gender" value="female" id="female" className="d-inline-block" />
                        </div>
                        <label htmlFor="bio">Bio</label>
                        <TextArea field="bio" id="bio" />
                        <label htmlFor="authorize" className="mr-2">
                            Authorize
                        </label>
                        <Checkbox field="authorize" id="authorize" className="d-inline-block" />
                        <label htmlFor="status" className="d-block">
                            Relationship status
                        </label>
                        <Select field="status" id="status" options={statusOptions} className="mb-4" />
                        <button type="submit" className="mb-4 btn btn-primary">
                            Submit
                        </button>
                    </form>
                )}
            </Form>
        );
    }
}

// Form with Arrays
class FormWithArrays extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
                    {formApi => (
                        <form onSubmit={formApi.submitForm} id="form3">
                            <label htmlFor="firstName2">First name</label>
                            <Text field="firstName" id="firstName2" />
                            <label htmlFor="friend1">Friend1</label>
                            <Text field={['friends', 0]} id="friend1" />
                            <label htmlFor="friend2">Friend2</label>
                            <Text field={['friends', 1]} id="friend2" />
                            <label htmlFor="friend3">Friend3</label>
                            <Text field={['friends', 2]} id="friend3" />
                            <button type="submit" className="mb-4 btn btn-primary">
                                Submit
                            </button>
                        </form>
                    )}
                </Form>
            </div>
        );
    }
}

// Field Syntax
const Friend = ({ i }: { i: number }) => (
    <div>
        <h2>Friend</h2>
        <label htmlFor={`friend-first-${i}`}>First name</label>
        <Text field={['friends', i, 'firstName']} id={`friend-first-${i}`} />
        <label htmlFor={`friend-last-${i}`}>Last name</label>
        <Text field={[['friends', i], 'lastName']} id={`friend-last-${i}`} />
        <label htmlFor={`friend-street-${i}`}>Street</label>
        <Text field={['friends', i, 'address', 'street']} id={`friend-street-${i}`} />
        <label htmlFor={`friend-zip-${i}`}>Zipcode</label>
        <Text field={['friends', i, 'lastName.zip']} id={`friend-zip-${i}`} />
    </div>
);

class FormWithSpecialFieldSyntax extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
                    {formApi => (
                        <form onSubmit={formApi.submitForm} id="syntax-form">
                            <label htmlFor="nickname1">Nickname</label>
                            <Text field={['nicknames', 0]} id="nickname1" />
                            <label htmlFor="nickname2">Nickname</label>
                            <Text field={['nicknames', 1]} id="nickname2" />
                            <Friend i={0} />
                            <Friend i={1} />
                            <button type="submit" className="mb-4 btn btn-primary">
                                Submit
                            </button>
                        </form>
                    )}
                </Form>
            </div>
        );
    }
}

// Nested Field
const QuestionFields = () => (
    <div>
        <label htmlFor="color">Whats your favorite color?</label>
        <Text field="color" id="color" />
        <label htmlFor="food">Whats your favorite food?</label>
        <Text field="food" id="food" />
        <label htmlFor="car">Whats type of car do you drive?</label>
        <Text field="car" id="car" />
    </div>
);

class NestedFieldExample extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
                {formApi => (
                    <form onSubmit={formApi.submitForm} id="form4">
                        <label htmlFor="firstName3">First name</label>
                        <Text field="firstName" id="firstName3" />
                        <NestedField field="questions">
                            <QuestionFields />
                        </NestedField>
                        <button type="submit" className="mb-4 btn btn-primary">
                            Submit
                        </button>
                    </form>
                )}
            </Form>
        );
    }
}

// Dynamic Forms
class DynamicForm extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
                    {formApi => (
                        <div>
                            <button
                                onClick={() => formApi.addValue('siblings', '')}
                                type="button"
                                className="mb-4 mr-4 btn btn-success"
                            >
                                Add Sibling
                            </button>
                            <form onSubmit={formApi.submitForm} id="dynamic-form">
                                <label htmlFor="dynamic-first">First name</label>
                                <Text field="firstName" id="dynamic-first" />
                                {formApi.values.siblings &&
                                    formApi.values.siblings.map((sibling: string, i: number) => (
                                        <div key={`sibling${i}`}>
                                            <label htmlFor={`sibling-name-${i}`}>Name</label>
                                            <Text field={['siblings', i]} id={`sibling-name-${i}`} />
                                            <button
                                                onClick={() => formApi.removeValue('siblings', i)}
                                                type="button"
                                                className="mb-4 btn btn-danger"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                <button type="submit" className="mb-4 btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}
                </Form>
            </div>
        );
    }
}

// Array of Nested Fields
const MyFriend = () => (
    <div>
        <h2>Friend</h2>
        <label>
            First name <Text field="firstName" />
        </label>
        <label>
            Last name <Text field="lastName" />
        </label>
    </div>
);

class FormWithArrayOfNestedForms extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
                {formApi => (
                    <form onSubmit={formApi.submitForm} id="form3">
                        <NestedField field={['friends', 0]} component={MyFriend} />
                        <NestedField field={['friends', 1]} component={MyFriend} />
                        <NestedField field={['friends', 2]} component={MyFriend} />
                        <button type="submit" className="mb-4 btn btn-primary">
                            Submit
                        </button>
                    </form>
                )}
            </Form>
        );
    }
}

// Custom Inputs
interface MessageProps {
    color: string;
    message: string;
}

const Message = ({ color, message }: MessageProps) => (
    <div className="mb-4" style={{ color }}>
        <small>{message}</small>
    </div>
);

const validate = (value: string) => ({
    error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
    warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
    success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null,
});

interface CustomTextProps extends React.SelectHTMLAttributes<HTMLInputElement> {
    field: string;
}

const CustomText = (props: CustomTextProps) => (
    // Use the form field and your custom input together to create your very own input!
    <Field validate={validate} field={props.field}>
        {fieldApi => {
            // Remember to pull off everything you dont want ending up on the <input>
            // thats why we pull off onChange, onBlur, and field
            // Note, the ...rest is important because it allows you to pass any
            // additional fields to the internal <input>.
            const { onChange, onBlur, field, ...rest } = props;

            const { value, error, warning, success, setValue, setTouched } = fieldApi;

            return (
                <div>
                    <input
                        {...rest}
                        value={value || ''}
                        onChange={e => {
                            setValue(e.target.value);
                            if (onChange) {
                                onChange(e);
                            }
                        }}
                        onBlur={e => {
                            setTouched(true);
                            if (onBlur) {
                                onBlur(e);
                            }
                        }}
                    />
                    {error ? <Message color="red" message={error} /> : null}
                    {!error && warning ? <Message color="orange" message={warning} /> : null}
                    {!error && !warning && success ? <Message color="green" message={success} /> : null}
                </div>
            );
        }}
    </Field>
);

const FormWithCustomInput = () => (
    <Form>
        {formApi => (
            <form onSubmit={formApi.submitForm} id="form5">
                <label htmlFor="firstName4">First name</label>
                <Text field="firstName" id="firstName4" />
                <label htmlFor="hello2">Custom hello world</label>
                <CustomText field="hello" id="hello2" />
                <button type="submit" className="mb-4 btn btn-primary">
                    Submit
                </button>
            </form>
        )}
    </Form>
);

// Async Validation
const validate2 = (username?: string) => (!username || username.trim() === '' ? 'Username is a required field' : null);

const asyncValidate = (username: string) =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            // Simulate username check
            if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {
                resolve({ error: 'That username is taken', success: null });
            }
            // Simulate request faulure
            if (username === 'reject') {
                reject('Failure while making call to validate username does not exist');
            }
            // Sumulate username success check
            resolve({
                success: 'Awesome! your username is good to go!',
            });
        }, 2000)
    );

const AsyncValidation = () => (
    <Form>
        {formApi => (
            <form onSubmit={formApi.submitForm} id="form6">
                <label htmlFor="username">Username</label>
                <Text field="username" id="username" validate={validate2} asyncValidate={asyncValidate} />
                <button type="submit" className="mb-4 btn btn-primary">
                    Submit
                </button>
            </form>
        )}
    </Form>
);

// Nested Async Validators
const validator = (username?: string) =>
    !username || username.trim() === ''
        ? 'Username is a required field'
        : { success: 'Awesome! your username is good to go!' };

const doesUsernameExist = (username: string, ms: number) =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            // Simulate username check
            if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {
                return resolve('That username is taken');
            }
            // Simulate request faulure
            if (username === 'reject') {
                return reject('Failure while making call to validate username does not exist');
            }
            // Sumulate username success check
            resolve();
        }, ms)
    );

const asyncValidator = (delay: number) => async (username: string) => doesUsernameExist(username, delay);

const NestedAsynchronousFormValidation = () => (
    <Form
        render={formApi => (
            <form onSubmit={formApi.submitForm} id="form7">
                <label htmlFor="username2">Username</label>
                <Text field="username" id="username2" validate={validator} asyncValidate={asyncValidator(2000)} />
                <NestedField field="nested">
                    <div>
                        <label htmlFor="username3">Nested Username</label>
                        <Text
                            field="username"
                            id="username3"
                            validate={validator}
                            asyncValidate={asyncValidator(4000)}
                        />
                        <NestedField field="deepNested">
                            <div>
                                <label htmlFor="username4">Deep nested Username</label>
                                <Text
                                    field="username"
                                    id="username4"
                                    validate={validator}
                                    asyncValidate={asyncValidator(6000)}
                                />
                            </div>
                        </NestedField>
                    </div>
                </NestedField>
                <button type="submit" className="mb-4 btn btn-primary">
                    Submit
                </button>
            </form>
        )}
    />
);
