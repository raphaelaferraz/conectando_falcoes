// Define o ambiente de execução como cliente
'use client'

// Componentes internos do projeto
import BarChart from '@/components/barChart/barChart';
import ButtonNavigation from '@/components/ui/button/buttonNavigation';

// Bibliotecas externas
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { useSession } from 'next-auth/react';


// Estilização
const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 2rem;
`;

const LeftSection = styled.div`
  height: 302px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ButtonNavigationCustom = styled(ButtonNavigation)`
  width: 11rem !important;
  height: 3rem !important;
  font-size: 1rem !important;
`;

const WorkshopCount = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  margin-top: 30px;
  padding: 20px; 
  border-radius: 10px; 
`;

const WorkshopTitle = styled.h2`
  margin-bottom: 30px; 
`;

const WorkshopNumber = styled.p`
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

const ButtonContainerTitle = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row; 
  justify-content: flex-end; 
  align-items: center;
  margin: 1.25rem 3rem 0 0;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-left: 30px;
`;

const Divider = styled.div`
  display: flex;
  width: 100%;
  height: 0px;
  border-bottom: 0.07rem solid rgb(0, 0, 0, 0.4);
`;

const Page = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  min-height: calc(100vh - 4rem);
`;

const SubTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Initial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

// Esta página "HomeOng" é responsável por renderizar a página inicial do líder da ONG
export default function HomeLeader() {

  // Armazenamento do estado de dados da ONG, quantidade de oficinas, informações gerais das oficinas e oficinas
  const [ong, setOng] = useState({name: "", email: "", address: ""});
  const [qtyWorkshops, setQtyWorkshops] = useState(0);
  const [infosWorkshop, setInfosWorkshop] = useState([{name: "", qtyStudents: 0}]);
  const [workshop, setWorkshop] = useState([{name: "",classroom: [{student: []}],}]);

  // Função assíncrona que busca os dados da ONG no backend
  useEffect(() => {
    async function getOngs() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_IP}/ongs/1`);
      const data = await response.json();

      // Atualização dos estados de dados da ONG, quantidade de oficinas, informações gerais das oficinas e oficinas 
      setOng(data.ong);
      setQtyWorkshops(data.qtyAllWorkshops);
      setInfosWorkshop(data.studentsWorkshops);
      setWorkshop(data.workshops)
      console.log(data)
    }
    getOngs();
  }, []);

  // Captura da contagem total de estudantes por oficina
  const workshopsWithStudentCount = workshop.map(workshop => ({
    name: workshop.name, 
    totalStudents: workshop.classroom.reduce((sum, classroom) => sum + classroom.student.length, 0) // Calcula a contagem total de estudantes
  }));

  return (
    <Page>
      <Initial>
        <Title> Bem-vindo(a), <SubTitle>{ong?.name}!</SubTitle></Title>
        <ButtonContainerTitle>
          <ButtonNavigationCustom url="/oficinas">Visualizar Oficinas</ButtonNavigationCustom>
          <ButtonNavigationCustom url=''>Visualizar Professores</ButtonNavigationCustom>
        </ButtonContainerTitle>
      </Initial>
      <Divider></Divider>
      <HomePageContainer>
        <LeftSection>
          <WorkshopCount>
            <WorkshopTitle>Total de oficinas</WorkshopTitle>
            <WorkshopNumber>{qtyWorkshops}</WorkshopNumber>
          </WorkshopCount>
        </LeftSection>
        <RightSection>
          <ButtonContainer>
            <ButtonNavigation url="/cadastrar-estudante">Cadastrar Aluno(a)</ButtonNavigation>
            <ButtonNavigation url="/cadastrar-professor">Cadastrar Professor(a)</ButtonNavigation>
            <ButtonNavigation url="/cadastrar-oficina">Cadastrar Oficina</ButtonNavigation>
          </ButtonContainer>
        </RightSection>
      </HomePageContainer>
      <BarChart workshops={workshopsWithStudentCount}/>
        </Page>
  );
}