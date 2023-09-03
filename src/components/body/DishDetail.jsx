import { Card , CardBody , CardTitle ,CardText } from "reactstrap";
import LoadComments from "./LoadComments";
const DishDetail = props => {
    return (
        <div>
             <Card
                style={{
                    margin:'10px'
                }}
                >
                <img
                    alt={props.dish.name}
                    src={props.dish.image}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    {props.dish.name}
                    </CardTitle>
                   
                    <CardText>
                    <p>{props.dish.description}</p>
                    <p>{props.dish.category}</p>
                    <p>{props.dish.price}</p>
                    </CardText>

                <hr />
                <LoadComments comments={props.comment} />
                </CardBody>
                </Card>
        </div>
    );
};

export default DishDetail;