import { Field } from "formik";

function Number(props) {
    const {label,name,...rest}=props;
    return(
        <div>
          <label className="label" htmlFor={name}>{label}</label>
            <Field className="input" type="number" name={name} {...rest} />  
        </div>
    );
    
}
export default Number;