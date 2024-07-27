import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

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
        align-items: center;
        flex-wrap: wrap;
        margin: 10px 0;

        .image {
            margin-right: 0;
            margin-bottom: 10px;
        }

        input {
            font-size: 16px;
            margin-bottom: 10px;
        }

        select {
            font-size: 16px;
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
    
    option {
        color: black;
        background: white;
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }
`;
