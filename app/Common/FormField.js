import React from 'react';

export const Input = ({ input, id, label, type, min, step, meta: { touched, error } }) => (
    <div>
        <input {...input} id={id} placeholder={label} type={type} min={min} step={step} />
        {touched && error && <span style={{'marginLeft' : '5px'}} className="form-error">{error}</span>}
    </div>
);

export const TextArea = ({ input, id, label, rows, meta: { touched, error } }) => (
    <div>
        <textarea {...input} id={id} placeholder={label} rows={rows} />
        {touched && error && <span className="form-error">{error}</span>}
    </div>
);

export const DropDown = ({ input, id, label, rows, options, meta: { touched, error } }) => (
    <div>
        <select {...input}>
            <option value=''>- {label} -</option>
            {dropDownOptions(options)}
        </select>
        {touched && error && <span className="form-error">{error}</span>}
    </div>
);

let dropDownOptions = (options) => {
    return options.map((currency) => {
        return <option value={currency} key = {currency}>
            {currency}
        </option>
    })
};
