// Bibliotecas externas
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';

// Estilização
const ContainerBarChart = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 20px;
  border-radius: 10px;
`;

// Este componente é responsável por renderizar um gráfico de barras 
export default function BarChart({ workshops }: { workshops: { name: string; totalStudents: number; }[] }) {
  
  // Armazenamento da referência do canvas do gráfico
  const chartRef = useRef<HTMLCanvasElement>(null);

  // Atualização do gráfico
  useEffect(() => {

    // Verificação da existência do contexto do canvas
    const ctx = chartRef.current?.getContext('2d');

    // Renderização do gráfico
    if (ctx) {

      // Armazenamento dos dados do gráfico
      const labels = workshops.map(workshop => workshop.name);
      const data = workshops.map(workshop => workshop.totalStudents);

      // Criação do gráfico
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Quantidade de alunos por oficina',
            data, 
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      return () => {
        myChart.destroy();
      };
    }
  }, [workshops]); 

  return (
    <ContainerBarChart>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </ContainerBarChart>
  );
}
