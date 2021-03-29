// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// function App() {
//   const classes = useStyles();
//   console.log(process.env.REACT_APP_URL_API)
//   return (
//     <Container>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default App;

import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';
import Routes from './routes';

function App() {
  console.log(process.env.REACT_APP_URL_API)
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;