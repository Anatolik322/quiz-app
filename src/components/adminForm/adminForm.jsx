import React, {useRef}  from "react";
import './adminForm.css'
import { Form, FormGroup, Input, Label, Button, Alert } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

export default function AdminForm(props){
    
    let request = useRef(<Alert color="danger"
    className="password-alert">
    please check password!
    </Alert>);
    
    const onHandleSubmit = e => {
        e.preventDefault();
        if(props.passwordInp === props.password){
            props.setPasswordIs(true);
            request.current = <Alert className="password-alert">
            password correct
            </Alert>
        }
        
    }

    const onChangeValue = e => {
        props.setPasswordInp(e.target.value);
    }
    
   
    return(
        <>
        <Form onSubmit={onHandleSubmit} className="d-flex justify-content-center">
            <FormGroup>
             <Label for="exampleEmail">
                Password
             </Label>
             <Input
             id="examplePassword"
             name="password"
             placeholder="password placeholder"
             type="password"
             onChange={onChangeValue}
             />
             <Button >
                Submit
             </Button>
            </FormGroup>
        </Form>
         {request.current}
        </>
    )
}