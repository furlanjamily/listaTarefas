import styled from 'styled-components';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListTodo } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export const category = styled.select`
display: flex;
color: black;
`;

export const Category = styled.p`
    display: flex;
    color: #CCC;
    padding: 0 4px; 
    margin: 0 10px; 
`;

export const StyledListTodo = styled(ListTodo)`
    margin-right: 5px; 
    color: #CCC; 
`;

export const StyledTrashIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    color: #CCC; 
    margin-left: 8px; 
    &:hover {
    color: darkred; 
    }
`;





