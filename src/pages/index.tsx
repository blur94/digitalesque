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
import { homeClientele } from "@/static/clientele";

const inter = Inter({ subsets: ['latin'] });

function Home() {
  return (
    <Box>
      <Box p="md">
        <Group mt={70} sx={{ display: "flex", justifyContent: "center" }}>
          <Box w={"80vw"}>
            <Welcome title="The Digital Transformation Agency" />
            <Divider my={20} size="md" color="black" />
            <BannerCarousel />

            <TextUnderBanner title="Our blueprint for digital transformation below gives an overview of the sequence, checklist, and guides at all levels of the organization through the journey ensuring that no area of the strategy is left unattended during the period of change:" />
          </Box>
        </Group>
      </Box>
      <Box>
        <OurCapabilities />
      </Box>

      <Group mt={70} sx={{ display: "flex", justifyContent: "center" }}>
        <Box w="80vw">
          <Clientele
            title="We have worked closely and successfully with government departments and
        major companies, and pride ourselves on meeting and exceeding our
        client’s high expectations. Here, you can find a selection of the many
        client organizations we already work closely alongside:"
        data={homeClientele}
          />
        </Box>
        <Box>
          <Insights />
        </Box>
      </Group>
    </Box>
  );
}

export default withLayout(Home);
