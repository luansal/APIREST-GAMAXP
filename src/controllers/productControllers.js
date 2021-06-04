
const produtos = require('../produtos/produtos') ;

    exports.getAll = (req, res) => {

      res.status(200).json(produtos);
    }
  
    exports.getOneId = (req, res)=> {
      const { id } = req.params;
      const produto = produtos.find((produtos) => produtos.codProduto == id);
      
      if (produto) {
        res.status(200).send(produto)
      } else {
        res.status(404).send({ message: 'produto não existe,reveja o id!!' })
      }
    }
  
    exports.create = (req, res) => {
      const produto = [req.body] 
      
      let checkProduto = ( produto) => {
        if(produto[0].codProduto && produto[0].descricao && produto[0].preco && produto[0].qtdEstoque && produto[0].disponivel && produto[0].emDestaque &&  produto[0].departamento.idDepto && produto[0].departamento.nomeDepto ){
          if(produto[0].preco > 0){
            const prod = produto[0];
            return prod
          } 
          else{
            return false;
          }
        }
        else{
          return false;
        }
  
      }  

      const produtoValidado = checkProduto(produto);

      if (!produtoValidado) {
      
        res.status(400).send({error: 'Tá faltando algo na estrutura!!'})

      }
      
      else {
       
        produtos.push(produtoValidado)
        return res.json(produtoValidado)
      }

    }
  
    exports.update = (req, res)=> {
      
      const {id} = req.params
      const produto = [req.body]
        
      const posicao = produtos.findIndex(produto => produto.codProduto == id) 
        
        if(posicao < 0){
            return res.status(404).json({error: "Produto não encontrado"})
        }
      
        function validarProduto(produto) {
            if (produto[0].codProduto && produto[0].descricao && produto[0].preco && produto[0].qtdEstoque && produto[0].disponivel && produto[0].emDestaque && produto[0].departamento) {
                if (produto[0].preco > 0) {
                    const prod = produto[0]
                    return prod
                } else {
                    return false
                }
            } else {
                return false
            }
      
        }

        const produtoValidado = validarProduto(produto);
      
        if (!produtoValidado) {
            return res.status(400).json({error: 'Alerta,está faltando ou o preço está zerado,reveja a estrutura! '})
        } else {
          produtos[posicao] = produtoValidado
          res.status(200).json(produtos[posicao])
        }
      
    }

   