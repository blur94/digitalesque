import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Box, Container, Group, Text } from '@mantine/core';
import BannerCarousel from '@/components/banner';
import withLayout from '@/layouts/appLayout';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  return (
    <Container p='md' fluid>

      <Group mt={70} sx={{display: 'flex', justifyContent: 'center'}}>
        <Box w={1000} >
          <BannerCarousel />
        </Box>
      </Group>
    </Container>
  );
}

export default withLayout(Home)
