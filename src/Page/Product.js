//for animation on scroll
import "./Component/AOS.js";

import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BuildIcon from "@material-ui/icons/Build";

// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Grid from "@material-ui/core/Grid";
// import productData from "../Data/productData";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: 'url("/img/stone.jpg")',
    padding: theme.spacing(8, 0, 6),
    color: "white",
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      boxShadow: "0 0 5px 2px",
    },
  },

  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Product() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Product
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Bestile Ceramics's product is best known for its competitive price
              and high quality.
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}
        <p
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "1.5em",
          }}
        >
          Coming Soon..
          <BuildIcon />
        </p>
        {/* <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {productData.map((product, key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.src}
                    title={product.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography>{product.desciption}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> */}
      </main>
    </React.Fragment>
  );
}

export default Product;
