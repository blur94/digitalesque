import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Container, Divider, Group, Text } from "@mantine/core";
import BannerCarousel from "@/components/banner";
import withLayout from "@/layouts/appLayout";
import Welcome from "@/views/home/welcome";
import TextUnderBanner from "@/components/textUnderBanner";
import OurCapabilities from "@/components/ourCapabilities";
import Clientele from "@/components/clientele";
import Insights from "@/components/insights";
import HeadMeta from "@/components/head";
import { aboutClientele } from "@/static/clientele";

function About() {
  return (
    <Box>
      <HeadMeta pageName="The Company" />
      <Box p="md">
        <Group mt={70} sx={{ display: "flex", justifyContent: "center" }}>
          <Box w={"80vw"}>
            <Welcome title="The Company" />
            <Divider my={20} size="md" color="black" />
            <BannerCarousel />

            <TextUnderBanner title="We are a digital transformation consultancy and engineering company that delivers cutting-edge solutions for ambitious companies, brands, and founders." />
          </Box>
        </Group>
        H
      </Box>
      <Box>
        <OurCapabilities />
      </Box>

      <Group mt={70} sx={{ display: "flex", justifyContent: "center" }}>
        <Box w="80vw">
          <Clientele title="Digitalesque has a dedicated team of highly skilled professionals who are passionate about delivering the company’s strategy. In a supportive environment, our employees are motivated through performance management systems, and recognition approaches that reward employee contribution." data={aboutClientele} />
        </Box>
        <Box>
          {/* <Insights /> */}
        </Box>
      </Group>
    </Box>
  );
}

export default withLayout(About);
