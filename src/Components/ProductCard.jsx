import Items from "./Items.jsx"
import { Container, Img, Button } from "./productCardStyle.js"

function ProductCard() {
    return (
        <Container>
            <Img></Img>
            <p>Produto 3    </p>
            <p>Valor: R$ 130</p>
            <Button>Adicionar Carrinho</Button>
        </Container>
    )
}

export default ProductCard