import React, { Component } from "react";

class Exprience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingForm: false,
      number:'1',
      company:'',
      position:'',
      startDate:'',
      endDate:'',
      responsibilties:'',
      company1:'',
      position1:'',
      startDate1:'',
      endDate1:'',
      responsibilties1:''
    };

    this.ChangeCompany=this.ChangeCompany.bind(this);
    this.ChangePosition=this.ChangePosition.bind(this);
    this.ChangestartDate=this.ChangestartDate.bind(this);
    this.ChangeEndDate=this.ChangeEndDate.bind(this);
    this.ChangeResp=this.ChangeResp.bind(this);
    this.ChangeCompany1=this.ChangeCompany1.bind(this);
    this.ChangePosition1=this.ChangePosition1.bind(this);
    this.ChangestartDate1=this.ChangestartDate1.bind(this);
    this.ChangeEndDate1=this.ChangeEndDate1.bind(this);
    this.ChangeResp1=this.ChangeResp1.bind(this);
    this.handleclick = this.handleclick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
  }

  ChangeCompany(event) {
    this.setState({ company: event.target.value }, () =>
      this.props.getExp(this.state)
    );
  }
  ChangePosition(event) {
    this.setState({ position: event.target.value }, () =>
      this.props.getExp(this.state)
    );
  }
  ChangestartDate(event) {
    this.setState({ startDate: event.target.value }, () =>
      this.props.getExp(this.state)
    );
  }
  ChangeEndDate(event) {
    this.setState({ endDate: event.target.value }, () =>
      this.props.getExp(this.state)
    );
  }
  ChangeResp(event) {
    this.setState({ responsibilties: event.target.value }, () =>
      this.props.getExp(this.state)
    );
  }
  ChangeCompany1(event) {
    this.setState({ company1: event.target.value }, () =>
      this.props.getExp(this.state)
    );
  }
  ChangePosition1(event) {
    this.setState({ position1: event.target.value }, () =>
      this.props.getExp(this.state)
    );
  }
  ChangestartDate1(event) {
    this.setState({ startDate1: event.target.value }, () =>
      this.props.getExp(this.state)
    );
  }
  ChangeEndDate1(event) {
    this.setState({ endDate1: event.target.value }, () =>
      this.props.getExp(this.state)
    );
  }
  ChangeResp1(event) {
    this.setState({ responsibilties1: event.target.value }, () =>
      this.props.getExp(this.state)
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({number:'2'})
  }
  handleSubmit1(event) {
    event.preventDefault();
    this.setState({number:'1'})
  }
  handleclick() {
    this.setState({ showingForm: !this.state.showingForm });
  }
  render() {
    return (
      <div className="PanelGI">
        <button className="Butt" onClick={this.handleclick}>
          {" "}
          <h2>Expriences</h2>
        </button>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: `${this.state.showingForm ? "block" : "none"}` }}
        >
          <div className="fname">
            <label>Name of Company</label>
            <input
              type="text"
              value={this.state.company}
              onChange={this.ChangeCompany}
              placeholder="Google/Facebook"
            />
          </div>
          <div className="fname">
            <label>Position</label>
            <input
              type="text"
              value={this.state.position}
              onChange={this.ChangePosition}
              placeholder="Senior Developer"
            />
          </div>
          <div className="fname">
            <label>From</label>
            <input
              type="date"
              value={this.state.startDate}
              onChange={this.ChangestartDate}
            />
          </div>
          <div className="fname">
            <label>To</label>
            <input
              type="date"
              value={this.state.endDate}
              onChange={this.ChangeEndDate}
            />
          </div>
          <div className="fname">
            <label>Responsibilities</label>
            <input
              type="textarea"
              value={this.state.responsibilties}
              onChange={this.ChangeResp}
              placeholder="Manage Junior Developers-Handle Tasks-Follow up with bugs"
            />
          </div>
          {this.state.number==='1'&&<input type="submit" value="Add Another Experience" />}
        </form>
        {this.state.number==='2'&&(this.state.showingForm&&<div className="Break">-</div>)}
        {this.state.number==='2'&&
        <form
          onSubmit={this.handleSubmit1}
          style={{ display: `${this.state.showingForm ? "block" : "none"}` }}
        >
          <div className="fname">
            <label>Name of Company</label>
            <input
              type="text"
              value={this.state.company1}
              onChange={this.ChangeCompany1}
              placeholder="Google/Facebook"
            />
          </div>
          <div className="fname">
            <label>Position</label>
            <input
              type="text"
              value={this.state.position1}
              onChange={this.ChangePosition1}
              placeholder="Senior Developer"
            />
          </div>
          <div className="fname">
            <label>From</label>
            <input
              type="date"
              value={this.state.startDat1}
              onChange={this.ChangestartDate1}
            />
          </div>
          <div className="fname">
            <label>To</label>
            <input
              type="date"
              value={this.state.endDate1}
              onChange={this.ChangeEndDate1}
            />
          </div>
          <div className="fname">
            <label>Responsibilities</label>
            <input
              type="textarea"
              value={this.state.responsibilties1}
              onChange={this.ChangeResp1}
              placeholder="Manage Junior Developers-Handle Tasks-Follow up with bugs"
            />
          </div>
          <input type="submit" value="Remove" />
        </form>
    }
    </div>
    );
  }
}

export default Exprience;
