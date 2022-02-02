class Produto {
    
    constructor() {

        this.codigoProduto = 1;
        this.arrayProdutos = [];
        this.arrayProdutosVisualizacao = [];

    }

    salvar() {

        let produto = this.lerDados();
        if (this.validaCampos(produto)) {
            alert('Salvar');
            this.adicionar(produto);
        }
        this.listaTabela(this.arrayProdutos);

        this.cancelar();
    }

    listaTabela(arrayProdutos) {
        let tbody = document.getElementById('tbody');

        tbody.innerText = '';

        for (let i = 0; i < arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_codigo = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();


            td_codigo.innerText = arrayProdutos[i].codigoProduto;
            td_nome.innerText = arrayProdutos[i].nomeProduto;
            td_preco.innerText = arrayProdutos[i].precoProduto;

        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.arrayProdutosVisualizacao.push(produto);
        this.codigoProduto++;
    }

    lerDados() {
        let produto = {};
        produto.codigoProduto = this.codigoProduto;
        produto.nomeProduto = document.getElementById('produto').value;
        //quando há a conversão, caso a pessoa insira o número com ',', a informação após a virgula era ignorada. O replace corrige isso.
        produto.precoProduto = parseFloat((document.getElementById('preco').value).replace(',', '.'));


        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += '- Informe o nome do Produto \n';
        }
        if (isNaN(produto.precoProduto)) {
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
            let tbody = document.getElementById('tbody');
            tbody.innerText = '';
            let verifica = true;
            this.arrayProdutosVisualizacao = [];
            for (const produto of this.arrayProdutos) {
                if (produto.nomeProduto.toLowerCase().search(nome.toLowerCase()) != -1) {
                    this.arrayProdutosVisualizacao.push(produto);
                    verifica = false;
                }
            }
            this.listaTabela(this.arrayProdutosVisualizacao);
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

    
    organizar(parametro) {
        
        //decrescente
        if (parametro === 1) {
            
            for (let i = 0; i < this.arrayProdutosVisualizacao.length; i++) {
                for (let j = 0; j < this.arrayProdutosVisualizacao.length; j++) {
                    if (this.arrayProdutosVisualizacao[i].precoProduto > this.arrayProdutosVisualizacao[j].precoProduto) {
                        let temp = Object.assign({}, this.arrayProdutosVisualizacao[i]);
                        this.arrayProdutosVisualizacao[i] = Object.assign({}, this.arrayProdutosVisualizacao[j]);
                        this.arrayProdutosVisualizacao[j] = Object.assign({}, temp);
                    }
                }
            }
        }
        //crescente
        else if(parametro === 0) {
            for (let i = 0; i < this.arrayProdutosVisualizacao.length; i++) {
                for (let j = 0; j < this.arrayProdutosVisualizacao.length; j++) {
                    if (this.arrayProdutosVisualizacao[i].precoProduto < this.arrayProdutosVisualizacao[j].precoProduto) {
                        let temp = Object.assign({}, this.arrayProdutosVisualizacao[i]);
                        this.arrayProdutosVisualizacao[i] = Object.assign({}, this.arrayProdutosVisualizacao[j]);
                        this.arrayProdutosVisualizacao[j] = Object.assign({}, temp);
                    }
                }
            }
        }
        else{
            this.copiaArray();
        }
        this.listaTabela(this.arrayProdutosVisualizacao);
    }

    copiaArray(){
        this.arrayProdutosVisualizacao = [...this.arrayProdutos];
    }

    

}

var produto = new Produto();