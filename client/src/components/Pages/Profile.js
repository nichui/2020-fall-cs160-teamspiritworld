import React, {Component} from 'react';
import '../../css/styles.css';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import {Formik} from 'formik';
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Profilepage extends Component {
    render() {
        return (
            <h1>hello</h1>
        );
    }
}

export default Profilepage
