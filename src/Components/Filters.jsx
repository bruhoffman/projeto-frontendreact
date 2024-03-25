import { Div, Input } from "./filterStyle.js"

function Filters() {
    return (
        <Div>
            <h2>Filtros</h2>
            <Input>
                <label htmlFor="" id="valorMinimo">Valor Mínimo: </label>
                <input type="text" name="valorMinimo" value="" />
            </Input>
            <Input>
                <label htmlFor="" id="valorMaximo">Valor Máximo: </label>
                <input type="text" name="valorMaximo" />
            </Input>
            <Input>
                <label htmlFor="" id="buscarPorNome">Buscar por Nome: </label>
                <input type="text" name="buscarPorNome" />
            </Input>
        </Div>
    )
}

export default Filters