import { ClipboardX } from 'lucide-react';
import styled from 'styled-components';

export const Container = styled.div`
    background-color: #17181F;
    color: #797A81;
    width: 100%;
    min-height: 100vh;
    display: flex-column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
`;

export const StyledClipboardX = styled(ClipboardX)`
   color: #797A81;
   width: 100px;
   height: 100px;
   stroke-width: 1px;

`;

export const TaskListContainer = styled.div`

    width: 100%;
    min-height: 100%;
    display: flex-column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 64px;
    
        p {
            margin-top: 10px;
            font-size: 16px;
        }
            
    
`;
