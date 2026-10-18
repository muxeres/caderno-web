# 📘 Caderno de Atividades - Saúde e Bem-Estar no Trabalho

> **Programa de Saúde Ocupacional & Segurança (SESMT / CIPA)**  
> *Projeto Extensionista Acadêmico voltado à Gestão de Saúde, Segurança e Prevenção no Canteiro de Obras.*

---

## 📌 Visão Geral do Projeto

O **Caderno de Atividades: Saúde e Bem-Estar no Trabalho** é uma aplicação web interativa desenvolvida para promover a conscientização, o autocuidado e o monitoramento diário da saúde ocupacional dos trabalhadores da construção civil. 

Projetada para cobrir um ciclo contínuo de **25 dias úteis (5 semanas)**, a ferramenta aborda aspectos críticos como ergonomia, nutrição, hidratação, saúde mental e ginástica laboral, fornecendo uma interface digital simples, acessível e de rápida adoção no canteiro de obras.

---

## 🚀 Funcionalidades Principais

* **Ficha de Identificação Integrada:** Coleta estruturada de dados do colaborador (Nome, Função/Cargo, Setor/Frente de Obra, Turno, Supervisor e Data de Início).
* **Trilha de Aprendizado em 5 Semanas:**
  * **Semana 1:** Conscientização e Avaliação Inicial de Riscos.
  * **Semana 2:** Hábitos Alimentares Saudáveis e Checklist de Hidratação.
  * **Semana 3:** Exercícios Físicos, Ergonomia e Prevenção de LER/DORT.
  * **Semana 4:** Gerenciamento do Estresse, Qualidade do Sono e Saúde Mental.
  * **Semana 5:** Monitoramento de Progresso, Feedback e Sustentabilidade das Práticas.
* **Persistência de Dados Local (Offline-First):** Armazenamento temporário automático via `localStorage`, garantindo que o trabalhador não perca suas anotações ao fechar ou recarregar a página.
* **Envio Assíncrono para Nuvem:** Integração direta via formulário/serviço para persistência centralizada das respostas em planilha de monitoramento (`Google Sheets`).
* **Design Responsivo & Impressão (Print-Ready):** Layout moderno adaptado para dispositivos móveis e estilizado para geração de relatórios físicos ou certificados de conclusão impressos.

---

## 🛠️ Arquitetura e Tecnologias Utilizadas

* **Front-end:** HTML5, JavaScript (ES6+), CSS3 (Tailwind CSS via CDN).
* **Back-end / Middleware:** Google Apps Script (`Código.gs`), responsável por servir a Web App e processar as requisições assíncronas do servidor.
* **Database / Armazenamento:** Google Sheets (base de dados estruturada para consolidação de indicadores de saúde ocupacional).

---

## 🔄 Fluxo de Funcionamento dos Dados

1. **Preenchimento:** O colaborador acessa a Web App pelo navegador e registra suas observações e compromissos diários.
2. **Salvamento Local:** As entradas são salvas automaticamente no navegador em tempo real.
3. **Submissão do Form:** Ao clicar em *"Enviar Respostas"*, uma requisição assíncrona (`google.script.run`) transfere o payload de dados para o servidor do Apps Script.
4. **Consolidação:** O script processa as informações e insere uma nova linha com o carimbo de data/hora (`Timestamp`) diretamente na planilha oficial de monitoramento.

---

## 🎯 Objetivo Extensionista & Impacto Social

O projeto visa mitigar riscos ocupacionais, reduzir índices de absenteísmo por dores osteomusculares e fortalecer a cultura de segurança e autocuidado na construção civil, alinhando teoria acadêmica de Inteligência Artificial e Automação de Processos com o impacto social direto na comunidade de trabalhadores.
