import React, { Component } from "react";
import "./../Styles/Education.css";
class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingForm: false,
      degree: "",
      institute: "",
      startDate: "",
      endDate: "",
    };

    this.ChangeDegree = this.ChangeDegree.bind(this);
    this.ChangeInstitute = this.ChangeInstitute.bind(this);
    this.ChangestartDate = this.ChangestartDate.bind(this);
    this.ChangeEndDate = this.ChangeEndDate.bind(this);
    this.handleclick = this.handleclick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ChangeDegree(event) {
    this.setState({ degree: event.target.value }, () =>
      this.props.getEduInfo(this.state)
    );
  }
  ChangeInstitute(event) {
    this.setState({ institute: event.target.value }, () =>
      this.props.getEduInfo(this.state)
    );
  }
  ChangestartDate(event) {
    this.setState({ startDate: event.target.value }, () =>
      this.props.getEduInfo(this.state)
    );
  }
  ChangeEndDate(event) {
    this.setState({ endDate: event.target.value }, () =>
      this.props.getEduInfo(this.state)
    );
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleclick() {
    this.setState({ showingForm: !this.state.showingForm });
  }
  render() {
    return (
      <div className="PanelGI">
        <button className="Butt" onClick={this.handleclick}>
          {" "}
          <h2>Education</h2>
        </button>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: `${this.state.showingForm ? "block" : "none"}` }}
        >
          <div className="institute">
            <label>Name of Institute</label>
            <input
              type="text"
              value={this.state.institute}
              onChange={this.ChangeInstitute}
              placeholder="Harvard/MIT"
            />
          </div>
          <div className="deg">
            <label>Type of Degree</label>
            <input
              type="text"
              value={this.state.degree}
              onChange={this.ChangeDegree}
              placeholder="B.Sc"
            />
          </div>
          <div className="Dates">
            <label>From</label>
            <input
              type="date"
              value={this.state.startDate}
              onChange={this.ChangestartDate}
            />
          </div>
          <div className="Dates">
            <label>To</label>
            <input
              type="date"
              value={this.state.endDate}
              onChange={this.ChangeEndDate}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
