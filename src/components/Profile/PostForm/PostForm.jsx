import stl from './PostForm.module.scss';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { composeValidators, required, maxLengthCreator } from '../../../utils/validators/validators';

const MessageForm = (props) => {
    let onSubmit = (values) => {
        props.addPost(values.newPost);
        values.newPost = '';
    }

    return (
        <Form 
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form className={stl.postForm} onSubmit={handleSubmit}>
                    <Field validate={composeValidators(required, maxLengthCreator(30))} name="newPost" placeholder='Сообщение' stl={stl} component={Textarea} />
                    <button>SEND</button>
                </form>
            )}
        />
    );
}

export default MessageForm;