import {
  Box,
  Collapse,
  Container,
  Flex,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TiTimes } from 'react-icons/ti';

import CImage1 from '@/assets/img04.jpg';
import CImage2 from '@/assets/img05.jpg';
import CImage3 from '@/assets/img06.jpg';
import { IconPlus } from '@tabler/icons-react';

const data = [
  {
    title: 'Digital Advisory',
    body: 'Our digital advisory services are to help companies and organizations achieve their goals in innovation and digital transformation in the most efficient way and stay relevant using information technology and digital channels. /n The range of IT consulting services spans from building a long-term digital innovation strategy to immediate transformations like integrations with third-party services, cloud migration, business process automation, consulting on big data, and custom software development.',
    image: CImage1.src,
  },
  {
    title: 'Data Science Consulting',
    body: 'Digitalesque renders data science consulting leveraging Machine Learning, Artificial Intelligence, and Deep Learning technologies to meet our clients’ most deliberate analytics needs. We can share and implement data science best practices to drive your decision-making with careful forecasting and effective root-cause analysis.',
    image: CImage2.src,
  },
  {
    title: 'Digital Culture Advisory',
    body: 'This involves providing training and advice on different digital areas and empowering employees to be able to work within this environment. It also includes developing a strategy that allows companies and organizations to capitalize on the digital world and changing the mindset of employees to explore the ways that technology can help improve prospects. /n Our Digital Culture specialists also help support teams to work collaboratively and to share ideas on digital strategy ensuring everyone is on board and embracing technology.',
    image: CImage3.src,
  },
];

export default function OurCapabilities() {
  const theme = useMantineTheme();
  const features = data.map((feature) => {
    const [opened, { toggle }] = useDisclosure();
    return (
      <Box
        key={feature.title}
        h={450}
        pos='relative'
        sx={{
          backgroundImage: `url(${feature.image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',

          [theme.fn.smallerThan('md')]: {
            height: '300px',
            backgroundPosition: 'top',
          },

          [theme.fn.smallerThan('sm')]: {
            height: opened ? '400px' : '200px',
          },
        }}
      >
        <Flex
          justify='space-between'
          direction='column'
          w='100%'
          sx={{
            backgroundImage: `linear-gradient(to top, #000, transparent )`,
            paddingBlockEnd: '10px',
          }}
          pos='absolute'
          bottom={0}
        >
          <Flex px={20} m={0} sx={{ justifyContent: 'space-between' }}>
            <Text fz={24} fw={400} lh={1.3} color='white'>
              {feature.title}
            </Text>
            <Box
              display={'flex'}
              sx={{
                justifyContent: 'flex-end',
              }}
            >
              {opened ? (
                <TiTimes color='white' size={25} onClick={toggle} />
              ) : (
                <IconPlus color='white' onClick={toggle} />
              )}
            </Box>
          </Flex>
          <Collapse in={opened}>
            <Text fz='sm' fw={100} px={20} color='white' lh={1.4} mt='sm'>
              {feature.body}
            </Text>
          </Collapse>
        </Flex>
      </Box>
    );
  });

  return (
    <Box mt={50} mb={50} mx={0}>
      <Container>
        <Title order={2} fz={30}>
          Our Capabilities
        </Title>
      </Container>
      <Box>
        <SimpleGrid
          cols={3}
          spacing={0}
          mt={50}
          breakpoints={[{ maxWidth: 'md', cols: 1, }]}
        >
          {features}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
