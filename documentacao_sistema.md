# Documento de Visão de Negócio e Documentação do Sistema
**Projeto:** E-Commerce Acadêmico  
**Tecnologias:** Angular, TypeScript, Angular Material, Bootstrap  

---

## 1. Finalidade

A finalidade deste documento é fornecer uma descrição abrangente e detalhada sobre o sistema de E-Commerce Acadêmico, estabelecendo os fundamentos que guiaram o seu desenvolvimento. O objetivo principal do sistema é demonstrar, de forma prática e aplicada, a integração de tecnologias front-end modernas na construção de uma interface de comércio eletrônico ágil e responsiva. O projeto foi desenvolvido para atender aos requisitos de avaliação de uma disciplina acadêmica, servindo como instrumento de aprendizado para a aplicação de conceitos de Programação Orientada a Objetos (POO), componentização, roteamento e design de interfaces de usuário (UI).

## 2. Escopo

### O que o sistema contempla:
O escopo deste projeto acadêmico abrange o desenvolvimento completo da interface do usuário (Front-end) de um E-Commerce simplificado. As funcionalidades incluídas são:
* **Página Inicial (Home):** Contendo um banner rotativo (carrossel) para anúncios e promoções, seguido por uma grade de produtos em destaque.
* **Catálogo de Produtos:** Exibição visual dos itens à venda, apresentando imagem, nome, descrição, preço e um botão para intenção de compra.
* **Autenticação (Login):** Interface de entrada segura, permitindo a inserção de credenciais de acesso (usuário/e-mail e senha) por meio de um formulário estruturado.
* **Navegação Global:** Um menu superior (Navbar) para a locomoção fluida entre a página inicial e a tela de login.
* **Rodapé Informativo:** Uma seção inferior contendo os direitos autorais e informações estáticas padronizadas.

### O que está fora do escopo:
Tendo em vista o foco estritamente didático e front-end, não fazem parte do escopo atual:
* **Integração com Backend e Banco de Dados Real:** Os produtos são apresentados utilizando dados estáticos (mockados).
* **Gateway de Pagamento:** Não existe processamento financeiro, cálculo de frete ou transação real de compras.
* **Gerenciamento de Sessão Seguro:** A tela de login é apenas visual, não validando os dados do usuário em um servidor nem mantendo tokens de sessão autênticos.
* **Painel Administrativo:** Não há área para cadastro de novos produtos, controle de estoque ou gerenciamento de vendas.

## 3. Visão Geral

O sistema é uma Aplicação de Página Única (Single Page Application - SPA) construída sobre o framework Angular, utilizando a linguagem TypeScript. Essa arquitetura garante uma transição rápida entre as páginas sem a necessidade de recarregar o navegador. 

A estrutura é modular, dividida em componentes autossuficientes e reutilizáveis, garantindo que o código seja limpo e de fácil manutenção. Para a estilização e usabilidade, o sistema emprega o **Angular Material**, que fornece componentes ricos de interface (como cartões, campos de texto e barras de navegação) seguindo o padrão do Material Design, aliado ao **Bootstrap**, responsável pelo sistema de grid responsivo e pelo dinamismo do carrossel de imagens.

## 4. Visão Geral do Produto

Na prática, o fluxo de interação do usuário com o sistema é desenhado para ser intuitivo e linear, simulando a jornada clássica do consumidor:
1. **Acesso:** Ao abrir a aplicação, o usuário é direcionado imediatamente para a **Página Inicial**.
2. **Engajamento:** O carrossel de banners apresenta as ofertas principais. Logo abaixo, a listagem em grade expõe os produtos.
3. **Exploração:** O usuário pode visualizar a imagem do produto, conferir seu preço e descrição rápida, e clicar no botão "Comprar" (que, na versão acadêmica, representa uma ação de intenção estática).
4. **Identificação:** A qualquer momento, através do menu fixo superior, o usuário pode clicar em "Login" e ser direcionado para o formulário de autenticação.
5. **Preenchimento:** Na tela de login, o usuário interage com um formulário limpo e claro, insere suas credenciais fictícias e simula a entrada no sistema.

## 5. Posicionamento no Mercado

* **Tipo de Sistema:** Front-end de Comércio Eletrônico B2C (Business to Consumer).
* **Público-Alvo:** Consumidores em geral interessados em adquirir produtos variados de forma rápida pela internet. (Do ponto de vista acadêmico, o público-alvo são os professores e avaliadores do curso).
* **Relevância:** Embora seja um Minimum Viable Product (MVP) acadêmico, a relevância do sistema repousa na utilização de uma stack de tecnologia de ponta (Angular). No mercado real, arquiteturas como essa são essenciais para oferecer uma experiência de usuário (UX) fluida, reter clientes e diminuir as taxas de rejeição, sendo o modelo padrão adotado por grandes varejistas virtuais.

