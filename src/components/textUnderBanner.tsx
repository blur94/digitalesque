import {
  Container,
  Divider,
  SimpleGrid,
  Title,
  Text,
  Box,
} from "@mantine/core";

const data = [
  {
    title: "Technology",
    description:
      "Digital transformation involves using digital technologies to remake a process to become more efficient or effective. The idea is to use technology not just to replicate an existing service in a digital form, but to use technology to transform that service into something significantly better.",
  },
  {
    title: "Data",
    description:
      "Big Data is at the heart of digital transformation because it brings all the points together in one place for a more comprehensive and holistic view of the entire organization's ecosystem. Big data has to enable both the digitization and automation of operations which improves efficiency, spur innovation, and leads to new business models.",
  },
  {
    title: "Process",
    description:
      "Digital transformation requires an end-to-end mindset, a rethinking of ways to meet customer needs, seamless connection of work activities, and the ability to manage across silos going forward. Process orientation is a natural fit with these needs necessitating radical process (re)engineering.",
  },
  {
    title: "Culture",
    description:
      "The core driver of digital transformation is a digital culture because it empowers people to deliver results faster by increasing adoption, creating the right organizational alignment needed for the strategy to thrive dramatically reducing the gap between strategy and execution.",
  },
];

export default function TextUnderBanner({ title }: { title: string }) {
  const features = data.map((feature) => (
    <Box key={feature.title} p="xl">
      <Divider size="sm" color="black" />
      <Text fz={25} fw={500} mt="md">
        {feature.title}
      </Text>
      <Text fz="md" mt="sm">
        {feature.description}
      </Text>
    </Box>
  ));

  return (
    <Container mt={50} mb={50}>
      <Title order={1}>{title}</Title>
      <SimpleGrid
        cols={2}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
