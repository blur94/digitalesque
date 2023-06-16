import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Box, Container, Text } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Box p='md'>
      <Text>Hello World!</Text>
    </Box>
  );
}
