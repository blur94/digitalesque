import {
  Box,
  Container,
  Divider,
  Flex,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import CImage1 from '@/assets/img04.jpg';
import CImage2 from '@/assets/img05.jpg';
import CImage3 from '@/assets/img06.jpg';
import { IconPlus } from '@tabler/icons-react';

const data = [
  { title: 'Digital Advisory', body: '', image: CImage1.src },
  { title: 'Data Science Consulting', body: '', image: CImage2.src },
  { title: 'Digital Culture Advisory', body: '', image: CImage3.src },
];

export default function OurCapabilities() {
  const features = data.map((feature) => (
    // <Box>
    <Box
      key={feature.title}
      h={400}
      // w='100vw'
      // p='xl'
      pos='relative'
      sx={{
        backgroundImage: `url(${feature.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Flex
        justify='space-between'
        // px={10}
        sx={{
          background: 'black',
          filter: `drop-shadow(-18px -18px 10px )`,
          width: '90%',
        }}
        align='center'
        // px='md'
        w='100%'
        pos='absolute'
        bottom={0}
      >
        <Text fz={25} fw={500} color='white'>
          {feature.title}
        </Text>
        <IconPlus color='white' />
      </Flex>
      <Text fz='md' mt='sm'>
        {feature.body}
      </Text>
    </Box>
  ));

  return (
    <Box mt={50} mb={50}>
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
          breakpoints={[{ maxWidth: 'md', cols: 1 }]}
        >
          {features}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
