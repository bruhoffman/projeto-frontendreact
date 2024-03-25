import Items from "./Items.jsx"
import { Container, Div, Button } from "./cartStyle.js"

function Cart() {
    return (
        <Container>
            <h2>Carrinho</h2>
            <Div>
                <p>x0 Nome do Produto</p>
                <Button>Remover</Button>
                {/* <Items /> */}
            </Div>
        </Container>
    )
}

export default Cart