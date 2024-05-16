# Trabalhando com Branches - Criando, Mesclando, Deletando e Tratando Conflitos 📝

## O que é uma Branch?
  - É uma ramificação do seu projeto.
  - É um ponteiro móvel para um commit no histórico do repositório.
  - Quando você cria uma nova branch a partir de outra existente, a nova se inicia apontando para o mesmo commit da branch que estava quando foi criada.

### Para criar uma nova branch (teste) a partir da branch existente (main) utilize:

    git checkout -b teste

### Para voltar para a branch existente (main) utilize:

    git checkout main

### Para listar o último commit de cada branch utilize:

    git branch -v

### Para passar (mesclar) as alterações feitas na branch teste para a branch main utilize:
    git merge teste

### Para listar as branches existentes no repositório utilize:
    git branch

### Para deletar uma branch utilize:
    git branch -d <branch>

## Possível Conflito:
  - Conflito de merge: acontece quando utilizamos o git pull em um repositório compartilhado sem a verificar os conflitos de versões.

### Observações:

#### O nome da branch teste só foi utilizado como exemplo, pesquise como nomear branches e commits.
#### As alterações efetuadas na nova branch só existem no repositório local, sendo necessário o envio para repositório remoto.
