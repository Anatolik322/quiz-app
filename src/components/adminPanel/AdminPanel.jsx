import React, {useState} from 'react';
import './adminPanel.css'
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
function AdminPanel(props) {
  const { data, setData } = props;
  const [title, setTitle] = useState("");
  const [variants, setVariants] = useState("");
  const [correct, setCorrect] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const newQuestion = {
      title: title,
      variants: variants.split(' '),
      correct: correct
    }
    //const arr = [newQuestion]
    let newData = [...data, newQuestion];
    console.log(newData);
    if(title.length > 0 && variants.length > 0 )
    setData(newData); 
    setTitle("");
    setVariants("");
    setCorrect(0);
  };

  

  return (
   <div className="table d-flex justify-content-center">
    
    <table >
      <thead>
        <tr >
          <th scope="row">title</th>
          <th scope="row">variants</th>
          <th scope="row">correct</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} >
            <td>{item.title}</td>
            <td>{item.variants}</td>
            <td>{item.correct}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <Form onSubmit={handleSubmit} className="add-form">
    <FormGroup> 
      <Label>
        title:
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Label>
      <Label>
        variants:
        <Input type="text" value={variants} onChange={(e) => setVariants(e.target.value)} />
      </Label>
      <Label>
        correct:
        <Input type="number" value={correct} onChange={(e) => setCorrect(e.target.value)} />
      </Label>
      <Button type="submit">add</Button>
    </FormGroup>
    </Form>

    </div>   
  );
}

export default AdminPanel;