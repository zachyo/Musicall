import './form-input.styles.scss'
const FormInput = ({label, HandleChange,placeholder,value,name, ...otherInputProps}) => {
    return (
      <div className="group md:w-[25.5rem]">
        <input
          className="form-input w-full my-3 p-3 md:p-[1rem] md:my-[1.2rem]"
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