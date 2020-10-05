import React from 'react';
import {
  Box,
  Container,
  Link,
  Typography,
  withStyles,
} from '@material-ui/core';
import cover from './feature-image.jpg';

const FeatureImage = withStyles(theme=>({
  root: {
    witdh: '100%',
    position: 'relative',
    "&:before": {
      content: "''",
      display: 'block',
      paddingTop: "calc(100% / 3)",
    },
    "& img": {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
}))(({ classes, ...props }) => (<div className={classes.root}>
  <img {...props} alt="cover" />
</div>))

const Q2 = props => {
  return (<>
    <div className="container">
      <FeatureImage src={cover} />
      <Container maxWidth="md">
        <Box py={10}>
          <Typography variant="h3"><strong>Lorem Ipsum</strong></Typography>
          <Typography variant="caption" color="textSecondary" paragraph>
            <span className="content-date">01/01/2020 00:00</span>
            &nbsp;|&nbsp;
            <span className="content-author"><Link href="#">Writer</Link></span>
          </Typography>
          <Box mb={5} />
          <div className="body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Box>
      </Container>
    </div>
  </>)
}

export default Q2;