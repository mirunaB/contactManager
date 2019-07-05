import React, { Component } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";
import { async } from "q";

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  // onDeleteClick = (id, dispatch) => {
  //   //pt a comunica cu backend
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));

  //   // this.props.deleteClickHandler();
  // };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });

    //   // this.props.deleteClickHandler();
  };
  render() {
    const { id, name, email, phone } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer", fontFamily: "FontAwesome" }}
                />
                <i
                  className="fas fa-times"
                  style={{
                    cursor: "pointer",
                    float: "right",
                    color: "red",
                    fontFamily: "FontAwesome"
                  }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem",
                      fontFamily: "FontAwesome"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  // id: PropTypes
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
  // contact:PropTypes.object.isRequired
  // deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;
