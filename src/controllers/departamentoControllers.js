const produtos = require('../produtos/produtos') ;

  exports.getAllDep = (req, res) => {

    let deptos = []

    for (let i = 0; i < produtos.length; i++) {

      if (deptos.length == 0) {

        deptos.push({idDepto: produtos[i].departamento.idDepto, nomeDepto: produtos[i].departamento.nomeDepto});
        
      }

      let index = deptos.findIndex(array => array.nomeDepto == produtos[i].departamento.nomeDepto)


      if (index < 0) {
        deptos.push({idDepto: produtos[i].departamento.idDepto, nomeDepto: produtos[i].departamento.nomeDepto});
      }
    }
      res.status(200).json(deptos)
  } 

  exports.getdep = (req, res)=> {

          const {id} = req.params

          const buscadePartamento = produtos.find(array => array.departamento.idDepto == id)

          if(!buscadePartamento){

            return res.status(404).json({error: 'Departamento não existe'})
          
          }

          else{
            const buscaProduto = produtos.filter(produto => produto.departamento.idDepto == id);
            res.status(200).json({idDepto:buscadePartamento.departamento.idDepto, nomeDepto: buscadePartamento.departamento.nomeDepto, produto: buscaProduto });
          }
         
     
     

  }
      

















    
