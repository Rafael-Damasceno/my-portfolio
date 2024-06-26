import React from "react";
import styled from "@emotion/styled";
import { Container, Divider, Typography } from "@mui/material";
import GridContainer from "../../../../components/StyledButton/StyledMiniCards";
import StyledCard from "../../../../components/StyledCard/StyledCard";
import { useTranslation } from "react-i18next";

const StyledAbout = styled.div(() => ({
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",  
}));

const About = () => {

const { t } = useTranslation();

  return (
    <>
      <StyledAbout id="about">
        <Container maxWidth="lg">
          <Typography color="primary" variant="h3" textAlign="center" pb={2} pt={4}>
             {t("sobre")}
          </Typography>

          <StyledCard />

          <Typography color="primary" align="justify" pb={2} fontSize={16}>
          {t("bio")}
          </Typography>

          <Divider />
          <div id="skills">
            <Typography color="primary" variant="h3" textAlign="center" pb={2} pt={4}>
              Skills
            </Typography>
            <GridContainer />
          </div>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
