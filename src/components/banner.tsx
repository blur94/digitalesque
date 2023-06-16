import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Box,
} from '@mantine/core';
import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from 'embla-carousel-autoplay';
import { useRef } from 'react';

import Banner1 from '@/assets/img01.jpg';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(640),
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'start',
    // position: 'relative',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
    // position: 'absolute',
    bottom: theme.spacing.xl,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow='md'
      p='xl'
      radius='xs'
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
      pos='relative'
      w='100vw'
    >
      <Box pos='absolute' bottom={150}>
        {/* <Text className={classes.category} size='xs'>
          {category}
        </Text> */}
        <Title order={3} 
        className={classes.title}
        // pos='absolute'
        >
          {title}
        </Title>
      </Box>
      {/* <Button variant='white' color='dark'>
        Read article
      </Button> */}
    </Paper>
  );
}

const data = [
  {
    image:
      `${Banner1.src}`,
    title:
      'PURPOSE is to improve African lives through the digital transformation of Africa one project at a time.',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

export default function BannerCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      //   slideSize='50%'
      withIndicators
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap='xl'
      align='start'
      slidesToScroll={mobile ? 1 : 2}
      display='flex'
      
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      withControls={false}
      styles={{
        indicator: {
          width: rem(60),
          height: rem(2),
          transition: 'width 250ms ease',
          '&[data-active]': {
            backgroundColor: '#309e8e',
          },
        },

        indicators: {
            display: 'flex',
            justifyContent: 'flex-start',
            marginInlineStart: rem(60),
            marginBlockEnd: rem(40),
        },
      }}
    >
      {slides}
    </Carousel>
  );
}
