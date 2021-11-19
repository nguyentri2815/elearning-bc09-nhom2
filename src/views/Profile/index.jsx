import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UserProfile from "./UserProfile";
import ImgUser from "../../assets/img/dakProfile.png";

import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@material-ui/core";
import CourseProfile from "./CourseProfile";
import { useSelector } from "react-redux";
// Materia Tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
//  //Materia Tab

export default function Profile() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const me = useSelector((state) => state.me);
  return (
    <div style={{ backgroundColor: "#eeeded" }}>
      <Header />
      <section className="profile">
        <div className="tabSection">
          <div className="tabLeft">
            <div className="border-avatar">
              <div className="profile-avatar">
                <img src={ImgUser} />
              </div>
              <div className="user-name">
                <h3>My Name</h3>
                <p>{me ? me.hoTen : "No Name"}</p>
              </div>

              <div className="bottom-line"></div>
            </div>

            <Tabs
              className="tabs"
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
            >
              <Tab
                className="info-left"
                label="Thông Tin Tài Khoản"
                {...a11yProps(0)}
              />
              <Tab
                className="info-left"
                label="Khóa Học Ghi Danh"
                {...a11yProps(1)}
              />
            </Tabs>
          </div>
          <div className="tabRight">
            <div className="wallpaper">
              <TabPanel variant="div" value={value} index={0}>
                <div className="table-header">
                  <h3>Thông tin tài khoản</h3>
                  <p>Xem thông tin hoặc chỉnh sửa thông tin của bạn</p>
                  <div className="bottom-line"></div>
                </div>

                <UserProfile />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="table-header">
                  <h3>Khóa học đã ghi danh</h3>
                  <p>Thông tin về khóa học bạn đã ghi danh</p>
                  <div className="bottom-line"></div>
                </div>

                <CourseProfile />
              </TabPanel>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
