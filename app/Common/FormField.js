import React from 'react';

export const Input = ({ input, id, label, type, min, step, meta: { touched, error } }) => (
    <div>
        <input {...input} id={id} placeholder={label} type={type} min={min} step={step} />
        {touched && error && <span className="form-error">{error}</span>}
    </div>
);

export const TextArea = ({ input, id, label, rows, meta: { touched, error } }) => (
    <div>
        <textarea {...input} id={id} placeholder={label} rows={rows} />
        {touched && error && <span className="form-error">{error}</span>}
    </div>
);
