import CallOutlined from '@mui/icons-material/CallOutlined'
import ExpandMore from '@mui/icons-material/ExpandMore'
import MailOutline from '@mui/icons-material/MailOutline'
import { Container, MenuItem } from '@mui/material'
import TouchRipple from '@mui/material/ButtonBase'
import { styled } from '@mui/material/styles'
import Image from 'components/BazarImage'
import BazarMenu from 'components/BazarMenu'
import FlexBox from 'components/FlexBox'
import NavLink from 'components/nav-link/NavLink'
import { Span } from 'components/Typography'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { layoutConstant } from 'utils/constants'

const TopbarWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  height: layoutConstant.topbarHeight,
  fontSize: 16,
  '& .topbarLeft': {
    '& .logo': {
      display: 'none',
    },
    '& .title': {
      marginLeft: '10px',
      marginRight: '15px',
    },
    '@media only screen and (max-width: 900px)': {
      '& .logo': {
        display: 'block',
      },
      '& > *:not(.logo)': {
        display: 'none',
      },
    },
  },
  '& .topbarRight': {
    '& .link': {
      paddingRight: 30,
      color: theme.palette.secondary.contrastText,
    },
    '@media only screen and (max-width: 900px)': {
      '& .link': {
        display: 'none',
      },
    },
  },
  '& .smallRoundedImage': {
    height: 15,
    width: 25,
    borderRadius: 2,
  },
  '& .handler': {
    height: layoutConstant.topbarHeight,
  },
  '& .menuTitle': {
    fontSize: 16,
    marginLeft: '0.5rem',
    fontWeight: 600,
  },
  '& .menuItem': {
    minWidth: 100,
  },
  '& .marginRight': {
    marginRight: '1.25rem',
  },
}))

const Topbar = () => {
  const [currency, setCurrency] = useState(currencyList[0])
  const [language, setLanguage] = useState(languageList[0])

  const handleCurrencyClick = (curr: any) => () => {
    setCurrency(curr)
  }

  const handleLanguageClick = (lang: any) => () => {
    console.log(lang)

    setLanguage(lang)
  }

  useEffect(() => {
    // get language from browser
    // console.log(navigator.language);
  }, [])

  return (
    <TopbarWrapper>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <FlexBox className="topbarLeft" alignItems="center">
          <div className="logo">
            <Link href="/">
              <Image
                display="block"
                height="28px"
                src="/assets/images/logo-white.svg"
                alt="logo"
              />
            </Link>
          </div>

          <FlexBox alignItems="center">
            <CallOutlined fontSize="medium" />
            <Span className="title">+(01) 416 123 456</Span>
          </FlexBox>
          <FlexBox alignItems="center" ml={2.5}>
            <MailOutline fontSize="medium" />
            <Span className="title">support@bhpm.com</Span>
          </FlexBox>
        </FlexBox>

        <FlexBox className="topbarRight" alignItems="center">
          <NavLink className="link" href="/faq">
            Login
          </NavLink>
          <NavLink className="link" href="/help">
            Register
          </NavLink>

          <BazarMenu
            handler={
              <TouchRipple className="handler marginRight">
                <Span className="menuTitle">{language.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {languageList.map((item) => (
              <MenuItem
                className="menuItem"
                key={item.title}
                onClick={handleLanguageClick(item)}
              >
                <Span className="menuTitle">{item.title}</Span>
              </MenuItem>
            ))}
          </BazarMenu>

          {/* <BazarMenu
            direction="right"
            handler={
              <TouchRipple className="handler">
                <Span className="menuTitle">{currency.title}</Span>
                <ExpandMore fontSize="inherit" />
              </TouchRipple>
            }
          >
            {currencyList.map((item) => (
              <MenuItem
                className="menuItem"
                key={item.title}
                onClick={handleCurrencyClick(item)}
              >
                <Span className="menuTitle">{item.title}</Span>
              </MenuItem>
            ))}
          </BazarMenu> */}
        </FlexBox>
      </Container>
    </TopbarWrapper>
  )
}

const languageList = [
  {
    title: 'EN',
    imgUrl: '/assets/images/flags/usa.png',
  },
  {
    title: '中文',
    imgUrl: '/assets/images/flags/bd.png',
  },
  // {
  //   title: 'HN',
  //   imgUrl: '/assets/images/flags/in.png',
  // },
]

const currencyList = [
  {
    title: 'USD',
    imgUrl: '/assets/images/flags/usa.png',
  },
  {
    title: 'EUR',
    imgUrl: '/assets/images/flags/uk.png',
  },
  {
    title: 'BDT',
    imgUrl: '/assets/images/flags/bd.png',
  },
  {
    title: 'INR',
    imgUrl: '/assets/images/flags/in.png',
  },
]

export default Topbar