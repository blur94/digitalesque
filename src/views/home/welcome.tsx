import { Container, Divider, Title, createStyles } from "@mantine/core";

const useStyles = createStyles({});

export default function Welcome({ title }: { title: string }) {
  const { theme } = useStyles();
  return (
    <Container mt={300} mb={100}>
      <Title
        order={1}
        fz={70}
        sx={{
          [theme.fn.smallerThan("sm")]: {
            fontSize: "40px",
          },
        }}
      >
        {title}
      </Title>
    </Container>
  );
}
