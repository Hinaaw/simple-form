import { Field } from "formik";
import React from "react";

function Checkboxes(props) {
    const {label,name,options,...rest}=props;
    return(
        <div>
            <label className="label" htmlFor={name}>{label}</label>
            <Field className="input" name={name} {...rest}>
            {({field})=>{
                return options.map(option=>{
                return (
                    <React.Fragment key={option.key}>
                    <input 
                    type="checkbox" 
                    id={option.value} {...field} 
                    value={option.value} 
                    checked={field.value.includes(option.value)}/>
                    <label htmlFor={option.value}>{option.key}</label>
                    </React.Fragment>
                )
                
            }
            )}
            }
            </Field>
        </div>
    );
    
}
export default Checkboxes;