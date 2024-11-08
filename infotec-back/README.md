# Vehicle API

Uma API RESTful desenvolvida em Node.js com Express para gerenciar um cadastro de veículos. A API permite criar, listar, atualizar e deletar registros de veículos, armazenando os dados localmente em um arquivo JSON simulado como banco de dados.

## Estrutura da Aplicação

A aplicação segue uma estrutura modular, dividindo a lógica em camadas para facilitar a manutenção e extensibilidade. Abaixo está uma visão geral dos principais componentes:

### 1. **`app.js`**: 
   - O ponto de entrada principal da aplicação. Configura e inicia o servidor Express, aplica middlewares de CORS e JSON e registra as rotas principais.

### 2. **Rotas (`routes/routes.js`)**: 
   - Define os endpoints da API, direcionando cada rota para os controladores apropriados.

### 3. **Controladores (`controllers/vehicleController.js`)**: 
   - Gerenciam a lógica de negócio da API. Contêm as funções para criar, listar, atualizar e deletar veículos. Cada função utiliza o `vehicleModel` para manipular o armazenamento local.

### 4. **Modelo (`models/vehicleModel.js`)**: 
   - Simula a camada de dados, controlando a leitura e a escrita de dados em um arquivo JSON local (`data/vehicles.json`). Este modelo expõe funções como `getAllVehicles` para obter todos os veículos e `saveVehicles` para salvar atualizações, sendo usado pelos controladores.

### 5. **Armazenamento Local (`data/vehicles.json`)**:
   - Um arquivo JSON simples utilizado para simular um banco de dados local. Todos os dados de veículos são armazenados aqui.

## Pré-requisitos

- Node.js >= 18.x
- npm ou yarn

## Instalação

1. Clone o repositório:

2. Instale as dependências:
   ```bash
   npm install
   ```

## Executando a Aplicação

Para iniciar o servidor:

```bash
npm start
```

O servidor será executado em `http://localhost:3000`.

## Endpoints

| Método | Endpoint            | Descrição                                    |
|--------|----------------------|----------------------------------------------|
| GET    | `/api/vehicles`     | Retorna todos os veículos cadastrados        |
| POST   | `/api/vehicles`     | Cria um novo veículo                         |
| PUT    | `/api/vehicles/:id` | Atualiza um veículo específico pelo `id`     |
| DELETE | `/api/vehicles/:id` | Remove um veículo específico pelo `id`       |
| DELETE | `/api/vehicles/all` | Remove todos os veículos                     |

### Exemplo de Corpo de Requisição para Criar um Veículo (POST `/api/vehicles`)

```json
{
  "placa": "ABC-1234",
  "chassi": "XYZ123456789",
  "renavam": "1234567890",
  "modelo": "Fusca",
  "marca": "Volkswagen",
  "ano": 1965
}
```

## Arquitetura e Fluxo de Dados

1. **Requisições**: As rotas definidas em `routes/routes.js` recebem requisições HTTP e chamam o controlador apropriado.
2. **Controladores**: O controlador (`vehicleController.js`) valida os dados e chama os métodos do modelo para manipulação dos dados.
3. **Modelo**: O modelo (`vehicleModel.js`) lê ou grava no arquivo `data/vehicles.json`, simulando um banco de dados.
4. **Resposta**: Os dados atualizados são retornados ao cliente com o status apropriado (200, 201, 400, 404, etc).

## Testes

Os testes são escritos com **Mocha** e **Supertest** para cobrir as operações principais da API.

Para rodar os testes:

```bash
npm test
```

### Exemplos de Testes

Os testes verificam os seguintes cenários:

- Criação de um novo veículo
- Listagem de veículos
- Atualização de dados de um veículo existente
- Exclusão de um veículo por `id`
- Exclusão de todos os veículos
