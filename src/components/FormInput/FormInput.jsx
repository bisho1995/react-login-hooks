import React from "react"
import PropTypes from "prop-types"
import "./FormInput.scss"

const FormInput = ({className,value,onChange, type, error, ...props})=><div className="form-input margin-vertical-lg">
    <input className={`full-width padding-xs ${error ? 'input-error' : ''} ${className}`} value={value} onChange={onChange} type={type} {...props}/>
    {error ? <div className="red-text text-left">{error}</div> : null}
</div>

FormInput.propTypes = {
    type: PropTypes.string,
    value:PropTypes.string,
    onChange: PropTypes.func
}

FormInput.defaultProps = {
    type: 'text',
    value: '',
    onChange: ()=>{}
}

export default FormInput
