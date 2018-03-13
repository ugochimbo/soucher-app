import React from 'react';

export const Input = ({ input, id, label, type, min, maxLength, step, style, meta: { touched, error } }) => (
    <div style={style}>
        <input {...input} id={id} placeholder={label} type={type} min={min} step={step} maxLength={maxLength} />
        {touched && error && <span style={{'marginLeft' : '5px'}} className="form-error">{error}</span>}
    </div>
);

export const TextArea = ({ input, id, label, rows, maxLength, style, meta: { touched, error } }) => (
    <div style={style}>
        <textarea {...input} id={id} placeholder={label} rows={rows} maxLength = {maxLength}/>
        {touched && error && <span className="form-error">{error}</span>}
    </div>
);

export const DropDown = ({ input, id, label, rows, options, style, meta: { touched, error } }) => (
    <div style={style}>
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
