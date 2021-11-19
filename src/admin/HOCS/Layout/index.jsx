import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Header from "../../components/Header";

class Layout extends Component {
  render() {
    return (
      <Box>
        <Header />

        {this.props.children}

        <Box
      
        >
          <Typography variant="h5" align="center">
            Footer
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default Layout;
