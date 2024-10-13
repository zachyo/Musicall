import { Eye, EyeOff } from "lucide-react";
import "./form-input.styles.scss";
import { useState } from "react";
const FormInput = ({
  label,
  HandleChange,
  placeholder,
  value,
  name,
  ...otherInputProps
}) => {

  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="group w-[20rem] md:w-[25.5rem] relative">
      <input
        className="form-input w-full my-3 p-3 md:p-[1rem] md:my-[1.2rem]"
        onChange={HandleChange}
        {...otherInputProps}
        placeholder={placeholder}
        pattern={otherInputProps.pattern}
        title={otherInputProps.title}
        type={name === 'password' ? showPassword ? 'text' : 'password' : otherInputProps.type}
        name={name}
        value={value}
        required
      />
      {label ? (
        <label
          className={`${
            otherInputProps.value ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
      {name === "password" && (
        <>
        {showPassword ? <Eye className="absolute bottom-[37px] cursor-pointer right-3" size={19} stroke="#facd66" onClick={()=>setShowPassword(false)}/> :
          <EyeOff className="absolute bottom-[37px] cursor-pointer right-3" size={19} stroke="#facd66" onClick={()=>setShowPassword(true)}/>}
        </>
      )}
    </div>
  );
};

export default FormInput;
