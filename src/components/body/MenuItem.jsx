import { Card , CardBody , CardTitle } from "reactstrap";
const MenuItem = props => {

    return (
        <div>
          <div className="container">
            
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
                    <CardTitle style={{
                        cursor:'pointer'
                    }} tag="h5" onClick={props.onDishSelect}>
                    {props.dish.name}
                    </CardTitle>

                </CardBody>
                </Card>

      
            </div>
        
        </div>
    );
};

export default MenuItem;