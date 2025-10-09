<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1CL091RLJE4ygRF8oOssy7TZi62NoV_aV" width="300" alt="Descrição da imagem">
</p>

# Arara Delivery 🍽️

## 1. Visão Geral

O **Arara Delivery** é uma aplicação web desenvolvida para gerenciar pedidos de alimentos de forma simples, intuitiva e eficiente. Com ele, é possível cadastrar usuários, produtos e categorias, além de permitir buscas filtradas por tipo de produto (ex: fit, natural, caseira, congelados).

O projeto foi desenvolvido em NestJS com integração ao banco de dados MySQL, aplicando os conceitos de arquitetura modular e boas práticas aprendidas ao longo do Bootcamp Generation Brasil.

**Repositório oficial:** [GitHub](https://github.com/Grupo-05-Turma-JavaScript-09/AraraDelivery.git)

### 1.1 Sobre o Desenvolvimento

O sistema foi construído com base em um modelo de API RESTful, integrando módulos independentes para facilitar a manutenção e escalabilidade. Além das operações CRUD completas, o projeto conta com um método especial de busca por nome, que permite ao cliente visualizar rapidamente produtos específicos de uma categoria.

## 2. Tecnologias Utilizadas 🛠️

- **Node.js / TypeScript**
- **NestJS** — framework escalável para aplicações de backend
- **TypeORM** — ORM para comunicação com o banco relacional
- **MySQL** — banco de dados relacional
- **bcryptjs** — criptografia de senhas
- **Swagger** — documentação e testes dos endpoints
- **Insomnia** — para simulações de requisições HTTP
- **Render** - deploy

## 3. DER (Diagrama Entidade-Relacionamento)

**Relacionamentos:**
- Um usuário pode cadastrar vários produtos
- Cada produto pertence a uma categoria
- As categorias definem o tipo dos produtos (fit, natural, caseira, congelados etc.)

## 4. Estrutura de Pastas 📁

````
ARARADELIVERY/
├── 📁 src/
│ ├── 📁 auth/
│ │ ├── 📁 categoria/
│ │ │ ├── 📁 controllers/
│ │ │ ├── 📁 entities/
│ │ │ ├── 📁 services/
│ │ │ └── categoria.module.ts
│ │
│ ├── 📁 data/
│ │ ├── 📁 produto/
│ │ │ ├── 📁 controllers/
│ │ │ ├── 📁 entities/
│ │ │ ├── 📁 services/
│ │ │ └── produto.module.ts
│ │ ├── 📁 usuario/
│ │ │ ├── 📁 controllers/
│ │ │ ├── 📁 entities/
│ │ │ ├── 📁 services/
│ │ │ └── usuario.module.ts
│ │
│ ├── app.controller.ts
│ ├── app.module.ts
│ └── main.ts
├── 📁 test/
├── package.json
└── arquivos de configuração…
````

- **src/** — código-fonte da aplicação NestJS
- **test/** — testes unitários / de integração
- Arquivos de configuração (ESLint, Prettier, tsconfig, nest-cli)

## 5. Instalação e Execução 🚀

### Pré-requisitos

- Node.js instalado
- MySQL configurado e em execução
- Arquivo .env com as variáveis de conexão

### Passos

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/Grupo-05-Turma-JavaScript-09/AraraDelivery.git


Entrar na pasta do projeto

bash
cd AraraDelivery
Instalar dependências

bash
npm install
Rodar o projeto em modo de desenvolvimento

bash
npm run start:dev

## 6. Endpoints Principais 🔌

### 👥 Módulo Usuários

Método	Endpoint	Descrição
POST	/usuarios	Cria um novo usuário com os dados enviados
GET	/usuarios	Retorna todos os usuários cadastrados
GET	/usuarios/:id	Retorna um usuário específico pelo ID
PUT	/usuarios	Atualiza um usuário existente

### 🍔 Módulo Produtos

Método	Endpoint	Descrição
GET	/produtos	Retorna todos os produtos
GET	/produtos/:id	Retorna produto por ID
POST	/produtos	Cria novo produto
PUT	/produtos/:id	Atualiza um produto por ID
DELETE	/produtos/:id	Remove produto por ID
GET	/produtos/tipo/:tipo	Busca produtos pelo tipo (atributo especial)

### 📑 Módulo Categorias

Método	Endpoint	Descrição
GET	/categorias	Retorna todas as categorias cadastradas
GET	/categorias/:id	Retorna uma categoria por ID
POST	/categorias	Cria uma nova categoria
PUT	/categorias/:id	Atualiza categoria por ID
DELETE	/categorias/:id	Remove categoria por ID
7. Contribuir Para o Repositório 🤝
Faça um fork do repositório no GitHub

Crie uma branch: feature/nova-feature

Faça commits descritivos

Envie um pull request explicando a modificação

## 👥 Equipe de Desenvolvimento 

Nome e	Atribuições

 - Ayron Santana -	Implementou a segurança do sistema. Colaborou na revisão geral antes do deploy.
 
- Emily Mangas -	Desenvolveu o CRUD de categoria. Participou da revisão dos CRUDs e relações. Colaborou na criação do Swagger.

- Eric Silva -	Desenvolveu o CRUD de categoria e de Usuário. Participou da revisão dos CRUDs e relações. Trabalhou na documentação.

- Flavio Serra -	Criou o DER (Diagrama Entidade Relacionamento). Desenvolveu o CRUD de produto. Realizou os testes no Insomnia e Swagger.

- Paula Melo -	Responsável pela criação e estrutura do projeto. Estrutura de Pastas e Arquitetura do Código. Configuração do Ambiente. Conexão com banco de dados. Documentação.

- Sthefany Mattos -	Responsável pelo deploy. Desenvolveu as relações entre as tabelas. Realizou os testes de categoria e usuário. Revisão geral dos CRUDs. Criou a marca do projeto.

## 🎯 Agradecimentos
Gostaríamos de expressar nossa sincera gratidão à Generation Brasil e a todos os instrutores e facilitadores pelo conhecimento compartilhado, suporte durante o bootcamp e pela oportunidade de desenvolver este projeto.

Agradecemos também a todos os colegas que contribuíram direta ou indiretamente para o crescimento desta aplicação, e a você, por ter interesse em conhecer nosso trabalho!

Equipe Arara Delivery 🦜






