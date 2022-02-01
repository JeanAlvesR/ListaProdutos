class Produto {

    constructor() {
        this.codigoProduto = 1;
        this.arrayProdutos = [];

    }

    salvar() {

        let produto = this.lerDados();
        if (this.validaCampos(produto)) {
            alert('Salvar');
            this.adicionar(produto);
        }
        this.listaTabela();

        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');

        tbody.innerText = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_codigo = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();


            td_codigo.innerText = this.arrayProdutos[i].codigoProduto;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;

        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.codigoProduto++;
    }

    lerDados() {
        let produto = {}
        produto.codigoProduto = this.codigoProduto;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.precoProduto = document.getElementById('preco').value;

        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += '- Informe o nome do Produto \n';
        }
        if (produto.precoProduto == '') {
            msg += '- Informe o Preço do Produto \n';
        }
        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    filtrar() {
        let nome = document.getElementById('produto').value;
        if (nome == '') {
            alert('Inserir nome para verificar!!!')
        }
        else {
            let verifica = true;
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].nomeProduto == nome) {
                    alert('Código: ' + this.arrayProdutos[i].codigoProduto + '\nNome: ' + this.arrayProdutos[i].nomeProduto + '\nPreço: ' + this.arrayProdutos[i].precoProduto);
                    verifica = false;
                }
            }
            if (verifica) {
                alert('Não existe esse nome na lista!');
            }
        }

        this.cancelar();

    }

    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
    }

    organizar(parametro){

        if(parametro){
            for(let i=0; i<this.arrayProdutos.length; i++){
                for(let j = 0; j<this.arrayProdutos.length;j++){
                    if(this.arrayProdutos[i].precoProduto>this.arrayProdutos[j].precoProduto){
                        let temp = Object.assign({},this.arrayProdutos[i]);
                        this.arrayProdutos[i] = Object.assign({}, this.arrayProdutos[j]);
                        this.arrayProdutos[j] = Object.assign({},temp);
                    }
                }
            }
        }
        else{
            for(let i=0; i<this.arrayProdutos.length; i++){
                for(let j = 0; j<this.arrayProdutos.length;j++){
                    if(this.arrayProdutos[i].precoProduto<this.arrayProdutos[j].precoProduto){
                        let temp = Object.assign({},this.arrayProdutos[i]);
                        this.arrayProdutos[i] = Object.assign({}, this.arrayProdutos[j]);
                        this.arrayProdutos[j] = Object.assign({},temp);
                    }
                }
            }
        }
        this.listaTabela();
    }

}

var produto = new Produto();