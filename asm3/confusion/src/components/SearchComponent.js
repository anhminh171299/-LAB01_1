import React, { useState } from "react";
// import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';
import dateFormat from "dateformat";
import "./staff.css";
import { Card,} from "reactstrap";
import { Link } from "react-router-dom";
import { DEPARTMENTS, ROLE, STAFFS } from "../shared/staffs";

function RenderStaff({ staff }) {
  return (
    <div className="col-xs-6 col-md-4 col-lg-2">
      <div className="staff-name">
        <Card>
          <Link to={`/staff/${staff.id}`}>
            <img src={staff.image} />
            <p>{staff.name}</p>
          </Link>
        </Card>
      </div>
    </div>
  );
}

function Search() {
  const search =  window.location.search.split("=") 
  console.log(search[1])
  const data = STAFFS.filter(item=>item.name.includes(search[1]))
  return (
    <div className="container">
      <h3>Nhân viên</h3>
      <hr />
      <div className="row">
        {data.map((staff) => (
          <RenderStaff key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}
export default Search;