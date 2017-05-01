import React from 'react';

export const InputField = ({ input, id, label, type, meta: { touched, error } }) => (
    <div>
        <input {...input} id={id} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
    </div>
);
