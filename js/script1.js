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
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].nomeProduto == nome) {
                    let tr = tbody.insertRow();
                    let td_codigo = tr.insertCell();
                    let td_nome = tr.insertCell();
                    let td_preco = tr.insertCell();

                    td_codigo.innerText = this.arrayProdutos[i].codigoProduto;
                    td_nome.innerText = this.arrayProdutos[i].nomeProduto;
                    td_preco.innerText = this.arrayProdutos[i].precoProduto;

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

    organizar(parametro) {

        if (parametro) {
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                for (let j = 0; j < this.arrayProdutos.length; j++) {
                    if (this.arrayProdutos[i].precoProduto > this.arrayProdutos[j].precoProduto) {
                        let temp = Object.assign({}, this.arrayProdutos[i]);
                        this.arrayProdutos[i] = Object.assign({}, this.arrayProdutos[j]);
                        this.arrayProdutos[j] = Object.assign({}, temp);
                    }
                }
            }
        }
        else {
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                for (let j = 0; j < this.arrayProdutos.length; j++) {
                    if (this.arrayProdutos[i].precoProduto < this.arrayProdutos[j].precoProduto) {
                        let temp = Object.assign({}, this.arrayProdutos[i]);
                        this.arrayProdutos[i] = Object.assign({}, this.arrayProdutos[j]);
                        this.arrayProdutos[j] = Object.assign({}, temp);
                    }
                }
            }
        }
        this.listaTabela();
    }

}

var produto = new Produto();