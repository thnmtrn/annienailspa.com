import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Star from "@material-ui/icons/Star";
import HotTub from "@material-ui/icons/HotTub";
import FilterVintage from "@material-ui/icons/FilterVintage";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import { StarBorder } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Premium Product</h2>
          <h5 className={classes.description}>
            We have the biggest selection of gel lacquer, gel polish, dip powder. We use state of the line products. 
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="OPI"
              description="industry best. we carry the full line of opi products for your nails"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Gelish"
              description="one of the best gel polish colors. we have full gelish del polish and matching regular"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="DND"
              description="Vibrant matching gel and regular nail polish. over 140+ colors to choose from."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Nu Revolution"
              description="Dip powder is over 130+ colors. Ombre design. Healthy nails. Last up to 3 weeks. Although we reccomend 2 week take offs."
              icon={HotTub}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Nice Dist Co"
              description="A wide variety of scents to choose from. "
              icon={Star}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Codi"
              description="Luxury Korean beauty product. Lotion and pedicure massage lotion that will leave your skin feeling soft and hydrated."
              icon={FilterVintage}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
