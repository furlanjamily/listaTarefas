import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px; /* Adiciona espaçamento entre os elementos filhos */

    .image {
        margin-right: 5px;
    }

    input {
        border: 0;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        .image {
            margin-bottom: 10px;
        }

        input {
            font-size: 16px;
            margin-bottom: 10px;
            width: 100%;
        }

        .row {
            display: flex;
            width: 100%;
            justify-content: space-between;
            gap: 10px; /* Espaçamento entre os itens na row */
        }
    }
`;

export const SelectedCategory = styled.select`
    border-radius: 10px;
    background: transparent;
    outline: 0;
    color: white;
    font-size: 18px;
    padding-left: 8px;
    padding-right: 4px;
    flex: 1;
    max-width: 238px; /* Define uma largura máxima */

    option {
        color: black;
        background: white;
    }

    @media (max-width: 600px) {
        font-size: 16px;
        width: 100%; /* Garante que o select ocupe toda a largura no mobile */
    }
`;

export const ButtonAddTask = styled.button`
    border-radius: 10px;
    background-color: #45a049;
    outline: 0;
    color: white;
    font-size: 18px;
    padding-left: 8px;
    padding-right: 4px;
    flex: 1;
    margin-left: 5px; /* Adiciona espaçamento entre o select e o botão */
    max-width: 150px; /* Define uma largura máxima */

    @media (max-width: 600px) {
        width: 100%; /* Garante que o botão ocupe toda a largura no mobile */
        font-size: 16px;
        margin-left: 0; /* Remove a margem no mobile */
    }
`;
