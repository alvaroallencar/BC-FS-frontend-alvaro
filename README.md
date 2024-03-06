# Removendo "use strict" no Projeto

## Introdução
Após diversas tentativas, ainda não consegui remover o "use strict" do projeto. Este documento descreve as soluções que foram tentadas e as dificuldades encontradas.

## Tentativas de Remoção do "use strict"

### 1. Uso de plugins no Webpack
Tentei utilizar as bibliotecas `remove-strict-webpack-plugin` e `webpack5-remove-use-strict-plugin`, adicionando-as ao arquivo `webpack.config.js`. No entanto, a remoção não foi bem-sucedida. Abaixo está um trecho do código utilizado:

```javascript
plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new Webpack5RemoveUseStrictPlugin(),
],
```

### 2. Utilização do Create React App
Pesquisei sobre o Strict Mode no Create React App, porém, descobri que o Strict Mode e o "use strict" são conceitos diferentes.

## Alternativa para Adicionar o Array de Pokémons
Uma solução alternativa para adicionar o array de pokémons ao objeto `window` seria utilizar `window.pokemons = []`. No entanto, esta abordagem não atende ao requisito de remover o "use strict".

## Conclusão
Apesar das tentativas realizadas, o "use strict" ainda persiste no projeto. Novas abordagens serão exploradas para resolver este problema.
