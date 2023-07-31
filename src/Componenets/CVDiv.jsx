import React, { Component } from "react";
import "./../Styles/cvdiv.css";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineCompass,
} from "react-icons/ai";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { PiGearBold } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
class CVDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="paper">
        {this.props.data.name && (
          <div className="Gi">
            <h2>{this.props.data.name}</h2>
            <div className="contact">
              <div className="e-mail">
                {this.props.data.age && <AiOutlineMail className="svg" />}
                <p>{this.props.data.age}</p>
              </div>
              <div className="phone">
                {this.props.data.phone && <AiOutlinePhone className="svg" />}
                <p>{this.props.data.phone}</p>
              </div>
              <div className="location">
                {this.props.data.location && (
                  <AiOutlineCompass className="svg" />
                )}
                <p>{this.props.data.location}</p>
              </div>
            </div>
          </div>
        )}
        {this.props.Edu.institute && (
          <div className="Edu">
            <div className="title">
              <LiaGraduationCapSolid className="svg" />
              <h3>Education</h3>
            </div>
            <h3>{this.props.Edu.institute}</h3>
            <div className="info">
              <h4>{this.props.Edu.degree}</h4>
              <div className="dates">
                {this.props.Edu.startDate && (
                  <div>
                    <b>From:</b> {this.props.Edu.startDate}
                  </div>
                )}
                {this.props.Edu.endDate ? (
                  <div>
                    <b>To:</b> {this.props.Edu.startDate}
                  </div>
                ) : this.props.Edu.startDate ? (
                  <div>
                    <b>Till Now</b>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}
        {this.props.Exp.company && (
          <div className="Exp">
            <div className="title">
              <PiGearBold className="svg" />
              <h3>Expriences</h3>
            </div>
            <h3>{this.props.Exp.company}</h3>
            <div className="info">
              <h4>{this.props.Exp.position}</h4>
              <div className="dates">
                {this.props.Exp.startDate && (
                  <div>
                    <b>From:</b> {this.props.Exp.startDate}
                  </div>
                )}
                {this.props.Exp.endDate ? (
                  <div>
                    <b>To:</b> {this.props.Exp.startDate}
                  </div>
                ) : this.props.Exp.startDate ? (
                  <div>
                    <b>Till Now</b>
                  </div>
                ) : null}
              </div>
            </div>
            {this.props.Exp.responsibilties && (
              <div className="resps">
                <h4>Responsibilties:</h4>
                <p>{this.props.Exp.responsibilties}</p>
              </div>
            )}
            {/* ---------------------------------- */}
            {this.props.Exp.number === "2" && (
              <div className="section2">
                <h3>{this.props.Exp.company1}</h3>
                <div className="info">
                  <h4>{this.props.Exp.position1}</h4>
                  <div className="dates">
                    {this.props.Exp.startDate1 && (
                      <div>
                        <b>From:</b> {this.props.Exp.startDate1}
                      </div>
                    )}
                    {this.props.Exp.endDate1 ? (
                      <div>
                        <b>To:</b> {this.props.Exp.startDate1}
                      </div>
                    ) : this.props.Exp.startDate1 ? (
                      <div>
                        <b>Till Now</b>
                      </div>
                    ) : null}
                  </div>
                </div>
                {this.props.Exp.responsibilties1 && (
                  <div className="resps">
                    <h4>Responsibilties:</h4>
                    <p>{this.props.Exp.responsibilties1}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
export default CVDiv;
