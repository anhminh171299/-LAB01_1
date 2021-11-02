import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { dish } = this.props
        console.log(dish)

        const Detail = dish ?
            ( < div >
                <
                Card >
                <
                CardImg top src = { dish.image }
                alt = { dish.name }
                /> <
                CardBody >
                <
                CardTitle > { dish.name } < /CardTitle> <
                CardText > { dish.description } < /CardText> <
                /CardBody> <
                /Card> <
                /div>) : null
                const Comment = dish ?
                    (dish.comments.map((a) => {
                        return <div >
                            <
                            p > { a.comment } < /p> <
                            span > { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(a.date))) } < /span> <
                            span > { a.author } < /span> <
                            /div>
                    })) : null

                return ( <
                    div className = 'container'
                    style = {
                        { display: 'flex' } } >
                    <
                    div className = 'col-12 col-md-5 m-1' > { Detail } <
                    /div> <
                    div className = 'col-12 col-md-5 m-1' >
                    <
                    h3 > Comment Box < /h3> { Comment } <
                    /div> <
                    /div>
                )
            }
    }
    export default DishDetail;