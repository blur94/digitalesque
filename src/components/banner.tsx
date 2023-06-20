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
import Banner2 from '@/assets/img02.jpg';
import Banner3 from '@/assets/img03.jpg';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(400),
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // position: 'relative',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    // lineHeight: 1.2,
    fontSize: rem(30),
    // marginTop: theme.spacing.xs,
    // position: 'absolute',
    // bottom: `calc(${theme.spacing.xl} * 9)`,
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
  const { classes, theme } = useStyles();

  return (
    <Paper
      shadow='md'
      p='xl'
      radius='xs'
      sx={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', }}
      className={classes.card}
      pos='relative'
      w='80vw'
      h='70dvh'
    >
      <Box pos='absolute' bottom={80} w='70vw'>
        <Text
          fz={30}
          color='white'
          fw={500}
          sx={{lineHeight: 1.2,
            [theme.fn.smallerThan('sm')]: {
              fontSize: '20px'
            }
          }}
    
        >
          {title}
        </Text>
      </Box>
    </Paper>
  );
}

const data = [
  {
    image: Banner1.src,
    title:
      'Our PURPOSE is to improve African lives through the digital transformation of Africa one project at a time.',
    category: 'nature',
  },
  {
    image: Banner2.src,
    title:
      'Our VISION is to be the premier human-centric digital transformation agency in Africa.',
    category: 'beach',
  },
  {
    image: Banner3.src,
    title:
      'Our MISSION is to offer bespoke, trusted advanced digital solutions to the challenges of individuals. businesses, and governments in Africa by transforming systems.',
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
      withIndicators
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap='xl'
      align='start'
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
          marginBlockEnd: rem(30),
        },
      }}
    >
      {slides}
    </Carousel>
  );
}
