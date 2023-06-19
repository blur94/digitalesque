import { Box, Divider, Group, SimpleGrid, Text, Title } from '@mantine/core';

export default function Clientele() {
  return (
    <Box>
      <Text fz={40} lh={1.2} fw={700} pr={200}>
        We have worked closely and successfully with government departments and
        major companies, and pride ourselves on meeting and exceeding our
        client’s high expectations. Here, you can find a selection of the many
        client organisations we already work closely alongside:
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
            <Title order={3}>The Central bank of Nigeria</Title>
            <Text>
              Set-up of the eNaira New Media Infrastructure. Built eNaira.gov.ng
              and the Web App.{' '}
            </Text>
            <Divider size={'sm'} color='black' />

            <Group>
              <Title order={3}>The Central bank of Nigeria</Title>
              <Text>
                Set-up of the eNaira New Media Infrastructure. Built
                eNaira.gov.ng and the Web App.{' '}
              </Text>
              <Divider size={'sm'} color='black' />
            </Group>

            <Title order={3}>The Central bank of Nigeria</Title>
            <Text>
              Set-up of the eNaira New Media Infrastructure. Built eNaira.gov.ng
              and the Web App.{' '}
            </Text>
            {/* <Divider size={'md'} color='black' /> */}
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
