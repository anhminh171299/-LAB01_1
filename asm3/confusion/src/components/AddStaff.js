import React, { useState } from "react";
// import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';
import dateFormat from "dateformat";
import "./staff.css";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";

function RenderAddStaff({ staff }) {
  const newStaff = {
    id: aq,
    name: a,
    doB: a,
    salaryScale: s,
    startDate: a,
    department: aa,
    annualLeave: a,
    overTime: a,
    salary: a,
    image: "/assets/images/alberto.png",
  };
  return (
    <div className="col-xs-6 col-md-4 col-lg-2">
      <div className="staff-name">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên nhân viên</Form.Label>
            <Form.Control
              type="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ngày sinh</Form.Label>
            <Form.Control
              type="password"
              value={doB}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ngày sinh"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ngày vào công ty</Form.Label>
            <Form.Control
              type="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ngày vào công ty"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phòng Ban</Form.Label>
            <Form.Control
              type="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Phòng Ban"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Số ngày nghỉ còn lại</Form.Label>
            <Form.Control
              type="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Số ngày nghỉ còn lại"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Số ngày đã làm thêm</Form.Label>
            <Form.Control
              type="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Số ngày đã làm thêm"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

function Add() {
  return (
    <div className="container">
      <img src={staff.image} />
      <p>{staff.name}</p>
      <div className="row">
        {data.map((staff) => (
          <RenderAddStaff key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}
export default Add;
