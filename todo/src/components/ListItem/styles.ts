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

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const ContentTask = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%; /* Ensure it takes full width in mobile view */

    label {
        margin-left: 10px;
        
    }

    @media (max-width: 600px) {
    
        label {
         margin-left: 2px;
         font-size: 16px;
          word-break: break-word; /* Break long words */
         overflow-wrap: break-word; /* Ensure words wrap within the container */
         flex: 1; /* Allow label to expand and fill available space */
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

    @media (max-width: 600px) {
        margin-left: 0px;
        
        
    }
`;

export const StyledTrashIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    margin-left: 10px;
    

       @media (max-width: 600px) {
        margin-left: 0;
    }
`;

export const ActionsContainer = styled.div`
   @media (max-width: 600px) { 
    display: flex;
    justify-content: space-between; /* Space items apart */
    align-items: center;
    width: 100%; /* Ensure it takes full width in mobile view */

    @media (max-width: 600px) {
        margin-top: 10px; /* Add space above for better layout */
        flex-direction: row; /* Ensure items are in a row */
        justify-content: space-between; /* Align items within the container */
    }
} 
`;


