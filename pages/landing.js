import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import SectionCarousel from "../pages-sections/Components-Sections/SectionCarousel";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Annie's Nail Spa"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/landing-bg.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Annie's Nail Spa</h1>
              <h4>
                Best salon in town. best prices. quality products. experienced staff.
              </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href="https://anniesnailsspa6482.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-calendar-alt" />
                Book Appointment
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <SectionCarousel/>
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
