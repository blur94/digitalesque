import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Divider,
  Image,
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
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} *2)`,
    backgroundColor: '#2E2D3A',
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
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
  const data = [
    {
      title: 'Company',
      links: [
        { label: 'Home', link: '/' },
        { label: 'About Us', link: '/about' },
        { label: 'Blog', link: '/blog' },
        { label: 'Faqs', link: '/' },
        { label: 'Contact', link: '/contact' },
      ],
    },
    {
      title: 'Developer',
      links: [
        { label: 'links', link: '/' },
        { label: 'links', link: '/' },
        { label: 'links', link: '/' },
        { label: 'links', link: '/' },
        { label: 'links', link: '/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy policy', link: '/' },
        { label: 'Terms & Conditions', link: '/' },
        { label: 'links', link: '/' },
        { label: 'links', link: '/' },
        { label: 'links', link: '/' },
      ],
    },
  ];
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component='a'
        color='dimmed'
        href={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <>
      <div className={classes.footer}>
        <Container className={classes.inner} size={1200}>
          <div className={classes.logo}>
            {/* <Image
              src={LogoFooter.src}
              alt='footer logo'
              width={167}
              height={30}
              className={classes.logo_footer}
            /> */}
            {/* <img src={LogoFooter.src} alt="" className={classes.logo_footer} /> */}
            <Text color='dimmed' className={classes.description}>
              Recurrent is fit or ideal for businesses providing services with
              recurring payments to a large customer base.
            </Text>
            <Divider my='sm' color={'white'} />
            <Group spacing={1} className={classes.social} noWrap>
              <ActionIcon size='lg'>
                <IconBrandFacebook size='1.05rem' stroke={1.5} />
              </ActionIcon>
              <ActionIcon size='lg'>
                <IconBrandTwitter size='1.05rem' stroke={1.5} />
              </ActionIcon>
              <ActionIcon size='lg'>
                <IconBrandInstagram size='1.05rem' stroke={1.5} />
              </ActionIcon>
              <ActionIcon size='lg'>
                <IconBrandLinkedin size='1.05rem' stroke={1.5} />
              </ActionIcon>
              <Group>
                <Text color='dimmed' size='sm'>
                  hello@recurrent.ng
                </Text>
              </Group>
            </Group>
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
      </div>

      <div className={classes.copy}>
        <Container className={classes.afterFooter} maw={1200}>
          <Text color='dimmed' size='sm' align='center'>
            Copyright recurrent 2023 All rights reserved
          </Text>
        </Container>
      </div>
      {/* </footer> */}
    </>
  );
}
