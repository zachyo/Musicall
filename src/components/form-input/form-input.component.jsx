import './form-input.styles.scss'
const FormInput = ({label, HandleChange,placeholder,value,name, ...otherInputProps}) => {
    return (
      <div className="group">
        <input
          className="form-input"
          onChange={HandleChange}
          {...otherInputProps}
          placeholder= {placeholder}
          pattern={otherInputProps.pattern}
          title={otherInputProps.title}
          type={otherInputProps.type}
          name={name}
          value={value}
          required
        />
        {label ? (
          <label className={`${otherInputProps.value ? "shrink" : ""} form-input-label`}>
            {label}
          </label>
        ) : null}
      </div>
    );
}
 
export default FormInput;