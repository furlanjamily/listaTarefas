import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image {
        margin-right: 5px;
    }

    input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
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
    
    option {
        color: black;
        background: white;
    }
`;
