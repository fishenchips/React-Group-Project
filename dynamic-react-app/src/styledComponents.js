import styled from "styled-components";
import {motion} from "framer-motion";

export const Table = styled.table`
    display: flex;
    flex-direction: column;
`

export const TableHeader = styled.h2`
    text-align: center;
    width: 100vw;
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;   
`

export const InputForm = styled(motion.input)`
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    border-color: olive;
`

export const DeleteBtn = styled(motion.button)`
    width: 100%;
    padding: 0.5rem;
    text-align: center
    border-radius: 0.8rem;
    border-color: olivedrab;
    background-color: rgb(107, 143, 36);
    color: rgb(245, 245, 245);
`

export const AlterQtyBtn = styled(DeleteBtn)`
    padding: 0.125rem;
    border-radius: 0.25rem;
    width: 1.5rem;
`

export const ClearBtn = styled(DeleteBtn)`
    padding: 1rem;
    width: 90%;
    margin-left: 5%;
`

export const BuyBtn = styled(DeleteBtn)`
    padding: 2rem;
    background-color: green;
`

export const TotalPrice = styled.h3`
    text-align: center;
    width: 100vw;
`