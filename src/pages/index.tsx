import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Box, Container, Divider, Group, Text } from '@mantine/core';
import BannerCarousel from '@/components/banner';
import withLayout from '@/layouts/appLayout';
import Welcome from '@/views/home/welcome';
import TextUnderBanner from '@/components/textUnderBanner';
import OurCapabilities from '@/components/ourCapabilities';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  return (
    <main>
      <Container p='md' fluid>
        <Group mt={70} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box w={1000}>
            <Welcome />
            <Divider my={20} size='md' color='black' />
            <BannerCarousel />

            <TextUnderBanner />
          </Box>
        </Group>
      </Container>
      <Box component='div' w='100vw'>
        <OurCapabilities />
      </Box>
    </main>
  );
}

export default withLayout(Home);
