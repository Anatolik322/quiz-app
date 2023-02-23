import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle } from "reactstrap";
export default function Game({qestion, onClickVariant}){
    console.log(qestion);
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
        className="my-2 d-flex mx-auto align-items-center"
        color="warning"
        inverse
        >
        <CardTitle tag="h5">
        {qestion.title}
        </CardTitle>
        <ul className='ansvers'>
          {variants}
        </ul>
        </Card>
      </div>
      
    )
}