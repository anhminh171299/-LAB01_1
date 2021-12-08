import React, { useState } from "react";
import { DEPARTMENTS, ROLE, STAFFS } from "../shared/staffs";
import dateFormat from "dateformat";
import "./staff.css";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";

import {
  Card,
  ModalHeader,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaff({ staff }) {
  const newSf = localStorage.getItem("newStaff");
  return (
    <div className="col-xs-6 col-md-4 col-lg-2" id="welcomeMessage">
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

function StaffList(props) {
  const [name, setName] = useState("");
  const [doB, setDoB] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [annualLeave, setAnnualLeave] = useState("");
  const [overTime, setOverTime] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submit = () => {
    const newStaff = {
      name,
      doB,
      salaryScale: "",
      startDate,
      department,
      annualLeave,
      overTime,
      image: "/assets/images/alberto.png",
    };
    props.onAddStaff(newStaff);
    // localStorage.setItem("newStaff", "Bepatient");
    // const newSf = localStorage.getItem("newStaff");
    // console.log({ newSf });
    // setData([...data, newStaff]);
  };

  return (
    <div className="container">
      <h3>Nhân viên</h3>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Thêm nhân viên mới
        </Button>
        <Modal isOpen={show} onExit={handleClose} animation={true}>
          <ModalHeader toggle={handleClose}>Modal title</ModalHeader>
          <ModalBody>
            <Form id="contactForm">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tên nhân viên</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tên nhân viên"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ngày sinh</Form.Label>
                <Form.Control
                  type="date"
                  value={doB}
                  onChange={(e) => setDoB(e.target.value)}
                  placeholder="Ngày sinh"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ngày vào công ty</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Ngày vào công ty"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phòng Ban</Form.Label>
                <Form.Select
                  className="form-control"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="Phòng Ban"
                >
                  <option value="Dept01">Sale</option>
                  <option value="Dept02">HR</option>
                  <option value="Dept03">Marketing</option>
                  <option value="Dept04">IT</option>
                  <option value="Dept05">Finance</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Số ngày nghỉ còn lại</Form.Label>
                <Form.Control
                  type="number"
                  value={annualLeave}
                  onChange={(e) => setAnnualLeave(e.target.value)}
                  placeholder="Số ngày nghỉ còn lại *Nhập số"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Số ngày đã làm thêm</Form.Label>
                <Form.Control
                  type="number"
                  value={overTime}
                  onChange={(e) => setOverTime(e.target.value)}
                  placeholder="Số ngày đã làm thêm *Nhập số"
                />
              </Form.Group>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={submit}>
              Thêm
            </Button>{" "}
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      <hr />
      <div className="row">
        {props.staffs.map((staff) => (
          <RenderStaff key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}
export default StaffList;
