import { Field } from "formik";

function Select(props) {
    const {label,name,options,...rest}=props;
    return(
        <div>
            <label className="label" htmlFor={name}>{label}</label>
            <Field as="select" className="input" name={name} {...rest} >
            {
                    options.map(option=>{
                        return(
                            <option key={option.key} value={option.value}>{option.key}</option>
                        )}
                        )
            }


            </Field>
        </div>
    );
    
}
export default Select;