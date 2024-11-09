import { Backdrop, Box, Container, Fade, Grid, Modal, Typography, styled } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import Background from "../../../../components/animatedbackrground/Background";
import React, { useState } from "react";
import Avatar from "../../../../assets/images/avatar.png"; 
import { useTranslation } from "react-i18next";

const StyledHero = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
    paddingBottom: "20px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0",
    paddingBottom: "0",
  },
}));

const StyledImg = styled("img")(() => ({
  width: "75%",
  borderRadius: "50%",
  border: '1px solid #0FF2B2'
}));

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCvOpen = () => setCvOpen(true);
  const handleCvClose = () => setCvOpen(false);

  const { t } = useTranslation();

  

const handleDownload = (lang) => {
    const url = lang === 'pt' ? '/pdf/Currículo_Rafael_Damasceno.pdf' : '/pdf/Currículo_Rafael_Damasceno_en.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = lang === 'pt' ? 'Currículo_Rafael_Damasceno.pdf' : 'cv_Rafael_Damasceno.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleCvClose();
};


  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Background />
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={5} container justifyContent="center">
              <Box position="relative">
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7} container direction="column" alignItems="center">
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                Rafael Damasceno
              </Typography>
              <Typography color="secondary" variant="h2" textAlign="center">
                {t('profissão')}
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={handleCvOpen}>
                    <FileDownloadIcon />
                    <Typography>DOWNLOAD CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={handleOpen}>
                    <EmailIcon />
                    <Typography>{t('contato')} </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Typography variant="h6" component="h2">
              Entre em contato comigo:
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Email:  <a href="mailto:rafaeldamascenowhy@gmail.com">Rafaeldamascenowhy@gmail.com</a>
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <a href="https://www.linkedin.com/in/rafael-damasceno-why/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <a href="https://github.com/Rafael-Damasceno" target="_blank" rel="noopener noreferrer">Github</a>
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        open={cvOpen}
        onClose={handleCvClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={cvOpen}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Typography variant="h6" component="h2">
             {t('escolha')}
            </Typography>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <StyledButton onClick={() => handleDownload('pt')}>
                <Typography color={"black"}>Português</Typography>
              </StyledButton>
              <StyledButton onClick={() => handleDownload('en')}>
                <Typography color={"black"}>Inglês</Typography>
              </StyledButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Hero;
