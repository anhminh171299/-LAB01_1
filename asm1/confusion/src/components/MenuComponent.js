import React, { Component } from "react";
import { Media, FormGroup, Label, Input } from "reactstrap";
import { DEPARTMENTS, ROLE } from "../shared/staffs";
import { Button, Collapse, Card, CardBody } from "reactstrap";
import dateFormat from "dateformat";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: [
        {
          id: 0,
          name: "Nguyễn Văn A",
          doB: "1999-01-01T08:59:00.000Z",
          salaryScale: 1.1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[0],
          annualLeave: 1,
          overTime: 1,
          image: '/assets/images/alberto.png',
          role: ROLE.MANAGER_STAFF
      },
      {
          id: 1,
          name: "Nguyễn Văn B",
          doB: "2000-01-01T08:59:00.000Z",
          salaryScale: 1.2,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[1],
          annualLeave: 2,
          overTime: 3,
          image: '/assets/images/alberto.png',
          role: ROLE.MANAGER_STAFF
      },
      {
          id: 2,
          name: "Nguyễn Văn C",
          doB: "2001-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[3],
          annualLeave: 4,
          overTime: 5,
          image: '/assets/images/alberto.png',
          role: ROLE.MANAGER_STAFF
      },
      {
          id: 3,
          name: "Nguyễn Văn D",
          doB: "2002-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[2],
          annualLeave: 6,
          overTime: 7,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 4,
          name: "Nguyễn Văn E",
          doB: "1999-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[2],
          annualLeave: 8,
          overTime: 1,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 5,
          name: "Nguyễn Văn F",
          doB: "2003-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[4],
          annualLeave: 9,
          overTime: 10,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 6,
          name: "Nguyễn Văn F",
          doB: "2003-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[4],
          annualLeave: 9,
          overTime: 10,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 7,
          name: "Nguyễn Văn F",
          doB: "2003-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[2],
          annualLeave: 9,
          overTime: 10,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 8,
          name: "Nguyễn Văn F",
          doB: "2003-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[3],
          annualLeave: 9,
          overTime: 10,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 9,
          name: "Nguyễn Văn F",
          doB: "2003-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[4],
          annualLeave: 9,
          overTime: 10,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 10,
          name: "Nguyễn Văn F",
          doB: "2003-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[4],
          annualLeave: 9,
          overTime: 10,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 11,
          name: "Nguyễn Văn F",
          doB: "2003-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[4],
          annualLeave: 9,
          overTime: 10,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 12,
          name: "Nguyễn Văn F",
          doB: "2003-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[4],
          annualLeave: 9,
          overTime: 10,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 13,
          name: "Nguyễn Văn F",
          doB: "2003-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[4],
          annualLeave: 9,
          overTime: 10,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 14,
          name: "Nguyễn Văn F",
          doB: "2003-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[4],
          annualLeave: 9,
          overTime: 10,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      {
          id: 15,
          name: "Nguyễn Văn F",
          doB: "2003-01-01T08:59:00.000Z",
          salaryScale: 1,
          startDate: "2019-04-30T08:59:00.000Z",
          department: DEPARTMENTS[4],
          annualLeave: 9,
          overTime: 10,
          image: '/assets/images/alberto.png',
          role: ROLE.NORMAL_STAFF
      },
      ],
      checkColum: " col-md-6 col-sm-6 col-lg-6 col-xs-12",
    };
  }
  toggle = (e, staffId) => {
    const newStaffs = this.state.staffs;
    const staffClicked = newStaffs.filter((x) => x.id === staffId)[0];
    staffClicked.collapse = !staffClicked.collapse;
    this.setState({ staffs: newStaffs });
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  render() {
    const menu = this.state.staffs.map((staffs) => {
      const className = `${this.state.checkColum} mt-4`;
      return (
        <div key={staffs.id} className={className}>
          <Media tag="li">
            <Media left middle>
              <Media object src={staffs.image} alt={staffs.name} />
            </Media>

            <div>
              <Button
                color="primary"
                onClick={(e) => {
                  this.toggle(e, staffs.id);
                }}
                style={{
                  marginBottom: "1rem",
                }}
              >
                {staffs.name}
              </Button>
              <Collapse isOpen={staffs.collapse}>
                <Card>
                  <CardBody>
                    <p> Ngày sinh: {dateFormat(staffs.doB, "dd/mm/yyyy")} </p>
                    <p> Cấp bậc lương : {staffs.salaryScale} </p>
                    <p> Ngày vào công ty:{dateFormat(staffs.startDate, "dd/mm/yyyy")}</p>
                    <p> Phòng ban : {staffs.department.name} </p>
                    <p> Chức danh : {staffs.role} </p>
                    <p> Số ngày nghỉ còn lại: {staffs.annualLeave} </p>
                    <p> Số ngày đã làm thêm: {staffs.overTime} </p>
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          </Media>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-3 offset-9 mt-2">
            <p><strong>Chọn số cột</strong></p>
            <h6>(desktop và ipad)</h6>
            <Input
              name="select"
              type="select"
              onChange={(e) => this.setState({ checkColum: e.target.value })}
            >
              <option value=" col-md6 col-sm-6 col-lg-6">2 cột</option>
              <option value=" col-md4 col-sm-4 col-lg-4">3 cột</option>
              <option value=" col-md3 col-sm-4 col-lg-3">4 cột (chỉ desktop)</option>
            </Input>
          </div>
        </div>
        <Media list className="row">
          {menu}
        </Media>
      </div>
    );
  }
}

export default Menu;
