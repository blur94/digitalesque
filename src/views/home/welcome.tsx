import { Container, Divider, Title, createStyles } from '@mantine/core';

const useStyles = createStyles({})

export default function Welcome() {
  const  { theme } = useStyles()
  return (
    <Container mt={300} mb={100}>
      <Title order={1} fz={70} sx={{
        [theme.fn.smallerThan('sm')]: {
          fontSize: '40px',
        }
      }}>
        The Digital Transformation Agency
      </Title>
      
    </Container>
  );
}
