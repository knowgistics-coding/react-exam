import React from 'react';
import {
  Box,
  Container,
  MenuItem,
  Paper,
  Select,
  TextField,
  withStyles,
} from '@material-ui/core';

const Q3 = withStyles(theme=>({
  spacing: {
    "&:not(:last-child)": {
      marginBottom: theme.spacing(2),
    }
  },
}))(({ classes, ...props }) => {
  const [ state, setState ] = React.useState({
    title: "นาย",
    phone: "",
  })
  
  const handleChange = key => ({ target }) => setState(s=>({ ...s, [key]:target.value }));
  
  return (<Container maxWidth="sm">
    <Box py={5}>
      <Paper>
        <Box p={3}>
          <Select className={classes.spacing} fullWidth variant="outlined" value={state.title} onChange={handleChange('title')}>
            { ["นาย","นาง","นางสาว","อื่นๆ"].map(label=><MenuItem value={label} key={label}>{label}</MenuItem>) }
          </Select>
          { state.title==="อื่นๆ" && <TextField
            fullWidth
            variant="outlined"
            label="คำนำหน้าอื่นๆ โปรดระบุ"
            className={classes.spacing}
          /> }
          <TextField
            fullWidth
            variant="outlined"
            label="ชื่อ"
            className={classes.spacing}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="สกุล"
            className={classes.spacing}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="โทรศัพท์"
            className={classes.spacing}
            error={state.phone.length<9}
            helperText={state.phone.length<9 && "เบอร์โทรศัพท์ต้องไม่น้อยกว่า 9 หลัก"}
            value={state.phone}
            onChange={handleChange('phone')}
          />
        </Box>
      </Paper>
    </Box>
  </Container>)
})

export default Q3;