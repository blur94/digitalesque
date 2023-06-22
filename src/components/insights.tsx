import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
  createStyles,
} from '@mantine/core';

import InImage1 from '@/assets/img07.jpg';
import InImage2 from '@/assets/img08.jpg';
import InImage3 from '@/assets/img09.jpg';
import InImage4 from '@/assets/img10.jpg';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  links: {
    color: 'white',
    textDecoration: 'none',
  },
}));

const data = [
  {
    title: 'Tuning into Africa’s digital transformation',
    image: InImage1.src,
  },
  {
    title:
      "Digital transformation in Africa: three lessons from India's experience",
    image: InImage2.src,
  },
  {
    title: 'The promises and perils of Africa’s digital revolution',
    image: InImage3.src,
  },
  {
    title:
      'Improving Africa’s digital and innovation ecosystems: five ways forward',
    image: InImage4.src,
  },
];

export default function Insights() {
  const { classes } = useStyles();

  const theme = useMantineTheme();

  const features = data.map((feature) => {
    return (
      <Grid.Col
        lg={3}
        sm={12}
        // w='100%'
        key={feature.title}
        h={450}
        pos='relative'
        sx={{
          backgroundImage: `url(${feature.image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',

          [theme.fn.smallerThan('md')]: {
            height: '300px',
            backgroundPosition: 'top',
          },

          [theme.fn.smallerThan('sm')]: {
            height: '200px',
          },
        }}
      >
        <Flex
          justify='space-between'
          direction='column'
          pos='absolute'
          bottom={0}
          px={10}
        >
          <Text fz={24} fw={400} lh={1.3} color='white'>
            {feature.title}
          </Text>

          <Link href='#' className={classes.links}>
            LEARN MORE
          </Link>
        </Flex>
      </Grid.Col>
    );
  });

  return (
    <Box mt={50} mb={50} miw="97.6vw" mx={0}>
      <Container>
        <Title order={2} fz={30} mb='xl'>
          Our Insights
        </Title>
      </Container>
      <Box>
        <Grid
          //   mt={50}
          //   grow
          //   gutter={5}
          sx={
            {
              // display: 'grid',
              // // gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              // gap: '5px', // Adjust the gap value as needed
            }
          }
        >
          {features}
        </Grid>
        {/* <SimpleGrid
          cols={4}
        //   sx={{gap: 10}}
        //   spacing='md'
          mt={50}
          breakpoints={[{ maxWidth: 'md', cols: 1, spacing: 5 }]}
        >
          {features}
        </SimpleGrid> */}
      </Box>
    </Box>
  );
}