## 6. Equipe Desenvolvedora e Clientes

### Equipe Desenvolvedora:
O projeto é conduzido por um estudante e desenvolvedor em formação. A equipe é enxuta e atua em formato "Full-Cycle" (em relação ao Front-end), sendo responsável pela análise de requisitos, design da interface, codificação em TypeScript/HTML/CSS e realização dos testes de usabilidade. 

### Clientes:
O cliente simulado deste sistema é composto pelos "Shoppers" (usuários de e-commerce), indivíduos que buscam plataformas seguras, rápidas e visualmente agradáveis para realizar suas compras. Secundariamente, o cliente real do artefato de software é a instituição de ensino e o corpo docente que avaliará a aderência aos padrões arquiteturais ensinados.

## 7. Alternativas e Concorrência

O mercado de E-Commerce é vasto e altamente competitivo. Caso este sistema acadêmico fosse expandido para uma operação comercial real, ele concorreria ou conviveria com plataformas como:
* **Amazon:** Líder global que se destaca por sua infraestrutura robusta, logística imbatível e catálogo virtualmente infinito.
* **Mercado Livre:** Gigante latino-americano cujo diferencial é o ecossistema que integra pagamentos (Mercado Pago), envios rápidos e plataforma para múltiplos vendedores (Marketplace).
* **Shopee:** Plataforma de forte apelo popular, focada em estratégias de gamificação, cupons agressivos e fretes subsidiados, atraindo um público sensível a preços.

De forma simples, a concorrência exige que sistemas modernos não sejam apenas vitrines digitais, mas proporcionem navegação impecável, tempos de carregamento mínimos e interfaces altamente persuasivas – características base que este projeto angular busca exercitar.

## 8. Restrições

O escopo do desenvolvimento impõe certas restrições técnicas e de negócio:
* **Sistema Acadêmico:** O software não possui viabilidade ou certificações de segurança para operação comercial.
* **Ausência de Integração Financeira:** Não possui conexão com gateways de pagamento (como Stripe, PayPal ou PagSeguro), impossibilitando transações financeiras.
* **Dados Fictícios (Mockados):** O catálogo de produtos é injetado diretamente no código-fonte, não havendo persistência em banco de dados ou painel CMS para atualização de valores.
* **Limitação de Ambiente:** A performance e o comportamento do sistema são otimizados para execução em servidores de desenvolvimento local (`localhost`).

## 9. Requisitos do Produto

### Funcionais:
São as ações que o sistema deve ser capaz de executar:
1. **RF01:** O sistema deve permitir a navegação entre a tela inicial e a tela de login através de um menu superior.
2. **RF02:** O sistema deve exibir um carrossel de imagens promocionais dinâmico na página principal.
3. **RF03:** O sistema deve apresentar uma listagem de produtos, exibindo para cada item: foto, nome, breve descrição e preço.
4. **RF04:** O sistema deve prover um formulário de login com campos para identificação (e-mail/usuário) e senha.

### Não Funcionais:
São as premissas de qualidade e arquitetura que o sistema deve atender:
1. **RNF01 (Responsividade):** A interface deve se adaptar automaticamente a diferentes tamanhos de tela (desktop, tablets e smartphones) através do uso do grid do Bootstrap.
2. **RNF02 (Usabilidade):** O design deve seguir os princípios do Material Design (através do Angular Material), garantindo uma navegação intuitiva e componentes com feedback visual claro.
3. **RNF03 (Performance Básica):** Sendo um SPA Angular, a transição entre as páginas de início e login não deve acarretar o recarregamento total da página web.
4. **RNF04 (Linguagem):** O código deve ser implementado utilizando o rigor de tipagem do TypeScript.

## 10. Modelagem de Caso de Uso

### Especificação Detalhada
* **Ator Principal:** Usuário (Visitante da loja).
* **Cenários:**
  * *Cenário A - Acessar o sistema:* O usuário entra no site e é imediatamente apresentado ao layout inicial (menu, ofertas, rodapé).
  * *Cenário B - Visualizar Produtos:* O usuário faz a rolagem da página inicial, visualiza a grade com as fotos e os valores dos produtos.
  * *Cenário C - Realizar Login:* O usuário deseja entrar na sua conta, clica em "Login" no menu superior, preenche os campos do formulário e tenta autenticar.

