import { useForm } from 'react-hook-form';

const Form = ({ children, onSubmit = (data) => console.log('Form Submit Data: ', data) }) => {
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    return <form onSubmit={handleSubmit(onSubmit)}>{children({ register, errors, state: formState })}</form>;
};
Form.displayName = 'Form';

export default Form;
