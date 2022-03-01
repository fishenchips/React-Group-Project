import styled from "styled-components";

export const Table = styled.table`
    border: 1px solid tomato;
    display: flex;
    flex-direction: column;
`

export const TableHeader = styled.h2`
    align-self: center;
`

export const TableRow = styled.tr`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    border-bottom: 1px solid gray;
    margin-top: 1vh;
    padding: 1rem;
`

export const Img = styled.img`
    height: 40px;
`