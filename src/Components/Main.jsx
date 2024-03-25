import ProductCard from "./ProductCard.jsx"
import { Container, Card, Nav, Select, Div } from "./mainStyle.js"

function Main() {
    return (
        <Container>
            <Nav>
                <p>Quantidade de Produtos: </p>
                <Select>
                    <option value="">Ordenar</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </Select>
            </Nav>
            <Div>
                <Card>
                    <ProductCard />
                </Card>
                <Card>
                    <ProductCard />
                </Card>
                <Card>
                    <ProductCard />
                </Card>
            </Div>
        </Container>
    );
}

export default Main