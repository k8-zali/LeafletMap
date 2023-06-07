import styled from "styled-components";
import Locations from "./Locations";

const Header = () => {
  return (
    <Navbar>
      <Logo>Leaflet Map</Logo>
      <Links>
        {Locations.map((location) => (
          <Link key={location.id} onClick={handleLocation}>
            {location.name}
          </Link>
        ))}
      </Links>
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  text-align: left;
`;

const Links = styled.ul`
  display: flex;
`;

const Link = styled.li`
  list-style: none;
  padding: 0 10px;
`;

export default Header;
