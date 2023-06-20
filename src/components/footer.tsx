import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Divider,
  Image,
  Flex,
  Box,
} from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from '@tabler/icons-react';
// import LogoFooter from '@/assets/logo-footer.png';

const useStyles = createStyles((theme) => ({
  footer: {
    height: '70vh',
    // marginTop: rem(120),
display: 'flex',
justifyContent: 'space-between',
flexDirection: 'column',
    fontSize: rem(20),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} *2)`,
    backgroundColor: '#148f7c',
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,

    // [theme.fn.smallerThan('sm')]: {

    // }
  },

  logo: {
    maxWidth: rem(350),
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: 'white',
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: theme.fontFamily,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: 'white',
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
  logo_footer: {
    width: rem(160),
    marginBottom: rem(20),
  },
  copy: {
    background: '#1C1B23',
    paddingBottom: rem(20),
  },
}));

export function Footer() {
  const { classes, theme } = useStyles();

  return (
    <>
      <div className={classes.footer}>
        <Flex
          justify='space-between'
          px={100}
          color='white'
          sx={{
            [theme.fn.smallerThan('sm')]: {
              flexDirection: 'column',
              paddingInline: '20px',
            },
          }}
        >
          <Box
            w='50%'
            sx={{
              [theme.fn.smallerThan('sm')]: {
                width: '100%',
                marginBlockEnd: '10px',
              },
            }}
          >
            <Divider
              size='md'
              w='60%'
              pt={10}
              color='white'
              sx={{
                [theme.fn.smallerThan('sm')]: {
                  width: '100%',
                },
              }}
            />
            <Text color='white'>The Digital Transformation Agency</Text>
          </Box>

          <Flex
            justify='space-between'
            gap={15}
            w='50%'
            sx={{
              [theme.fn.smallerThan('sm')]: {
                flexDirection: 'column',
                width: '100%',
              },
            }}
          >
            <Box w='100%'>
              <Divider size='md' pt={10} color='white' />
              <Text color='white'>Instagram</Text>
              <Text color='white'>Twitter</Text>
              <Text color='white'>Linkedin</Text>
            </Box>
            <Box w='100%'>
              <Divider size='md' pt={10} color='white' />
              <Text color='white'>Privacy Policy</Text>
              <Text color='white'>Terms & Conditions</Text>
              <Text color='white'>Site by Austere</Text>
            </Box>
          </Flex>
        </Flex>
        <Flex
          justify='space-between'
          px={100}
          color='white'
          sx={{
            [theme.fn.smallerThan('sm')]: {
              flexDirection: 'column',
              paddingInline: '20px',
            },
          }}
        >
          <Box
            w='50%'
            sx={{
              [theme.fn.smallerThan('sm')]: {
                width: '100%',
                marginBlockEnd: '10px',
              },
            }}
          >
            <Divider
              size='md'
              w='60%'
              pt={10}
              color='white'
              sx={{
                [theme.fn.smallerThan('sm')]: {
                  width: '100%',
                },
              }}
            />
            <Text color='white'>
              For new business enquiries office@thecorporation.xyz
            </Text>
          </Box>

          <Flex
            justify='space-between'
            gap={15}
            w='50%'
            sx={{
              [theme.fn.smallerThan('sm')]: {
                flexDirection: 'column',
                paddingInline: '20px',

                width: '100%',
              },
            }}
          >
            <Box w='100%'>
              <Divider
                size='md'
                pt={10}
                color='white'
                sx={{
                  [theme.fn.smallerThan('sm')]: {
                    width: '100%',
                  },
                }}
              />
              <Text color='white'>
                8 IBM Haruna Str, Utako District, Abuja 900211
              </Text>
            </Box>
            <Box w='100%'>
              <Divider
                size='md'
                pt={10}
                color='white'
                sx={{
                  [theme.fn.smallerThan('sm')]: {
                    width: '100%',
                  },
                }}
              />
              <Text color='white'>All Rights Reserved 2023</Text>
            </Box>
          </Flex>
        </Flex>
      </div>
    </>
  );
}
