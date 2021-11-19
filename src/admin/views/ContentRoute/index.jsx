import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import CourseManagement from '../CourseManagement';
import AddEdit from '../AddEdit';

ContentRoute.propTypes = {
    
};

function ContentRoute(props) {
    let { namepage } = useParams();
    return (
        <>
            {namepage === "course" ? <CourseManagement/> :namepage === "addEdit" ?<AddEdit/>: "chưa biết"}
        </>
    );
}

export default ContentRoute;