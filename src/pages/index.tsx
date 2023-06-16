import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Box, Container, Text } from '@mantine/core';
import BrandCarousel from '@/components/brand';
import BannerCarousel from '@/components/banner';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Box p='md'>
      <Text>Hello World!</Text>
      {/* <BrandCarousel /> */}
      <BannerCarousel />
    </Box>
  );
}
