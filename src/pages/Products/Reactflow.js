import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



export const Reactflow = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
       Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            ROADMAP
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              PATHWAY
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Here's a perfect roadmap to learn the trending technologies and
              subjects in a organised and systematic manner from scratch.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center"></Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {/* {cards.map((card) => ( */}



            <Grid item key={1} >
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                 image="data:image/png;base64,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"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    HTML
                  </Typography>
                  <Typography>
                  HTML is the standard markup language for Web pages. With HTML you can create your own Website. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.
                  </Typography>
                </CardContent>
                <CardActions>
                <Link to="/course">
                  <Button size="small" color="primary">
                    View
                  </Button>
                  </Link>
                  {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={1} >
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                 image="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    CSS
                  </Typography>
                  <Typography>
                  Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page — your web pages can feel like works of art!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/course">
                  <Button size="small" color="primary">
                    View
                  </Button>
                  </Link>
                  {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                </CardActions>
              </Card>
            </Grid>
            

            <Grid item key={1} >
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="data:image/png;base64,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"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    JavaScript
                  </Typography>
                  <Typography>
                  JavaScript is a fun and flexible programming language. It’s one of the core technologies of web development and can be used on both the front-end and the back-end.
                  </Typography>
                </CardContent>
                <CardActions>
                <Link to="/course">
                  <Button size="small" color="primary">
                    View
                  </Button>
                  </Link>
                  {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                </CardActions>
              </Card>
            </Grid>
            
            

            {/* ))} */}
          </Grid>
        </Container>
      </main>

      
    </React.Fragment>



  );
};

