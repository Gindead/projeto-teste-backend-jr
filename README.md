# projeto-teste-backend-jr
API REST para prova de Backend JR

- 1% para vendas acima até 300 reais
- 3% para vendas entre 300 e 1000 reais
- 5% para vendas acima de 1000 reais
- O vendedor receberá um adicional por atingimento de META. Se tiver atingido a meta do mê
s o vendedor ganha mais 3%. As metas são referentes a quantidade de vendas e estão
abaixo:
```
const metas = [
  {mes = 1, qtd = 5},
  {mes = 2, qtd = 3},
  {mes = 3, qtd = 2},
  {mes = 4, qtd = 2},
  {mes = 5, qtd = 5},
  {mes = 6, qtd = 60},
  {mes = 8, qtd = 2},
  {mes = 9, qtd = 4},
  {mes = 10, qtd = 4},
  {mes = 11, qtd = 7},
  {mes = 12, qtd = 2}
]
```

## Rota da API

Utilizando o método POST igual foi solicitado.
```
http://localhost:4000/api/vendas
```

Body da Requisição Utilizado nos Testes:
```
       {
            "pedidos": [
                {"vendedor": 1, "data": "2022-03-01", "valor": 500.34},
                {"vendedor": 1, "data": "2022-03-01", "valor": 1000.22},
                {"vendedor": 1, "data": "2022-03-01", "valor": 100.35},
                {"vendedor": 1, "data": "2022-03-01", "valor": 22.34},
                {"vendedor": 1, "data": "2022-04-01", "valor": 5000.34},
                {"vendedor": 2, "data": "2022-03-01", "valor": 2000.34},
                {"vendedor": 2, "data": "2022-04-01", "valor": 3000.34}
            ]
        }
```

#### Desenvolvido Por Gustavo Gomes
