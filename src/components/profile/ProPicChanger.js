import "antd/dist/antd.css";
 import { Modal, Button } from "antd";
import React from "react";

class ProfilePicChanger extends React.Component {
  constructor (props){
        super(props);
        this.state={
            visible: false,
            imagesArray: [
              props.spiderman,
               props.batman,
                props.poisonivy,
                 props.starfire,
                  props.wonderwoman,
                   props.greenlanturn,
                    props.hulk,
                     props.blackwidow
                    ]
        }
    }
        
    showModal = () => {
        this.setState({
        visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render(){
    const imageMapper = this.state.imagesArray.map((image, index)=>{
      return (
        <img src={image} alt={image.alt}
        onClick={()=>this.props.handleImageChange(image)}
        
      />
        )
    })
      return (
  <div className="ProPicChanger">
        <Button type="primary" onClick={this.showModal}>
         Change Picture
        </Button>
        <Modal
          title="Profile Pic Changer Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {imageMapper}
        </Modal>
      </div>
      )
  }
}

export default ProfilePicChanger;
        
    
