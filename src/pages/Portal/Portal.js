import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://mysynergy.com/wp-content/uploads/2018/08/bigstock-Businesspeople-discussing-toge-170099096-1200x480.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const Portal = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.hero}>
        <Box>Career Guidance</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h3" className={classes.blogTitle} align="center">
          Internship
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.ndtv.com/education/cache-static/media/presets/625X400/article_images/2020/5/12/internshala_650x400_41491816449.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Internshala
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Internshala is India's no.1 internship and training platform
                    with 40000+ paid internships in Engineering, MBA, media,
                    law, arts, and other streams.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      <a href="https://internshala.com/">Learn more</a>
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="data:image/png;base64,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"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    NITI Aayog
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Undergraduate/postgraduate students or research scholars
                    enrolled in recognized universities/institutions in India
                    and abroad can apply for the NITI Aayog
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      <a href="https://www.niti.gov.in/internship">
                        Learn more
                      </a>
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.tripepismith.com/wp-content/uploads/2018/06/JUNE13NOON.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    LinkedIn
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    LinkedIn offers student internships and entry-level jobs for
                    technical, business, and creative talent. Make impact on the
                    company, team, and yourself.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      <a href="https://careers.linkedin.com/students/Internships">
                        Learn more
                      </a>
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid> */}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>

      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h3" className={classes.blogTitle} align="center">
          Job
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://cdn-images-1.medium.com/max/1200/1*YZM8sGY7ld-GrlQ5Tmy1qw.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Naukri
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Connect with 20000+ employers. Apply to millions of job
                    opportunities across top companies,industries and locations
                    on India's No.1 jo site. Apply online.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      <a href="https://careers.linkedin.com/students/Internships">
                        Learn more
                      </a>
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://image3.mouthshut.com/images/imagesp/925608849s.gif"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Monster India
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Check Out The Latest Job Openings in India for Experienced
                    Professionals on Monster. Millions of Jobs. Quick Signup &
                    Apply. Jobs Across Industries.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <a href="https://www.monsterindia.com/">Learn more</a>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p"></Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="data:image/png;base64,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"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Shine
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Shine.com is India's Leading Online Job and Recruitment
                    Portal - Search and Apply for Latest Job Vacancies across
                    Top Companies in India
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      <a href="https://www.shine.com/">Learn more</a>
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid> */}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>

      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h3" className={classes.blogTitle} align="center">
          Freelancing
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i1.wp.com/academiamag.com/wp-content/uploads/2020/03/FREELANCER-LOGO.jpg?fit=1200%2C1200&ssl=1"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Freelancer
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Find and hire top freelancers, web developers and designers
                    inexpensively. World's largest marketplace of 50m. Receive
                    quotes in seconds.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      <a href="https://www.freelancer.in/">Learn more</a>
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.upwork.com/static/marketing/ui/master/img/logo-1200x630.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Upwork
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Upwork connects businesses with freelancers, independent
                    talent, and agencies around the globe. Where companies and
                    freelancers work together.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      <a href="https://www.upwork.com/">Learn more</a>
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://npm-assets.fiverrcdn.com/assets/layout/fiverr-og-logo.99c4dbf.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    fiverr
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Fiverr's mission is to change how the world works together.
                    Fiverr connects businesses with freelancers offering digital
                    services in 300+ categories.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      <a href="https://www.freelancer.in/">Learn more</a>
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid> */}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
};
export default Portal;
