import React, { useState } from "react";
// import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';
import dateFormat from "dateformat";
import "./staff.css";
import { Card, ButtonGroup, Button } from "reactstrap";

function RenderMenuItem({ staff }) {
  const LuongCoBan = 3000000;
  const LuongLamThem = 200000;
  const Luong = parseInt(
    staff.salaryScale * LuongCoBan +
      (staff.overTime - staff.annualLeave) * LuongLamThem
  );
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Card className="pay-box">
        <h3>{staff.name}</h3>
        <br />
        <p>Mã nhân viên: {staff.id}</p>
        <p>Hệ số lương: {staff.salaryScale}</p>
        <p>Số giờ làm thêm: {staff.overTime}</p>
        <p>Lương: {Luong}</p>
        <br />
      </Card>
    </div>
  );
}
const Menu = (props) => {
  const [staffs, setStaffs] = useState(props.staffs);
  const onSort = (type) => {
    if (type === "id") {
      setStaffs([...props.staffs].sort((a, b) => a.id - b.id));
      return;
    } else if (type === "salary") {
      const sorts = [...props.staffs].sort((a, b) => {
        const LuongCoBan = 3000000;
        const LuongLamThem = 200000;
        const salaryA = parseInt(
          a.salaryScale * LuongCoBan +
            (a.overTime - a.annualLeave) * LuongLamThem
        );
        const salaryB = parseInt(
          b.salaryScale * LuongCoBan +
            (b.overTime - b.annualLeave) * LuongLamThem
        );
        return salaryB - salaryA
      });
      setStaffs(sorts)
    }
  };

  return (
    <div className="container">
      <div className="container">
        <h3>Bảng lương</h3>
        <br />
        <p>Sắp xếp theo : </p>
        <div className = "select">
          <Button variant="secondary" onClick={() => onSort("id")}>
              ID  
          </Button>
          
          <Button variant="secondary" onClick={() => onSort("salary")}>
              Mức lương  
          </Button>
          </div>
        <hr />
        <div className="row">
          {staffs.map((staff) => (
            <RenderMenuItem key={staff.id} staff={staff} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Menu;
