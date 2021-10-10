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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.jpg')`,
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

function Services() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.hero}>{/* <Box>Blogs</Box> */}</Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle} align="center">
          Programming Blogs
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://cdn.dribbble.com/users/21351/screenshots/197009/logo_preview.png?compress=1&resize=400x300"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Six Revisions
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    I wouldn’t call Six Revisions a classical web development
                    blog anymore, rather than a major news site for developers.
                    Six Revisions publishes practical and useful articles for
                    web developers and designers as well. Articles are published
                    on a regular basis every 2-5 days.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Srinivass Talaulikar
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      September 4, 2021
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
                  image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/08/33f720502a11e59e72391aa537f5c9/pythonlearn_thumbnail_1x1.png?auto=format%2Ccompress&dpr=1"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Specky Boy
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The Specky Boy blog calls itself a design magazine. Paul
                    Andrew – the publisher of Specky Bloy – not only focuses on
                    design resources but also provides useful insights on the
                    latest web technologies.The blog is definitely a great
                    source for staying up-to-date.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Sakshi Palekar
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      September 4, 2021
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
                  image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    WebResourcesDepot
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    WebResourcesDepot is a great web development blog offering
                    new posts every day. Developers will definitely find some
                    great content here. Only focuses on design resources but
                    also provides useful insights on the latest web
                    technologies. It’s definitely a blog to follow.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Harshali Kandolkar
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      September 4, 2021
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
                  image="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/13649/0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Social-d385a3cca01699556490f88baa50d00a.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Smashing Magazine
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Smashing Magazine is another well-known news site, which
                    cannot be overlooked. With new articles every other day it
                    offers you great resources about HTML, CSS,
                    JavaScript-related topics.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Tejas Zambaulikar
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      September 4, 2021
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
                    Coding Horror
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Coding Horror is a great blog resource from Jeff Atwood. It
                    offers great insights on the development of software
                    engineering. You’ll get loads of great tips and resources
                    from Jeff sharing his experiences.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Sakshi Palekar
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      September 4, 2021
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
                  image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Scotch.io
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Scotch.io is an aspiring site publishing articles,
                    tutorials, videos about AngularJS, node, JavaScript,
                    Bootstrap and a lot more. It’s definitely a place to go when
                    looking for some new inspiration or development resources.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Srinivass Talaulikar
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      September 4, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default Services;
