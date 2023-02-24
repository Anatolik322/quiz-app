import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle, Progress } from "reactstrap";
export default function Game({qestion, onClickVariant, percentage}){
  
  const variants = qestion.variants.map((elem, id) => {
       return(
         <li key = {elem} onClick = {() => onClickVariant(id)}>
            {elem}
        </li>
        )
  });

  return(
    <div
    className=" box d-flex  align-items-center" >
    
      <Card 
      className="my-2 d-flex mx-auto align-items-center justify-content-md-around"
      color="warning"
      inverse
      >
      <Progress
      
      animated
      style={{width: 90 + '%'}}
      color="success"
      value={percentage}></Progress>
      <div>
      <CardTitle tag="h5">
      {qestion.title}
      </CardTitle>
      <ul className='ansvers'>
        {variants}
      </ul>
      </div>
      </Card>
    </div>
      
  )
}