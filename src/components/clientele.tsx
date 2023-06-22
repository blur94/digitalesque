import {
  Box,
  Divider,
  Group,
  SimpleGrid,
  createStyles,
  Text,
  Title,
} from "@mantine/core";

const useStyles = createStyles({});

export default function Clientele({
  title,
  data,
}: {
  title: string;
  data: {
    title: string;
    description: string;
  }[];
}) {
  const { theme } = useStyles();

  return (
    <Box>
      <Text
        fz={36}
        lh={1.2}
        fw={700}
        mb={40}
        sx={{
          [theme.fn.smallerThan("sm")]: {
            fontSize: "24px",
            fontWeight: 500,
            paddingBottom: 20,
          },
        }}
      >
        {title}
      </Text>

      <Divider size={"md"} color="black" />
      <Box>
        <SimpleGrid
          cols={2}
          spacing={0}
          mt={50}
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          <Box></Box>
          <Box>
            {data.map((client, index) => {
              const isLastItem = index === data.length - 1;

              return (
                <Box key={index} my="xl">
                  <Title order={3}>{client.title}</Title>
                  <Text mb="md">{client.description}</Text>
                  <Divider
                    size={"sm"}
                    color="black"
                    display={isLastItem ? "none" : "block"}
                  />
                </Box>
              );
            })}
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
