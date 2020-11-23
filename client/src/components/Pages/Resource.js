import React, { Component, useEffect,useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbaruser from "../Layout/NavbarUser";
import { getResource} from '../../actions/resourceAction';
import  '../../css/styles.css'
import {Container,Row} from 'reactstrap';

const Resource = ({match}) => {
    const [item] = useState({})
    const {slug} = match.params;
    useEffect(()=> {
        loadSingleResource();
    }, []);

    const loadSingleResource = () => 
        getResource(slug)
    return <>{JSON.stringify(item)}</>;
}

export default Resource;
