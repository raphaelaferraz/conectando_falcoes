// Define o ambiente de execução como cliente
'use client'

// Componentes internos do projeto
import PassaroLoading from "@/components/ui/loading/passaroLoading"
import ButtonBack from '@/components/ui/button/buttonBack';

// Bibliotecas externas
import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Link from 'next/link';
import { Checkbox } from 'antd';
import moment from 'moment';

// Estilização
const Page = styled.div`
	padding-left: 3rem;
	padding-right: 3rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
	min-height: calc(100vh - 4rem);
`;

const BackButton = styled.button`
	background-color: var(--button-blue);
	color: white;
	border: none;
	outline: none;
	font-size: 1rem;
	cursor: pointer;
	width: calc(16.3125rem / 1.5);
	height: calc(2.75rem / 1.5);
	border-radius: 2rem;
	font-weight: 100;
`;

const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 300;
	margin-bottom: 2rem;
	margin-top: 2rem;
`;

const Divider = styled.div`
	width: 100%;
	margin-top: 2rem;
	height: 0px;
	border-bottom: 0.07rem solid rgb(0, 0, 0, 0.4);
`;

const Search = styled.input`
	width: 23rem;
	padding-left: 1rem;
	padding-right: 1rem;
	height: calc(2.75rem / 1.5);
	border-radius: 2rem;
	font-weight: 100;
	font-weight: 300;
	border: 0.07rem solid rgb(0, 0, 0, 1);
	outline: none;
`;

const Main = styled.main`
	margin-top: 2rem;
`;

const Filter = styled.div`
	margin-left: 1rem;
	cursor: pointer;
`;

const CardsDiv = styled.div`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1.5rem;

	@media (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
	}
`;

const Informations = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: fit-content;
  gap: 0.5rem;
`;

const Information = styled.li`
	display: flex;
	gap: 0.3rem;
`;

const InformationLabel = styled.span`
	font-size: 1rem;
	font-weight: 600;
`;

const InformationValue = styled.span`
	font-size: 1rem;
	font-weight: 300;
`;

const DivStudentList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;
	flex-grow: 1;
`;

const DivStudent = styled.div`
	border-color: #1F5673;
	border-style: solid; 
	border-width: 1px;
	width: auto;
	max-height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0.5rem 1rem 0.5rem 1rem;
	border-radius: 10px; 
`;

const LabelStudentName = styled.h1`
  flex-grow: 1;
	font-size: 1rem;
	font-weight: 400;
`;

const CheckboxPresenca = styled(Checkbox)`
	.ant-checkbox-checked .ant-checkbox-inner {
		background-color: #1F5673; 
		border-color: #1F5673;
		margin-left: auto;
	}
`;

const MainTitle = styled(Title)`
	font-weight: 400;
	width: 100%;
	text-align: center;
`;

const CustomButton = styled.button`
	background-color: var(--button-blue);
	color: white;
	border: none;
	outline: none;
	font-size: 1rem;
	cursor: pointer;
	padding: 0.6rem 1.3rem 0.6rem 1.3rem;
	border-radius: 2rem;
	font-weight: 100;
`;

const RegisterButton = styled(CustomButton)`
	margin-left: auto;
	margin-right: auto;
	margin-top: 2rem;
	display: block;
`;

const SpacerDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

// Esta página "Workshop" é responsável por renderizar a página de uma oficina
export default function Workshop() {

	// Armazenamento do estado de carregamento e presenças
	const [loading, setLoading] = useState(false);
	const [presences, setPresences] = useState<any>([]);

	// Atualização do estado de carregamento
	useEffect(() => {
		setLoading(true)
	}, [])

	// Função para alternar a presença de um aluno	
	function togglePresence(id: number) {
		if (presences.includes(id)) {
			setPresences((prev: any) => prev.filter((idInPresence: number) => idInPresence !== id));
		} else {
			setPresences((prev: any) => [...prev, id]);
		}
	}

	// Função para registrar as presenças
	function register() {
		const body = {
			classId: '1',
			professorId: '1',
			presences: presences,
		}
		console.log(body);
	}

	// Renderização condicional da página
	if (loading) {
		return (
			<Page>
				<ButtonBack />
				<SpacerDiv>
					<div>
						<Title>Nome da oficina</Title>
						<Informations>
							<Information>
								<InformationLabel>Professor:</InformationLabel>
								<InformationValue>a</InformationValue>
							</Information>
							<Information>
								<InformationLabel>Duração:</InformationLabel>
								<InformationValue>a</InformationValue>
							</Information>
							<Information>
								<InformationLabel>Descrição:</InformationLabel>
								<InformationValue>a</InformationValue>
							</Information>
						</Informations>
					</div>
					<Informations>
						<Information>
							<InformationLabel>Total de alunos:</InformationLabel>
							<InformationValue>200</InformationValue>
						</Information>
					</Informations>
				</SpacerDiv>
				<Divider></Divider>
				<Main>
					<MainTitle>Lista de Alunos</MainTitle>
					<SpacerDiv>
						<Informations>
							<Information>
								<InformationLabel>Data e horário:</InformationLabel>
								<InformationValue>{moment('02/02/2024').format('DD/MM/YYYY')} às {moment('13:00').format('HH:mm')}</InformationValue>
							</Information>
						</Informations>
						<Link href={'/add-student'}><CustomButton>Adicionar aluno</CustomButton></Link>
					</SpacerDiv>
					<DivStudentList>
								<DivStudent>
									<LabelStudentName>Nome do Estudante</LabelStudentName>
									<CheckboxPresenca onChange={() => togglePresence(1)} ></CheckboxPresenca>
								</DivStudent>
					</DivStudentList>
					<RegisterButton onClick={register}>Registrar presenças</RegisterButton>
				</Main>
			</Page>
		);
	} else {
		return (
			<PassaroLoading />
		);
	}
}