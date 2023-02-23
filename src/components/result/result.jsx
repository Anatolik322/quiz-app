import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardTitle, CardText, Button} from "reactstrap";

export default function Result({correctAns, allQestion, onTryAgain}){
    return(
    <div className=" box d-flex  align-items-center">
        <Card 
         className="my-2 "
         color="info"
         inverse  
         >
         <CardTitle tag="h5">
           Вітаю!
         </CardTitle>
         <CardText>
          {correctAns} правильних,  з {allQestion} питань
         </CardText>
         <Button onClick={onTryAgain}>
          спробувати знову
         </Button>
        </Card>
    </div>
    
    )
}