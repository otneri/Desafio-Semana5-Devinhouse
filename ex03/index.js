class Produto  {
    'nome';
    'preco';
    'emEstoque';
    'quantidade';
};

class Pedido {
    constructor () {
        this.numeroPedido = Math.floor(Math.random()*800);
        this.nomeCliente = this.nomeCliente;
        this.dataPedido = ( new Date( ).toLocaleDateString( ) );
        this.estaPago = false;
        this.listaProdutos = [];
    };
    adicionarProduto = (Produto) => {
        this.listaProdutos.push(Produto);
    };
    calcularTotal = () => {
        this.listaProdutos.forEach(Element => {
            
        });
    }


    'numeroPedido';
    'dataPedido';
    'estaPago';
    'listaProdutos';
    'nomeCliente';
}