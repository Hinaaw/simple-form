import { Field } from "formik";

function TextArea(props) {
    const {label,name,...rest}=props;
    return(
        <div>
            <label className="label" htmlFor={name}>{label}</label>
            <Field as="textarea" className="input" name={name} {...rest} />
        </div>
    );
    
}
export default TextArea