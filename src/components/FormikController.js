import { Form, Formik } from "formik";
import InputTypes from "./InputTypes";


function FormikController() {
    const Genders=[
        {key:'Male',value:'male'},
        {key:'Female',value:'Female'}
    ]
    const Languages=[
        {key:'Tamil',value:'tamil'},
        {key:'English',value:'english'},
        {key:'Hindi',value:'hindi'},
        {key:'Malayalam',value:'malayalam'},
        {key:'Marati',value:'marati'},
        {key:'Others',value:'other'}
    ]
    const Studies=[
        {key:'select an option',value:'undergraduate'},
        {key:'UG',value:'undergraduate'},
        {key:'PG',value:'postgraduate'},
        {key:'Diploma',value:'diploma'},
        {key:'SSLC',value:'10th'},
        {key:'HSC',value:'12th'}
    ]
    const initialValues={
        StudentName:'',
        DateOfBirth:'',
        EmailId:'',
        MobileNumber:'',
        Gender:'',
        Address:'',
        KnownLanguages:'',
        Qualification:''
    }
    const submitForm=(values)=>{
        console.log(values);
        alert(JSON.stringify(values))
    }
    return( 
    <div>
        <Formik
        initialValues={initialValues}
        onSubmit={submitForm}>
            {()=>(
                <Form>
                    <h1 >STUDENT DETAILS FORM</h1>
                    <InputTypes control="text" name="StudentName" label="Enter your name"/>
                    <InputTypes control="dob" name="DateOfBirth" label="Date Of Birth"/>
                    <InputTypes type="email" control="email" name="EmailId" label="Enter your Email"/>
                    <InputTypes control="mobile" name="MobileNumber" label="Mobile Number"/>
                    <InputTypes control="radio" name="Gender" label="Gender" options={Genders}/>
                    <InputTypes control="checkbox" name="KnownLanguages" label="Languages Known" options={Languages}/>
                    <InputTypes control="select" name="Qualification" label="Qualification" options={Studies}/>
                    <InputTypes control="textArea" name="Address" label="Enter your Address"/>

                    <button type='submit'>Submit</button>

                </Form>
            )
            }
        </Formik>
    </div>
     );
}

export default FormikController;