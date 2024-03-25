import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 66vw;
    margin: 10px;
`

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const Nav = styled.nav`
    display: flex;
    height: 5vh;
    justify-content: space-between;
    padding: 1%;
`

export const Select = styled.select`
    border-radius: 5px;
    width: 150px;
    height: 30px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 70vh;
    //Boda somente para delimitar a área.
    border: 1px solid lightgrey;
`