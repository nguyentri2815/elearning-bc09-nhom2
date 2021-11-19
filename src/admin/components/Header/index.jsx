import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import EmailIcon from "@mui/icons-material/Email";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import React from "react";
import {
    Button, Dropdown, DropdownButton, Figure, Nav,
    Navbar
} from "react-bootstrap";
Header.propTypes = {};

function Header({toggleSideMenu}) {
    const renderAvatar = () => (
        <Figure className="m-0">
          <Figure.Image
            width={50}
            height={50}
            alt="avatar-admin"
            src="/img/user.png"
            className="mb-0"
          />
        </Figure>
      );
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="fixed-top sb-topnav navbar navbar-expand px-2 py-0"
      >
        {/* <div className="d-flex justify-content-between"> */}

        <Navbar.Brand href="#home" className="me-md-5 pe-sm-4">
          E-Learning
        </Navbar.Brand>
        <Button
          variant="outline-secondary"
          className="btn-sm ms-md-5 ms-0"
          onClick={toggleSideMenu}
        >
          <ViewWeekIcon />
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="align-items-center justify-content-end"
        >
          <Nav>
            <DropdownButton variant="dark" title={<CircleNotificationsIcon />}>
              <Dropdown.ItemText>Nulla vitae elit libero</Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              variant="dark"
              title={<EmailIcon />}
              className="mx-1"
            >
              <Dropdown.ItemText>Nulla vitae elit libero</Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="dark" title={renderAvatar()}>
              <Dropdown.ItemText>
                <Figure>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="avatar-admin"
                    src="./img/user.png"
                  />
                  <Figure.Caption>Nulla vitae elit libero</Figure.Caption>
                </Figure>
              </Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
        {/* </div> */}
      </Navbar>
    </>
  );
}

export default Header;
