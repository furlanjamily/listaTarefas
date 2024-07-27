import styled from 'styled-components';
import { ListTodo } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ContainerProps = {
    done: boolean;
};

export const Container = styled.div<ContainerProps>`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    background-color: ${props => (props.done ? "#D3D3D3" : "transparent")};

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const ContentTask = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%; 
    label {
        margin-left: 10px;
        
    }

    @media (max-width: 768px) {
    
        label {
         margin-left: 2px;
         font-size: 16px;
          word-break: break-word; 
         overflow-wrap: break-word; 
         flex: 1; 
        }
    }
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;

    svg {
        margin-right: 5px;
    }

    @media (max-width: 768px) {
        margin-left: 0px;
        
        
    }
`;

export const StyledTrashIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    margin-left: 10px;
    &:hover {
    color: darkred; 
    }

       @media (max-width: 768px) {
        margin-left: 0;
    }
`;

export const ActionsContainer = styled.div`

     display: flex;
    align-items: center;
    margin-left: 10px;

    svg {
        margin-right: 5px;
    }

    @media (max-width: 768px) {
        margin-left: 0px;
        
        
    }
    @media (max-width: 768px) {
        margin-top: 10px; 
        flex-direction: row; 
        justify-content: space-between; 
    }

`;


