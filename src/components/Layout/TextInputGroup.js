import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const TextInputGroup = ({ label, name, placeholder, type, value, onChange, error }) => {
    // const { } = props;
    return (
        <div className="form-group row">
            <label htmlFor={name} className="col-md-2">{label}</label>
            <input type={type} 
                name={name} 
                className= {classnames('form-control col-md-10', 
                {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                value={value}
                type= {type}
                onChange={onChange} />
            { error && <div className="invalid-feedback">{error}</div> }
            
        </div>
    )
}

// type verification
TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;