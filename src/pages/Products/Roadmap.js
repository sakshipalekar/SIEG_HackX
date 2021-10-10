import React from "react";
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
// import Link from "@material-ui/core/Link";
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Reactflow} from "./Reactflow";

export const Roadmap = () => {
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
              ROADMAP
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
          <Grid container spacing={4}>
            {/* {cards.map((card) => ( */}

            <Grid item key={0} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="data:image/jpeg;base64,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"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Web Development
                  </Typography>
                  <Typography>
                  Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
                    </Typography>
                  </CardContent>
                <CardActions>
                  <Link to = '/flow'>
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

            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Machine Learning
                  </Typography>
                  <Typography>
                  Machine learning is the study of computer algorithms that can improve automatically through experience and by the use of data.It focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.
                  </Typography>
                </CardContent>
                <CardActions>
                <Link to = '/flow'>
                  <Button size="small" color="primary">
                    View
                  </Button></Link>
                  {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                </CardActions>
              </Card>
            </Grid>
            

            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://www.joshtalks.com/joshkosh/wp-content/uploads/2018/12/Content-writer-1068x561.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Content Writing
                  </Typography>
                  <Typography>
                  Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes. With content, businesses can attract leads and foster positive connections with their audience, ultimately pushing them down the sales funnel. 
                  </Typography>
                </CardContent>
                <CardActions>
                <Link to = '/flow'>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  </Link >
                  {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                </CardActions>
              </Card>
            </Grid>
            
            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://lh3.googleusercontent.com/03O4FoB6nCkdguur9OVO1WHOQVgeCBx_cxECB_eQblmLLH3XV4wkS-9JFbWJWqzrnE3Nw2u0W5Tl3T_uZUfJnB0T69PGHw7XM2Kyfn1ogI4YmXn2mkf3dUngYvAaNI6PxI0wazAc"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    UI-UX Designing
                  </Typography>
                  <Typography>
                  The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction.User experience design is the process of supporting user behavior through usability, usefulness, and desirability provided in the interaction with a product.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                </CardActions>
              </Card>
            </Grid>
            
            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmEvW3eRi_Hxy3GoMu_FsRnxKbNIbtflRgg&usqp=CAU"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Product Management
                  </Typography>
                  <Typography>
                  Product management is an organisational function within a company dealing with new product development, business justification, planning, verification, pricing, product launch, and marketing of a product 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                </CardActions>
              </Card>
            </Grid>
            
            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33IuFCA32HXBjrZy8vy_kmjg44pcsJ5K82A&usqp=CAU"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Data Analytics
                  </Typography>
                  <Typography>
                  Data analysis is a process of inspecting, cleansing, transforming, and modelling data with the goal of discovering useful information, informing conclusions, and supporting decision-making.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
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
}

