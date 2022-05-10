import React from "react";

export const Textarea = ({ input, meta, ...props }) => {
    if (meta.error && meta.touched) {
        return (
            <div>
                <textarea className={props.stl.textarea + ' ' + props.stl.error} {...input} {...props} />
                <span>{meta.error}</span>
            </div>
        );

    }
    else {
        return (
            <div>
                <textarea className={props.stl.textarea} {...input} {...props} />
            </div>
        );
    }
}

export const Input = ({ input, meta, ...props }) => {
    if (meta.error && meta.touched) {
        return (
            <div>
                <input className={props.stl.input + ' ' + props.stl.error} {...input} {...props} />
                <span>{meta.error}</span>
            </div>
        );

    }
    else {
        return (
            <div>
                <input className={props.stl.input} {...input} {...props} />
            </div>
        );
    }
}

export const CheckBox = ({ input, meta, ...props }) => {
    return (
        <div className={props.stl.checkBox}>
            Запомнить меня:         
            <input {...input} {...props} type='checkbox'/>        
        </div>
    );
}
