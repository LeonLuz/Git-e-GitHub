# Trabalhando com Branches - Comandos Úteis do Dia a Dia 📝

### Para baixar as alterações do repositório remoto sem mesclá-las ao repositório local utilize:
    git fetch origin main

### Para comparar as diferenças entre as branches utilize:
    git diff main origin/main

### Para mesclar as alterações utilize:
    git merge origin/main

### Para clonar apenas uma branch de um repositório utiize:
    git clone https://... (url do repositório) --branch <nome da branch> --single-branch

### Para arquivar uma alteração utilize:
    git stash

### Para visualizar uma lista das alterações arquivadas utilize:
    git stash list

### Para desarquivar as alterações utilize:
    git stash pop (retorna a alteração e tira ela da lista)
    ou
    git stash apply (retorna a alteração e mantém ela na lista)
