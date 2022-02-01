class Produto{

    constructor(){
        this.codigoProduto = 1;
        this.arrayProdutos = [];

    }

    salvar(){
        let produto = this.lerDados();
       if( this.validaCampos(produto)){
            alert('Salvar');
            this.adicionar(produto);
       }
        this.listaTabela();
        
        this.cancelar();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');

        tbody.innerText = '';

        for(let i = 0; i<this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_codigo = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            

            td_codigo.innerText = this.arrayProdutos[i].codigoProduto;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;
         
        }
    }

    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.codigoProduto++;
    }

    lerDados(){
        let produto = {}
        produto.codigoProduto = this.codigoProduto;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.precoProduto = document.getElementById('preco').value;

        return produto;
    }

    validaCampos(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += '- Informe o nome do Produto \n';
        }
        if(produto.precoProduto == ''){
            msg += '- Informe o Preço do Produto \n';
        }
        if(msg!=''){
            alert(msg);
            return false;
        }

        return true;
    }

    cancelar(){
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
    }
}

var produto = new Produto();