import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 20vw;
    padding: 1% 0.5% 1% 0.5%;
    gap: 15px;
    // Borda é apenas para delimitar esta fase de estilização
    border: 1px solid lightgrey;
`

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between
`

export const Button = styled.button`
    height: 4vh;
`