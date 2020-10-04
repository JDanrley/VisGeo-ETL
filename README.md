![Capa-Sprint](https://user-images.githubusercontent.com/57918707/93690172-ad2d4c00-faab-11ea-9a28-d5e5574bdac8.jpeg)

# SPRINT 2

- Para essa sprint foi definido com nosso cliente a seguinte prioridade:

![VisGeo - Card02](https://user-images.githubusercontent.com/57918707/93689902-54f54a80-faa9-11ea-8bb1-c1e6d8602069.png)

## Novas funcionalidades

- Nesta nova versão, a VisGeo permite que o usuário carregue um arquivo .shp de todos os tipos oferecidos pelo cliente para ser salvo em um banco de dados geográfico com configuração "de-para".

- Alguns dos shapefiles possuem objetos com tipos geométricos dinâmicos, alternando entre **Polígono** e **Multipolígono**, **Linha** e **Multilinha**, **Ponto** e **Multiponto**. Por isso, os campos **Multi** foram convertidos para os tipos padrões enviados pelo cliente, ou seja, **Polígono, Linha e Ponto**, e adicionada uma mensagem informando que foram inseridas mais linhas na tabela destino do que possuem no dado fonte.

- Esta funcionalidade foi definida como um requisto pelo cliente, pois os dados precisam ser de tipos homogêneos para que sejam devidamente comportados na base de dados criada para os shapefiles convertidos.



