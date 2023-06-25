# API em Node

API de Gerenciamento de Tarefas (Tasks)

## Descrição

A API de Gerenciamento de Tarefas é uma aplicação desenvolvida em Node.js que oferece operações CRUD (Create, Read, Update, Delete) para manipular tarefas. Ela permite criar, recuperar, atualizar e excluir tarefas de forma simples. O projeto utiliza Node.js puro, sem a utilização de frameworks adicionais.

### Como Executar

    Certifique-se de que a porta 3737 não está em uso.

    Abra o terminal e navegue até o diretório raiz do projeto.

    Execute o seguinte comando para instalar as dependências do projeto: npm install

Após a conclusão da instalação, execute o seguinte comando para iniciar a API:

    npm run dev

    A API estará agora em execução e você poderá realizar chamadas HTTP para interagir com as tarefas.

### Endpoints

A API oferece os seguintes endpoints:

    GET /tasks: Recupera todas as tarefas existentes.
    GET /tasks/:id: Recupera uma tarefa específica pelo seu ID.
    POST /tasks: Cria uma nova tarefa.
    PUT /tasks/:id: Atualiza uma tarefa existente pelo seu ID.
    DELETE /tasks/:id: Exclui uma tarefa pelo seu ID.

## Exemplo de Uso

Para testar a API, utilize o Insomnia (ou qualquer outra ferramenta similar) para realizar as chamadas HTTP para os endpoints mencionados acima, usando o protocolo HTTPS.

Exemplo de uma chamada para recuperar todas as tarefas existentes:

    GET https://localhost:3737/tasks

Exemplo de uma chamada para criar uma nova tarefa:

    POST https://localhost:3737/tasks

Body:

```TypeScript
{
  "title": "Minha nova tarefa",
  "description": "Descrição da minha nova tarefa"
}
```

## Populando o Banco de Dados

Você pode popular o banco de dados inserindo dados diretamente no arquivo tasks.csv. Certifique-se de seguir o formato correto para cada linha do arquivo, separando os campos com vírgula.
