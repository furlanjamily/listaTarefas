import styled from 'styled-components';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;  

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        text-decoration: ${props => props.done ? 'line-through' : 'initial'};
    }

    
`;

export const ContentTask = styled.div`
width: 100%;
align-items: center;
gap: 0.5rem;

display: flex;
`;




