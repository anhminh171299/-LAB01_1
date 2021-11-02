import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  return dish != null ? (
    <div>
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />{" "}
        <CardBody>
          <CardTitle> {dish.name} </CardTitle>{" "}
          <CardText> {dish.description} </CardText>{" "}
        </CardBody>{" "}
      </Card>{" "}
    </div>
  ): null;
}

function RenderComments({ comments }) {
  return comments != null ? comments.map((a) => (
    <div>
      <p> {a.comment} </p>{" "}
      <span>
        {" "}
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(Date.parse(a.date)))}{" "}
      </span>{" "}
      <span> {a.author} </span>{" "}
    </div>
  )) : null
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1"> <RenderDish dish={props.dish}/> </div>
        <div className="col-12 col-md-5 m-1">
          <h3> Comment Box </h3>
          <RenderComments comments={props.dish?.comments}/>
        </div>
      </div>
    </div>
  );
};
export default DishDetail;
