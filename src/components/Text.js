import { Field } from "formik";

function Text(props) {
    const {label,name,...rest}=props;
    return(
        <div>
            <label className="label" htmlFor={name}>{label}</label>
            <Field className="input" name={name} {...rest} />
        </div>
    );
}
export default Text;