* **Casos de Uso Identificados:**
  * **[UC01] Navegar Produtos:** Permite ao ator visualizar os itens disponíveis na página inicial.
  * **[UC02] Visualizar Detalhes do Produto:** Ação intrínseca à grade, onde a descrição e o preço são expostos.
  * **[UC03] Realizar Login:** Permite ao ator preencher dados para autenticação.

---

### Diagramas de Caso de Uso

**1. Diagrama em Formato Textual (ASCII)**
```text
          SISTEMA DE E-COMMERCE
  +-----------------------------------+
  |                                   |
  |      (Navegar Produtos) <-------+ |
  |                                 | |
  |      (Visualizar Detalhes) <----+ |
  |                                 | |
O |                                 | |
/|\      (Realizar Login) <---------+ |
/ \                                   |
Usuário                               |
  +-----------------------------------+
```

**2. Descrição Estruturada (Para Recriação no Creately/Lucidchart)**
Se você for recriar este diagrama em um software visual como o Creately, siga esta estrutura lógica:

* **Elemento 1:** Arraste um ator (Boneco-palito) para o lado esquerdo e o renomeie para "Usuário".
* **Elemento 2:** Desenhe um grande retângulo à direita do ator para representar a "Fronteira do Sistema". Coloque o título "E-Commerce Angular" no topo deste retângulo.
* **Elemento 3:** Dentro do retângulo, crie três elipses (óvalos) representando os Casos de Uso:
  * Elipse 1: `Navegar Produtos`
  * Elipse 2: `Visualizar Detalhes`
  * Elipse 3: `Realizar Login`
* **Elemento 4:** Desenhe linhas de associação (linhas sólidas sem setas complexas) conectando o Ator "Usuário" a cada uma das três elipses.

---

## 11. Definições, Acrônimos e Abreviações

Para a correta compreensão técnica deste documento, definem-se os seguintes termos:
* **UI (User Interface):** Interface do Usuário; engloba o layout visual, botões, cores e espaçamentos com os quais o usuário interage.
* **UX (User Experience):** Experiência do Usuário; o quão agradável, fácil e eficiente é utilizar o sistema.
* **SPA (Single Page Application):** Aplicação de Página Única; arquitetura web que interage com o usuário reescrevendo dinamicamente a página atual em vez de carregar páginas inteiras de um servidor.
* **API (Application Programming Interface):** Interface de Programação de Aplicações; ponte de comunicação entre o sistema Front-end desenvolvido e um possível servidor Backend (não implementado nesta fase).
* **CLI (Command Line Interface):** Interface de Linha de Comando; utilizada no Angular (Angular CLI) para agilizar a criação da base de códigos.
* **POO (Programação Orientada a Objetos):** Paradigma de programação que baseia a estrutura do software no uso de "classes" e "objetos".

## 12. Referências

1. **Documentação Oficial do Angular.** Disponível em: https://angular.io/docs
2. **Documentação Oficial do TypeScript.** Disponível em: https://www.typescriptlang.org/docs/
3. **Documentação do Angular Material.** Disponível em: https://material.angular.io/
4. **Documentação do Bootstrap.** Disponível em: https://getbootstrap.com/docs/5.3/
5. **Material de Estudo do SENAI.** Apostilas e guias de referência curricular em Desenvolvimento de Sistemas.

---

## Sugestões de Melhorias Futuras (Evolução do Sistema)

Embora o escopo acadêmico tenha sido cumprido com excelência, vislumbra-se um amplo horizonte para o amadurecimento do software:
* **Desenvolvimento do Backend:** Criação de uma API RESTful utilizando Node.js ou Java Spring Boot para gerenciamento do banco de dados relacional.
* **Carrinho de Compras:** Implementação de um sistema de controle de estado (via serviços Angular ou bibliotecas como NgRx) para permitir a adição e remoção de produtos num carrinho de compras antes da finalização.
* **Módulo Administrativo:** Criação de rotas protegidas (Guardians do Angular) para que gerentes do e-commerce possam inserir, editar ou deletar produtos via painel gerencial.
* **Segurança na Autenticação:** Implementação real de JSON Web Tokens (JWT) conectada à tela de login já desenhada.

## Conclusão

A construção deste documento atesta a capacidade não apenas de codificar um projeto robusto utilizando **Angular e TypeScript**, mas também de abstrair e documentar suas regras de negócio e arquitetura de software. O E-Commerce resultante serve como uma prova de conceito (PoC) sólida, demonstrando domínio sobre componentização, roteamento e estilização através do uso combinado do Angular Material e Bootstrap. A entrega atinge e supera as expectativas acadêmicas, revelando uma maturidade técnica compatível com as exigências do mercado atual de desenvolvimento Front-end.
