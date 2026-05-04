# E-Commerce Angular: Explicação Teórica e Prática

Este documento cumpre os requisitos acadêmicos, detalhando conceitos fundamentais de TypeScript, sua relação com JavaScript, a Programação Orientada a Objetos e o processo de configuração de um projeto Angular moderno com Material e Bootstrap.

---

## 1. Como instalar o TypeScript

O TypeScript é executado e compilado utilizando o Node.js. Para instalá-lo globalmente na sua máquina, garantindo que o compilador (`tsc`) esteja disponível via terminal:

1. Baixe e instale o **Node.js** (que já inclui o gerenciador de pacotes `npm`).
2. Abra seu terminal ou prompt de comando.
3. Execute o comando:
   ```bash
   npm install -g typescript
   ```
4. Verifique a instalação com:
   ```bash
   tsc -v
   ```

## 2. Sintaxe Básica do TypeScript

O TypeScript introduz **tipagem estática opcional** ao JavaScript. Isso significa que você pode (e deve) definir os tipos de variáveis, parâmetros e retornos de funções.

**Exemplos básicos:**
```typescript
// Declaração de variáveis com tipo
let nomeDoProduto: string = "Notebook Gamer";
let preco: number = 4500.50;
let emEstoque: boolean = true;

// Arrays e Tuplas
let categorias: string[] = ["Eletrônicos", "Hardware", "Periféricos"];

// Tipagem em funções
function calcularDesconto(preco: number, desconto: number): number {
    return preco - (preco * desconto);
}
```

## 3. Diferenças entre TypeScript e JavaScript

| Característica | JavaScript (JS) | TypeScript (TS) |
| :--- | :--- | :--- |
| **Tipagem** | Dinâmica (tipo da variável pode mudar em tempo de execução). | Estática (tipos são verificados em tempo de compilação). |
| **Erros** | Descobertos apenas durante a execução do código no navegador/node. | Descobertos durante a escrita do código (na IDE) e na compilação. |
| **POO** | Orientado a objetos baseado em protótipos (prototypal inheritance). | Suporte robusto a POO com classes, interfaces, modificadores de acesso, etc. |
| **Execução** | Rodado diretamente por navegadores e ambientes Node.js. | Precisa ser **compilado (transpilado)** para JavaScript antes de ser executado. |

## 4. Programação Orientada a Objetos (POO) em TypeScript

A POO no TypeScript assemelha-se a linguagens fortemente tipadas como C# e Java, organizando o código em "Classes" que servem como moldes para criar "Objetos".

### Classes e Objetos
- **Classe:** É o molde ou a planta. Define quais propriedades (atributos) e ações (métodos) uma entidade terá.
- **Objeto:** É a instância, ou seja, algo criado a partir da classe, possuindo dados concretos.

### Construtor
O `constructor` é um método especial chamado automaticamente no momento em que um novo objeto da classe é instanciado usando a palavra-chave `new`. Ele serve para inicializar as propriedades do objeto.

### Métodos
Métodos são funções que pertencem a uma classe. Eles definem os comportamentos ou ações que os objetos daquela classe podem realizar.

**Exemplo Prático em TypeScript:**
```typescript
// A CLASSE: O "molde"
export class Produto {
    // Propriedades (com modificadores de acesso opcionais como public, private)
    public id: number;
    public nome: string;
    public preco: number;

    // O CONSTRUTOR: Método especial para inicializar o objeto
    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    // O MÉTODO: Uma ação que este objeto pode realizar
    exibirDetalhes(): void {
        console.log(`Produto: ${this.nome} - R$ ${this.preco}`);
    }
}

// O OBJETO: A "instância" real
const meuNotebook = new Produto(1, "Notebook Avell", 8000);
meuNotebook.exibirDetalhes(); // Chamando o método
```

---

## 5. Criação do Projeto Angular, Material e Bootstrap

Abaixo está o passo a passo de como o projeto prático deste repositório foi gerado.

### A. Criação do Projeto Angular
Utilizamos o Angular CLI para criar a estrutura base do projeto:
```bash
# O comando 'new' cria um novo projeto.
# --standalone=false garante o uso da arquitetura tradicional com 'app.module.ts'.
# --routing=true cria automaticamente o módulo de rotas.
# --style=css define o CSS padrão.
npx @angular/cli new ecommerce --standalone=false --routing=true --style=css
```

### B. Instalação do Angular Material
O Angular Material é a biblioteca oficial de componentes de UI do Google para Angular.
```bash
# Entrar na pasta do projeto
cd ecommerce

# O comando 'ng add' configura automaticamente estilos, fontes e animações.
ng add @angular/material
```
*Durante a instalação do Material, escolhemos um tema pré-definido (ex: Indigo/Pink), e optamos por incluir a tipografia global e as animações.*

### C. Instalação do Bootstrap
O Bootstrap é utilizado para o sistema de Grid responsivo e componentes estáticos como o Carrossel da tela inicial.
```bash
# Instala os pacotes do bootstrap
npm install bootstrap
```
*Após a instalação, o arquivo CSS do Bootstrap deve ser importado globalmente no arquivo `angular.json` na seção `styles`, ou diretamente no `styles.css` (`@import "~bootstrap/dist/css/bootstrap.min.css";`).*
