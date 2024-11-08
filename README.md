# Vehicle Management System

Este repositório contém uma aplicação completa de gerenciamento de veículos, dividida em duas partes principais: **Front-end** e **Back-end**. Cada parte possui instruções detalhadas em seus respectivos diretórios (`front` e `back`), permitindo configurar e executar cada uma de forma independente. A aplicação oferece funcionalidades CRUD para gerenciar veículos, incluindo operações de criação, leitura, atualização e exclusão.

## Estrutura do Projeto

```plaintext
project-root
│
├── infotec-front-app/        # Aplicação Front-end em Angular 16
│   ├── src/      # Código-fonte do Front-end
│   └── README.md # Instruções detalhadas para o Front-end
│
└── infotec-back/         # Aplicação Back-end em Node.js com Express
    ├── src/      # Código-fonte do Back-end
    └── README.md # Instruções detalhadas para o Back-end
```

---

## Visão Geral

### Front-end

- **Framework**: Angular 16+
- **Arquitetura**: MVVM (Model-View-ViewModel)
- **Modularização**: O front-end é modularizado para melhorar a escalabilidade e manutenibilidade do código.
- **Componentes e UX**: Utiliza Angular Material para estilização e usabilidade, com foco em recursos que aprimoram a experiência do usuário.
- **Funcionalidades**:
  - Exibe uma lista completa de veículos com informações detalhadas.
  - Permite adição, atualização e exclusão de veículos através de uma interface amigável.
  
> Detalhes adicionais e instruções de configuração estão disponíveis no `README.md` do diretório `front`.

### Back-end

- **Plataforma**: Node.js com Express
- **Armazenamento de Dados**: Persistência dos dados em um arquivo JSON local (opcional), simulando um banco de dados simples.
- **API RESTful**: CRUD completo para a entidade "Veículo", permitindo as operações de criação, leitura, atualização e exclusão através de endpoints REST.
- **Atributos do Veículo**: `id`, `placa`, `chassi`, `renavam`, `modelo`, `marca`, `ano`.
- **Testes Unitários**: Utiliza Mocha para testes das operações principais (create, read, update, delete) garantindo a qualidade e integridade da API.
  
> Detalhes adicionais e instruções de configuração estão disponíveis no `README.md` do diretório `back`.

---

## Requisitos

- **Node.js** para o Back-end
- **Angular CLI** para o Front-end
- **npm** ou **yarn** para gerenciar dependências

## Configuração Geral

1. **Clonar o repositório**:

2. **Configuração do Back-end**:
   - Navegue até o diretório `infotec-back`.
   - Siga as instruções no `README.md` para instalar as dependências, configurar e executar a API.

3. **Configuração do Front-end**:
   - Navegue até o diretório `infotec-front-app`.
   - Siga as instruções no `README.md` para instalar as dependências e iniciar o servidor de desenvolvimento.

## Executando os Testes

- Os testes unitários para o Back-end podem ser executados com o comando:

  ```bash
  cd info
  npm test
  ```

## Possíveis Melhorias Futuras 

- Integração com um banco de dados relacional ou NoSQL.
- Implementação de autenticação e autorização.
- Adição de mais componentes e funcionalidades avançadas de UI/UX no Front-end.
