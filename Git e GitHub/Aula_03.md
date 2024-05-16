# Desfazendo Alterações no Repositório Local 📝

### Para retornar as alterações de um arquivo utilize:
    git restore <file>
    
### Para corrigir a mensagem do último commit utilize:
    git commit --amend -m "nova mensagem"
    
### Para desfazer um commit utilize:
    git reset --option hash do commit

### Para visualizar o histórico de commits utilize:
    git reflog

### Observações:

#### Não utilizar o "git commit --amend" em commits cujo push já foi realizado.

#### git reset possui 3 opções, são elas:
  - git reset --soft (desfaz o commit e retorna os arquivos para a área de preparação)
  - git reset --mixed (desfaz o commit e retorna os arquivos para a árvore de trabalho, sendo essa a opção padrão)
  - git reset --hard (desfaz o commit e apaga os arquivos)

#### git reset e git restore podem ser utilizados para remover arquivos da área de preparação:
    git reset <file>
    ou
    git restore --staged <file>
