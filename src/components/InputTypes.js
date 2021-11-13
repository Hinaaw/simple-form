import React from "react";
import Date from "./Date";
import Text from "./Text";
import Email from "./Email";
import Number from "./Number";
import RadioButton from "./RadioButton";
import TextArea from "./TextArea";
import Checkboxes from "./Checkboxes";
import Select from "./Select";

function InputTypes(props) {
    const {control, ...rest} = props;
    switch (control) {
        
        case 'text':
            return <Text {...rest}/>
            
        case 'dob':
            return <Date {...rest}/>
            
       case 'email':
            return <Email {...rest}/>
            
        case 'mobile':
            return <Number {...rest}/>
            
         case 'radio':
            return <RadioButton {...rest}/>
            
        case 'textArea':
            return <TextArea {...rest}/>
            
        case 'checkbox':
           return <Checkboxes {...rest}/>

        case 'select':
            return <Select {...rest}/>
            
        default:
            return null
    }
}
export default InputTypes