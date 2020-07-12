import styled from '@emotion/styled';
import { rem } from 'polished';
import { Box, Flex } from 'reflexbox';
import Navigation from './Navigation';
import Link from 'next/link';

const Header = ({ isDark }) => {
  return (
    <HeaderStyled isDark={isDark}>
      <Box className="container">
        <Flex justifyContent="space-between" alignItems="center">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/images/logo.jpg" alt="Sites logo" />
                <span className="logo-text">Horror Movies Database App</span>
              </a>
            </Link>
          </div>

          <Navigation />
        </Flex>
      </Box>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => (props.isDark ? '#000000' : '#efefef')};
  padding: 20px 20px 20px 0;
  width: 100vw;
  z-index: 3;

  .logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 15px;
    }
  }
`;

export default Header;
