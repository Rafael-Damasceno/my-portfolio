import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { useTranslation } from 'react-i18next';

const cardsData = [
  {
    icon: <SchoolIcon fontSize="large" />,
    titleKey: "educação",
    textKey: "estudo",
  },
  {
    icon: <WorkIcon fontSize="large" />,
    titleKey: "experiencia",
    textKey: "ramo",
  },
];

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

interface AnimatedCardProps {
  direction: string;
  animate: boolean;
}

const AnimatedCard = styled(Card)<AnimatedCardProps>(({ direction, animate, theme }) => ({
  minWidth: 275,
  textAlign: 'center',
  border: '1px solid #ccc',
  backgroundColor: 'transparent',
  animation: animate ? `${direction === 'left' ? slideInFromLeft : slideInFromRight} 0.5s ease-out` : 'none',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
}));

const StyledCard = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation(); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.1 }
    );
  
    const currentRef = sectionRef.current;
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} id="about">
      <Grid container spacing={2} justifyContent="center" pb={5}>
        {cardsData.map((card, index) => (
          <Grid item key={index}>
            <AnimatedCard direction={index % 2 === 0 ? 'left' : 'right'} animate={animate}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                  {card.icon}
                </Box>
                <Typography variant="h5" component="div">
                  {t(card.titleKey)} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(card.textKey)} 
                </Typography>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StyledCard;
