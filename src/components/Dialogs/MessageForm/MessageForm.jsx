import stl from './MessageForm.module.scss';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { required, maxLengthCreator, composeValidators } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MessageForm = (props) => {
    let onSubmit = (values) => {
        props.addMessage(values.newMessage);
        values.newMessage = '';
    }

    let validate = values => {
        console.log(values);
    }

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form className={stl.messageForm} onSubmit={handleSubmit}>
                    <Field validate={composeValidators(required, maxLengthCreator(10))} name="newMessage" placeholder='Сообщение' stl={stl} component={Textarea}></Field>
                    <button>SEND</button>
                </form>
            )}
        />
    );
}

export default MessageForm;