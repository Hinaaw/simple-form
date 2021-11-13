import { Field } from "formik";

function Date(props) {
    const {label,name,...rest}=props;
    return(
        <div>
           <label className="label" htmlFor={name}>{label}</label>
            <Field className="input" type="date" name={name} {...rest} />
        </div>
    );
    
}
export default Date;