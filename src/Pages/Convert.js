import React from 'react';
import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  MenuItem,
  Paper,
  Select,
  TextField,
  withStyles,
} from '@material-ui/core';
import '../App.css';
import axios from 'axios';


const getData = async () => {
  const query = await axios('http://www.floatrates.com/daily/thb.json');
  return query.data;
}


const App = withStyles(theme=>({
  root: {
  },
}))(({ classes, ...props }) => {
  const [ state, setState ] = React.useState({
    fetched: false,
    data: {},
    currency: "usd",
    amount: 1,
  })
  
  const sortCurrency = () => Object.keys(state.data)
    .map(key=>({ ...state.data[key], key }))
    .sort((a,b)=>(a.name.localeCompare(b.name)))
  const getTHB = () => {
    const current = state.data[ state.currency ];
    return (state.amount/current.rate).toFixed(2);
  }
  const handleChange = key => ({ target }) => setState(s=>({ ...s, [key]:target.value }));
  
  React.useEffect(()=>{
    getData()
      .then(data=>setState(s=>({ ...s, data, fetched:true })))
  }, [])
  
  return state.fetched
    ? (<Container maxWidth="sm">
      <Box my={10}>
        <Paper>
          <Box p={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Amount"
              type="number"
              value={state.amount}
              onChange={handleChange('amount')}
            />
            <Box mb={2} />
            <Select variant="outlined" value={state.currency} onChange={handleChange('currency')} fullWidth>
            { sortCurrency().map(currency=>(<MenuItem key={currency.key} value={currency.key}>{currency.name}</MenuItem>)) }
            </Select>
            <Box mb={2} />
            <TextField
              fullWidth
              variant="outlined"
              label="Thai baht"
              type="number"
              value={getTHB()}
              disabled
            />
          </Box>
        </Paper>
      </Box>
    </Container>)
    : (<Backdrop open={true}>
      <CircularProgress style={{color:"white"}} />
    </Backdrop>) ;
})

export default App;
