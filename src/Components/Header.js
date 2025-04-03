import styled from 'styled-components';
import { FaStore, FaUserAlt, FaEnvelope, FaImages, FaInstagram, FaYoutube, FaPinterest, FaFacebook } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 50px 0;
  width: 100%;
  background-color:rgb(255, 78, 78);
  color: white;

  @media screen and (max-width: 900px) {
    padding: 10px 0;
  }
`;

const Title = styled.h1`
  font-size: 2.9em;
  margin: 0;
  color: #ECF0F1;
  justify-content: center;
  font-family: poppins;

  @media screen and (max-width: 375px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.p`
  font-family: poppins;
  font-size: 1.2em;
  color:rgb(240, 240, 240);
  margin-top: -5px;
`;

const Nav = styled.nav`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto; 
  white-space: nowrap; 
  @media screen and (max-width: 900px) {
    margin-top: 20px;
    padding: 10px;
  }
`;

const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: #ECF0F1;
  font-size: 1.1em;
  transition: color 0.3s;
  font-family: poppins;


  &:hover {
    color: #3498DB;
  }

  @media screen and (max-width: 375px) {
    margin: 0 10px;
    font-size: 0.9em;
  }
`;

const IconWrapper = styled.span`
  margin-left: 8px;
`;

const SocialLinks = styled.div`
  margin-top: 1px;
  display: flex;
  margin-left: 200px;
  margin-bottom: 30px;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: #ECF0F1;
  font-size: 1.5em;
  margin: 0 10px;
  transition: color 0.3s;
  font-family: poppins;


  &:hover {
    color: #3498DB;
  }
`;
const ProfilePic = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


const Header = () => (
  <HeaderWrapper>
        <SocialLinks>
      <SocialLink href="https://www.instagram.com/Mineirinhoice" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </SocialLink>
      <SocialLink href="https://www.youtube.com/seuchannel" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </SocialLink>
      <SocialLink href="https://www.pinterest.com/seuusuario" target="_blank" rel="noopener noreferrer">
        <FaPinterest />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/Mineirinhoice" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </SocialLink>
    </SocialLinks>

    <ProfilePic src='https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/488620529_122105349932820625_9064107230385247589_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=bdeb5f&_nc_ohc=izIWcFAS85YQ7kNvwGoo_5R&_nc_oc=Adn0b3pmo6oUFXxTOiI1WsxlcKFz-dglsFGASpXTKR0IoKgX9sGb0rkO7QHIcV0N3r1IcftBnnCFTqtV591T9g0R&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=N2wrJadz2FGwPwbmsXOfMg&oh=00_AYFkj4JTgRxopxnGu7aPZf59M9X6X_0VRMNxkY3ZUIrMww&oe=67F4A7D6' alt="Minha foto de perfil" />

    <Title>GELADINHOS GOURMET</Title>
    <Subtitle><b>Sabores e momentos únicos</b></Subtitle>

    <Nav>
      <NavLink href="#galeria">
        Galeria  
        <IconWrapper><FaImages /></IconWrapper>
      </NavLink>
      <NavLink href="#about">
        Sobre a Empresa 
        <IconWrapper><FaUserAlt /></IconWrapper>
      </NavLink>
      <NavLink href="#contact">
        Contato
        <IconWrapper><FaEnvelope /></IconWrapper>
      </NavLink>
      <NavLink href="#store">
        Loja
        <IconWrapper><FaStore /></IconWrapper>
      </NavLink>
    </Nav>


  </HeaderWrapper>
);

export default Header;
