import {
  Box,
  Divider,
  Group,
  SimpleGrid,
  createStyles,
  Text,
  Title,
} from '@mantine/core';

const useStyles = createStyles({});

export default function Clientele() {
  const { theme } = useStyles();

  return (
    <Box>
      <Text fz={36} lh={1.2} fw={700} mb={40} sx={{
        [theme.fn.smallerThan('sm')]: {
          fontSize: '24px',
          fontWeight: 500,
          paddingBottom: 20,
        },
      }}>
        We have worked closely and successfully with government departments and
        major companies, and pride ourselves on meeting and exceeding our
        client’s high expectations. Here, you can find a selection of the many
        client organizations we already work closely alongside:
      </Text>

      <Divider size={'md'} color='black' />
      <Box>
        <SimpleGrid
          cols={2}
          spacing={0}
          mt={50}
          breakpoints={[{ maxWidth: 'md', cols: 1 }]}
        >
          <Box></Box>
          <Box>
            <Box>
              <Title order={3}>The Central bank of Nigeria</Title>
              <Text mb='md'>
                Set-up of the eNaira New Media Infrastructure. Built
                eNaira.gov.ng and the Web App.{' '}
              </Text>
              <Divider size={'sm'} color='black' />
            </Box>

            <Box my='xl'>
              <Title order={3}>The Central bank of Nigeria</Title>
              <Text mb='md'>
                Set-up of the eNaira New Media Infrastructure. Built
                eNaira.gov.ng and the Web App.{' '}
              </Text>
              <Divider size={'sm'} color='black' />
            </Box>

            <Box>
              <Title order={3}>The Central bank of Nigeria</Title>
              <Text>
                Set-up of the eNaira New Media Infrastructure. Built
                eNaira.gov.ng and the Web App.
              </Text>
              {/* <Divider size={'md'} color='black' /> */}
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
