import { Card , CardBody , CardTitle } from "reactstrap";
const MenuItem = props => {

    return (
        <div>
       
             <Card
                    style={{
                        width:'40%',
                        margin:'10px'
                    }}
                >
                <img
                    alt={props.dish.name}
                    src={props.dish.image}
                />
                <CardBody>
                    <CardTitle style={{
                        cursor:'pointer'
                    }} tag="h5" onClick={props.onDishSelect}>
                    {props.dish.name}
                    </CardTitle>

                </CardBody>
                </Card>
          
        </div>
    );
};

export default MenuItem;