import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(21px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.8; /* Ajuste a opacidade conforme necessário */
`;


const AboutWrapper = styled.section`
  padding: 60px 20px;
  background-color:rgb(252, 212, 53);  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  animation: ${fadeIn} 1s ease forwards;
`;

const Title = styled.h2`
  font-size: 2em;
  color: #fff;
  margin-bottom: 8px;
  font-family: poppins;

`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color:  #fff;
  max-width: 800px;
  line-height: 1.6;
  background-color: rgba(26, 144, 165, 0.9);
  padding: 20PX;
  border-radius: 20PX;
  font-family: poppins;

`;

const Button = styled.a`
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  width: 50%;
  border-radius: 25px;
  height: 50px;
  margin-left: 10px;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  color: white;
  font-family: poppins;

  &:hover {
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 80%, #945DD6 120%);
  }
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AboutMe = () => (
    
    
  <AboutWrapper id="about">
    {/* Vídeo de fundo */}
    <VideoBackground autoPlay loop muted playsInline>
  <source src="/ice-cream-background.mp4" type="video/mp4" />
  Seu navegador não suporta o elemento de vídeo.
</VideoBackground>
    <ProfilePic src='https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/488620529_122105349932820625_9064107230385247589_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=bdeb5f&_nc_ohc=izIWcFAS85YQ7kNvwGoo_5R&_nc_oc=Adn0b3pmo6oUFXxTOiI1WsxlcKFz-dglsFGASpXTKR0IoKgX9sGb0rkO7QHIcV0N3r1IcftBnnCFTqtV591T9g0R&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=N2wrJadz2FGwPwbmsXOfMg&oh=00_AYFkj4JTgRxopxnGu7aPZf59M9X6X_0VRMNxkY3ZUIrMww&oe=67F4A7D6' alt="Minha foto de perfil" />
    
    <Subtitle>
    <Title>Sobre Nós</Title>
    Mineirinho Ice é uma empresa especializada na criação de geladinhos gourmet e de sovertes, combinando sabores autênticos, ingredientes de alta qualidade e uma apresentação irresistível. Nossa missão é transformar um simples geladinho em uma experiência única.   </Subtitle>
    <Button href="" download="Catalogo_Mineirinho.pdf"><b>VER NOSSO CATÁLOGO</b></Button>
  </AboutWrapper>
);

export default AboutMe;
