import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Container,
} from '@mantine/core';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import {
  IconCode,
  IconBook,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import Logo from '@/assets/logo.svg';
import LogoNav from '@/assets/logo.svg';
import Image from 'next/image';

import { BsHouseDoor } from 'react-icons/bs';

const useStyles = createStyles((theme) => ({
  wrapper: {
    background: '#fff',
    boxShadow: '0 0 10 10',
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: 1000000,
  },

  head: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    border: 'none',
    background: 'none',
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('md')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },
  logo_text: {
    width: rem(150),
    height: rem(28),
    objectFit: 'contain',
  },
  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  control: {
    color: '#fff',
    background: theme.colors.main[0],
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  control2: {
    border: `1px solid ${theme.colors.main[0]}`,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    background: 'none',
  },
}));

const mockdata = [
  {
    icon: BsHouseDoor,
    title: 'Tenancy/Mortgage',
    link: '/cases/tenancy',
  },
  {
    icon: IconCoin,
    title: 'Subscription/Services',
    link: '/cases/ott',
  },
  {
    icon: IconBook,
    title: 'Thrift/Ajo',
    link: '/cases/thrift',
  },
];

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  

  return (
    <Box className={classes.wrapper}>
      <Container size={1200}>
        <Header height={60} className={classes.head}>
          <Group position='apart' sx={{ height: '100%' }}>
            <Image
              src={Logo.src}
              alt='logo-text'
              width={150}
              height={28}
              className={classes.logo_text}
            />

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              //   className={classes.hiddenDesktop}
            />
          </Group>
        </Header>
      </Container>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title={
          <>
            <Image src={LogoNav.src} alt='' width={150} height={28} />
          </>
        }
        // className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx='-md'>
          <Link href='/' className={classes.link}>
            Home
          </Link>
          <Link href='/about' className={classes.link}>
            About
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component='span' mr={5}>
                Use Cases
              </Box>
              <IconChevronDown size={16} color={theme.colors.main[0]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Collapse>
          <a href='#' className={classes.link}>
            Pricing
          </a>
          <Link href='/blog' className={classes.link}>
            Blog
          </Link>
          <Link href='/contact' className={classes.link}>
            Contact
          </Link>
          <Group position='center' grow pb='xl' px='md'>
            <Button className={classes.control2} variant='default'>
              Log in
            </Button>
            <Button className={classes.control}>Get Started</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
