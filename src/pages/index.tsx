import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Box, Container, Divider, Group, Text } from '@mantine/core';
import BannerCarousel from '@/components/banner';
import withLayout from '@/layouts/appLayout';
import Welcome from '@/views/home/welcome';
import TextUnderBanner from '@/components/textUnderBanner';
import OurCapabilities from '@/components/ourCapabilities';
import Clientele from '@/components/clientele';
import Insights from '@/components/insights';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  return (
    <Box>
      <Box p='md'>
        <Group mt={70} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box w={'80vw'}>
            <Welcome />
            <Divider my={20} size='md' color='black' />
            <BannerCarousel />

            <TextUnderBanner />
          </Box>
        </Group>
      </Box>
      <Box>
        <OurCapabilities />
      </Box>

      <Group mt={70} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box w='80vw'>
          <Clientele />
        </Box>
        <Box>
          <Insights />
        </Box>
      </Group>
    </Box>
  );
}

export default withLayout(Home);
