import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PostList from '../components/posts'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '../components/Container'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
}));

const Index = () => {
  const classes = useStyles()

  return (
    <Container title="Homepage">
      <Grid container spacing={3} wrap="nowrap">
        <Grid item xs={9} >
          <Paper className={classes.paper}>
            <PostList />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1">
              สวัสดี
              </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Index
