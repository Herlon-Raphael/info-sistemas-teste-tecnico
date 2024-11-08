# Desafio Técnico - Info Sistemas

Este repositório contém o código-fonte de um aplicativo web desenvolvido como parte de um desafio técnico para a empresa **Info Sistemas**. O projeto foi desenvolvido utilizando **Angular 16** e **Node.js 18+**.

## Requisitos

Antes de rodar a aplicação, certifique-se de que seu ambiente de desenvolvimento esteja configurado com as versões necessárias:

- **Angular**: 16.x.x
- **Node.js**: 18.x.x ou superior
- **NPM**: 8.x.x ou superior

## Pré-requisitos

1. **Instalar o Node.js**  
   Acesse o [site oficial do Node.js](https://nodejs.org/) e baixe a versão **18.x.x** ou superior. O Node.js já vem com o **npm** (Node Package Manager), necessário para gerenciar pacotes do projeto.

2. **Instalar o Angular CLI**  
   Caso ainda não tenha o Angular CLI instalado, você pode instalá-lo globalmente com o comando:

   ```bash
   npm install -g @angular/cli
   ```

3. **Instalar o Backend Local**  
   O frontend foi desenvolvido para consumir uma API local, que deve ser executada em paralelo. Siga as instruções no repositório do **backend** para configurá-lo.

## Como Rodar a Aplicação

### Passo 1: Clonar o Repositório

Clone este repositório para sua máquina local:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

### Passo 2: Instalar Dependências

Dentro do diretório do projeto, instale as dependências necessárias:

```bash
npm install
```

Isso instalará todas as dependências do Angular e de outros pacotes necessários para rodar o aplicativo.

### Passo 3: Rodar o Backend Local

Certifique-se de que o **backend** esteja rodando localmente. O backend é necessário para fornecer dados e funcionalidade para o frontend.

Siga as instruções do repositório do backend para inicializar o servidor local.

Exemplo de como rodar o backend:

```bash
cd <diretório_do_backend>
npm install
npm start
```

Isso deve iniciar o servidor backend em um endereço como `http://localhost:3000`.

### Passo 4: Rodar o Frontend

Agora, no diretório do frontend, execute o seguinte comando para rodar a aplicação:

```bash
ng serve
```

Isso iniciará o servidor de desenvolvimento do Angular. Por padrão, o aplicativo estará acessível em `http://localhost:4200`.

### Passo 5: Acessar o Aplicativo

Abra seu navegador e acesse a URL `http://localhost:4200` para visualizar a aplicação. Certifique-se de que o backend esteja rodando corretamente em `http://localhost:3000`, pois o frontend irá consumir a API local para exibir os dados.

## Funcionalidade do App

O aplicativo foi desenvolvido para simular um sistema de gerenciamento de veículos. Ele permite que os usuários visualizem, editem e excluam veículos em uma lista. Algumas funcionalidades incluem:

- Listar veículos registrados.
- Editar informações de veículos.
- Excluir veículos.
- Adicionar novos veículos.

Além disso, fora adicionados funcionalidades para facilitar os testes, como:

- Gerar veículos aleatórios
- Excluir todos os veículos

Outros detalhes para melhorar a experiência do usuário foram implementados:

- Skelleton loading na tabela de veículos (Setado manualmente um delay de 2 segundos, devido ao rápido retorno do backend)
- Empty state na tabela
- Menu lateral para armazenar botões para: Retornar a tela de lista principal, gerar veículos aleatórios e excluir todos os veículos
- Validações para inclusões de novos veículos: Placa no formato ABC-1234 ou ABC1D23 (Mercosul) e Anos entre 1900 e o ano atual.
- Sistema de edição de veículo in loco, utilizando a própria tabela como mecanismo de visualização e edição.
- Atualização em tempo real de qualquer adição/exclusão de veículos
- Criação de um Header e uma Nav Bar, simulando uma aplicação real, onde o conteúdo renderizado da aba de veículos é separado via router layout

## Arquitetura do Projeto

A arquitetura do projeto foi desenvolvida com base em boas práticas de desenvolvimento de software, utilizando o padrão **MVVM** (Model-View-ViewModel) no frontend e uma arquitetura **RESTful** no backend, garantindo uma separação clara de responsabilidades, modularidade e escalabilidade.

A estrutura do frontend foi organizada para facilitar a manutenção e escalabilidade do código. A arquitetura utilizada inclui os seguintes componentes principais:

- **Componentes**:  
  Cada funcionalidade do aplicativo (como a exibição de veículos, formulários de criação e edição, etc.) é encapsulada em componentes reutilizáveis. O Angular utiliza componentes para organizar e estruturar a interface do usuário de maneira clara e modular.
  
- **Serviços**:  
  A comunicação entre o frontend e o backend é realizada por meio de **serviços** Angular. Esses serviços são responsáveis por fazer as requisições HTTP e gerenciar a interação com a API, retornando os dados para os componentes. Por exemplo, o serviço `VehicleService` lida com todas as operações relacionadas aos veículos (listar, adicionar, editar, excluir).

- **Modularização**:  
  A aplicação foi dividida em módulo, representando uma parte funcional de uma aplicação real. O módulo `VehicleModule` contém todos os componentes e serviços relacionados aos veículos.

- **Roteamento (Router)**:  
  O Angular Router é utilizado para navegar entre diferentes páginas do aplicativo. A navegação é realizada de forma simples e declarativa, definindo rotas para os diferentes componentes, como `vehicle-list`, `vehicle-details`, etc. O roteamento é baseado em URL, permitindo que o usuário acesse diretamente qualquer página do aplicativo.

### 3. **Integração entre Frontend e Backend**

A integração entre o frontend e o backend é feita por meio de **requisições HTTP** utilizando o Angular `HttpClient`. O fluxo básico de dados segue o padrão de comunicação cliente-servidor:

- **Frontend**: O frontend faz uma requisição **GET** para a API para obter dados (como a lista de veículos).
- **Backend**: O servidor responde com os dados necessários em formato JSON.
- **Frontend**: O Angular recebe os dados e os exibe de maneira interativa para o usuário.

Além disso, as operações de **criação**, **atualização** e **exclusão** de veículos são realizadas por meio de **POST**, **PUT** e **DELETE**, respectivamente.

### 4. **Arquitetura de Pastas**

A estrutura de pastas do projeto é organizada da seguinte forma:

  - `src/app/`
    - `components/`: Componentes reutilizáveis.
    - `services/`: Serviços responsáveis pela lógica de comunicação com a API.
    - `models/`: Modelos de dados que representam as entidades da aplicação.
    - `vehicles/`: Módulo funcional de uma aplicação.
    - `app.module.ts`: O módulo raiz que importa e organiza todos os módulos e componentes.
  
## Estrutura do Projeto

  O frontend é desenvolvido com Angular 16, utilizando recursos como componentes, serviços, e a biblioteca de Material Design para criar uma interface de usuário rica e responsiva.

## Observações

- Certifique-se de que o **backend** está em execução na URL `http://localhost:3000`.
  
- O projeto foi desenvolvido utilizando as melhores práticas de desenvolvimento front-end e back-end, com foco na escalabilidade e clareza do código.

- Caso deseje realizar o build da aplicação para produção, use o comando:

  ```bash
  ng build --prod
  ```

  Isso gerará os arquivos otimizados na pasta `dist/`.

