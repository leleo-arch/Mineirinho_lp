import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Animação de fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(39px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Estilizando a galeria
const GalleryWrapper = styled.section`
  padding: 61px 20px;
  background-color:rgb(255, 78, 78);
`;

const GalleryTitle = styled.h2`
  text-align: start;
  margin-bottom: 80px;
  margin-left: 50px;
  font-size: 2.2em;
  color: #ffffff;
  font-family: poppins;

  animation: ${fadeIn} 1s ease forwards;
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 100px;
  max-width: 1100px;
  margin: 0 auto;
`;

const Project = styled.div`
  background:rgb(255, 176, 29);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  border-radius: 30px 0px 30px 0px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgb(56, 56, 56);
  transition: box-shadow 0.3s, transform 0.3s;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.index * 0.1}s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(255, 255, 255, 0.7);
  }
`;

const ProjectImage = styled(LazyLoadImage)`
  width: 180px;
  height: 190px;
  margin: 20px auto;
  border: solid 2px white;
  margin-left: 65px;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 10PX;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 21px;
  text-align: start;
`;

const ProjectTitle = styled.h3`
  font-size: 1.6em;
  color: #ffffff;
  margin-bottom: 5px;
  font-family: poppins;

`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color:rgb(255, 255, 255);
  margin-bottom: 20px;
  background-color: rgb(255, 100, 100);
  opacity: 0.1px;
  padding: 10px;
  border-radius: 20px;
  font-family: poppins;

`;

const ProjectButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 0.9em;
  color: #ffffff;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  border-radius: 24px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  }
`;

const Modal = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(255, 176, 29);
  z-index: 999;
`;

// Dados atualizados com ícones de fantasmas e quadros
const projects = [
  {
    title: 'Ninho com Nutella',
    description: 'Uma combinação irresistível de leite em pó e creme de avelã.',
    image: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/487749123_122105367830820625_4357968802101742721_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=L0sr7g0At70Q7kNvwEqtpYR&_nc_oc=AdmUFE4A6HRZo__LGOTXx7j_pqO_xDeNc1zz0wEkbxqTHNmfyBQCTRES-dYe1d-KVjuVw4yKnbS0N02Ry7EkYDeZ&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=3n2Fv2p61jq7xHWOKTh69A&oh=00_AYF2X0zEaOpxauvOBIB_j6s21ZvEZI5FYH8IE6x14kiQGA&oe=67F4A1F7',
    link: '#'
  },
  {
    title: 'Paçoquita com Chocolate',
    description: 'O sabor clássico da paçoca com um toque cremoso de chocolate.',
    image: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/487477750_122105366582820625_7926744445537411100_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uUiZkGgGLfIQ7kNvwHf0sxp&_nc_oc=AdlUgO1wA6nOSwzx6TSyOOTmwY354wSLw1ZawieJm_Ovor_3ZM9U5lHrQpfUhLIsa7AHl5cmK22ayUG55i6zPTBs&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=lNH9p2Xwa8takGMkFg5Dqw&oh=00_AYGWOgUmgJz_Vj6vnezfF0RRdi4KYOz35LnSj128hxpOSQ&oe=67F4B127',
    link: '#'
  },
  {
    title: 'Ninho com Morango',
    description: 'A doçura do leite Ninho combinada com geleia de morango.',
    image: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/488011967_122105363702820625_4190438980315303324_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ifvSki4LyYMQ7kNvwFRILra&_nc_oc=Adn_6pRJ1UgmiLMV1d-3WVMRB6y0QFx5GWjPRBo6C7HogG4yDj0c7sQI_O8l-ztzmAH_hrNzFPBOT9MT5LgL4fQ9&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=kjGyHXWqO_QM3fReGk3w9w&oh=00_AYFN0Mb7T_awtLcnuAKNFQadpLj3_6pKvLhXrdjL0gYcYg&oe=67F4B434',
    link: '#'
  },
  {
    title: 'Pistache',
    description: 'Um sabor sofisticado e refrescante com um toque de pistache.',
    image: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/487508618_122105359700820625_2299646925003223564_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W6W0Q5rTElkQ7kNvwEIpXAg&_nc_oc=Adn0iGAAjKvDOgl9yBJ-DjrWm_0zbCrJeHEgRIbup6g1KR3mAYfmDm25Uu1-Ys7Ug9yKqwd5wbQYYtsDCRN0BAWh&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=3ZRlWfw9-mGoPM-abw7mzg&oh=00_AYGbcjMsZaNyugwOgv8wuwDJilXn5hcNlBiDu13bHd7rYQ&oe=67F49F42',
    link: '#'
  },
  {
    title: 'Maracujá',
    description: 'O equilíbrio perfeito entre o doce e o azedinho do maracujá.',
    image: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/487474571_122105369414820625_4475125233916727868_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NRdJcIU5z-cQ7kNvwFPamyL&_nc_oc=AdlkuJvP14AJSGOn1uOwZIkyg_XMEhPr8iuGzugRww_SFoBSQnsB9oJPO225BJ6PCj4fW_MtawzkJV9vog1uEcj-&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=emI0TyqidcDqvhT_0jJB-Q&oh=00_AYF8WHsPSPbGC6e4vISEZzdjQmYkua5hR_ikSUiLqTAU2w&oe=67F499E4',
    link: '#'
  },
  {
    title: 'Mini Geladinho - Todos os Sabores',
    description: 'Uma seleção completa dos nossos sabores favoritos em tamanho mini.',
    image: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/487740475_122105361104820625_5087183320591105114_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YQOPpAhcN80Q7kNvwEF5-Vv&_nc_oc=AdnstDSEOfOxantVQq_kvX3SdwFIOW-h612eHJkMq8Ulm1FTXw3hymwISUCBiPKn3AlkQ8HPOfsjs-iqqP9Tapti&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=5CvTnI3djKq3s-gP2HbZOA&oh=00_AYGVkf8XarnV4U1fIpUu3hIrpGif9itfir1X_gUFgXfyrQ&oe=67F492AE',
    link: '#'
  },
];

const ProjectGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <GalleryWrapper id="projects">
      <GalleryTitle>Galadinhos Gourmet</GalleryTitle>
      <Projects>
        {projects.map((project, index) => (
          <Project key={index} index={index} onClick={() => openModal(project)}>
            <ProjectImage 
              src={project.image} 
              alt={project.title} 
              effect="blur"
            />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectButton href= 'https://wa.me/5511965531504' target="_blank" rel="noopener noreferrer">
                Entrar em Contato 
              </ProjectButton>
            </ProjectContent>
          </Project>
        ))}
      </Projects>

      {selectedProject && (
        <>
          <ModalOverlay isOpen={modalOpen} onClick={closeModal} />
          <Modal isOpen={modalOpen}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <ProjectImage src={selectedProject} alt={selectedProject.title} effect="blur" />
            <ProjectButton href= 'https://wa.me/5511965531504' target="_blank" rel="noopener noreferrer">
            Entre em Contato
            </ProjectButton>
            <button onClick={closeModal}>Fechar</button>
          </Modal>
        </>
      )}
    </GalleryWrapper>
  );
};

export default ProjectGallery;
