import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DevicesIcon from '@material-ui/icons/Devices';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ maxWidth: false, disableGutter:true }} />
        <DevicesIcon style={{ fontSize: 40 }}/>

      </Container>
    </React.Fragment>
  );
}