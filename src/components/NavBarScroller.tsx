import styled from 'styled-components';

const Theme = {
  colors: {
    bg: `#fff`,
    dark: `#24292e`,
    light: `#EEEEEE`,
    red: `#ff5851`,
  },
  fonts: {
    body: `Arial, Helvetica, sans-serif`,
    heading: `Arial, Helvetica, sans-serif`,
  },
};

const Navbar = styled.nav`
  background: ${Theme.colors.bg};
  font-family: ${Theme.fonts.heading};
  color: ${Theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: black;
    text-decoration: none;
  }
`;

const Brand = styled.a`
  font-style: bold;
  font-size: 32pt;
  font: Helvetica;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-right: 50px;
  border: 3px black solid;
`;

const Li = styled.li`
  flex: auto;
  -webkit-box-align: right;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  height: 100%;
  justify-content: right;
  text-decoration: none;
  -webkit-box-align: right;
  -webkit-box-pack: right;
  -webkit-tap-highlight-color: transparent;
  align-items: right;
  color: #999;
  display: flex;
  font-size: 20px;
  height: 75px;
  justify-content: right;
  line-height: 16px;
  margin-right: 20px;
  white-space: wrap;
`;

const NavBarScroller = (props: {
  brand: { name: string; to: string };
  links: Array<{ name: string; to: string }>;
}) => {
  const { brand, links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string }) => (
      <Li key={link.name}>
        <a href={link.to}>{link.name}</a>
      </Li>
    ));
  return (
    <Navbar>
      <Brand href={brand.to}>{brand.name}</Brand>

      <NavLinks />
    </Navbar>
  );
};

export default NavBarScroller;
