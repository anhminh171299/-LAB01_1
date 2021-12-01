import React from "react";
// import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';
import dateFormat from "dateformat";
import "./staff.css";
import { Card } from "reactstrap";


const RenderLeader = ({ department }) => {
    return (
        <div className='col-12 col-md-6 col-lg-4'>
           
            <Card className='department-box'>
                
                <h3>{department.name}</h3>
                <br />
                <p>Số lượng nhân viên: {department.numberOfStaff}</p>
                <br />
                
            </Card>
        </div>
    )
}

function About(props) {
    return (
        <div className="container">
           <div className="container" >
      <h3>Phòng Ban</h3>
      <hr />
      <div className="row">
        {props.departments.map((department) => (
          <RenderLeader key={department.id} department={department} />
        ))}
      </div>
    </div>
    </div>
    );
}

export default About;