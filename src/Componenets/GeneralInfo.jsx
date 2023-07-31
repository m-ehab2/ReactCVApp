import React, { Component } from "react";
import "./../Styles/GeneralInfo.css";
class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingForm:false,
      name: "",
      age:'',
      phone:'',
      location:''
    };

    this.ChangeName = this.ChangeName.bind(this);
    this.ChangeAge = this.ChangeAge.bind(this);
    this.ChangePhone = this.ChangePhone.bind(this);
    this.ChangeLocation = this.ChangeLocation.bind(this);
    this.handleclick=this.handleclick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ChangeName(event) {
    this.setState({ name: event.target.value },()=>this.props.getGeneralInfo(this.state));
  }
  ChangeAge(event) {
    this.setState({ age: event.target.value },()=>this.props.getGeneralInfo(this.state));
  }
  ChangePhone(event) {
    this.setState({ phone: event.target.value },()=>this.props.getGeneralInfo(this.state));
  }
  ChangeLocation(event) {
    this.setState({ location: event.target.value },()=>this.props.getGeneralInfo(this.state));
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleclick(){
    this.setState({showingForm:!this.state.showingForm});
  }
  render() {
    return (
      <div className="PanelGI">
       <button className="Butt" onClick={this.handleclick}> <h2>General Info</h2></button>
        <form onSubmit={this.handleSubmit} style={{display:`${this.state.showingForm?'block':'none'}`}} >
          <div className="fname">
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={this.ChangeName} placeholder="John Doe" />
          </div>
          <div className="fname">
            <label>E-mail</label>
            <input type="email" value={this.state.age} onChange={this.ChangeAge} placeholder="18" />
          </div>
          <div className="fname">
            <label>Phone</label>
            <input type="number" value={this.state.phone} onChange={this.ChangePhone} placeholder="0112345997" />
          </div>
          <div className="fname">
            <label>Location</label>
            <input type="text" value={this.state.location} onChange={this.ChangeLocation} placeholder="Egypt" />
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
