import { Component } from 'react'
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns , Modal, ModalBody, ModalFooter , Button } from 'reactstrap';
import {connect} from "react-redux";

const mapStateToProps = state=>{
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}



class Menu extends Component {
    state = {
        selectedDish:null,
        modalOpen:false,
    }
    onDishSelect = dish => {
      this.setState({selectedDish:dish,
        modalOpen:!this.state.modalOpen,
      });
      
    }
 toggleModal = () =>{
   this.setState({
     modalOpen:!this.state.modalOpen
   })
 }



  render() {
    const menu =this.props.dishes.map(item => {
      return(
        <MenuItem 
        dish = {item} 
        key={item.id}
        onDishSelect={()=>this.onDishSelect(item)}
        />
        );
    })
    let dishDetail = null;
    if(this.state.selectedDish  != null){
      const comments = this.props.comments.filter(comment => {
        return comment.dishId === this.state.selectedDish.id;

      })
      dishDetail = <DishDetail dish={this.state.selectedDish}
      comment = {comments}/>
    }
    return (
      <div className='container'>

<div className="row">
  <div className="col-lg-6">

    
  <CardColumns>
            {menu}
  </CardColumns>
  </div>
  <div className="col-lg-6">
          <Modal isOpen= {this.state.modalOpen} onClick={this.toggleModal}>
              <ModalBody>
                  {dishDetail}
              </ModalBody>
              <ModalFooter>
                <Button color="secondary"  onClick={this.toggleModal}>
                   Close
                </Button>
              </ModalFooter>
          </Modal>

  </div>
</div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Menu);
