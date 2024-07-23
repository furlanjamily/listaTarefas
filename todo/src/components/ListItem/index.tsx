import React from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, } from '@fortawesome/free-solid-svg-icons';
import { ListTodo } from 'lucide-react';


type Props = {
    item: Item;
    onChange: (id: number, done: boolean) => void;
    onDelete: () => void;
};

export const ListItem: React.FC<Props> = ({ item, onChange, onDelete }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(item.id, e.target.checked);
    };

    const handleDelete = () => {
        onDelete();
    };

    return (
        <C.Container done={item.done}>
            <C.ContentTask>
                <input
                    type="checkbox"
                    checked={item.done}
                    onChange={handleChange}
                />
                <label>{item.name}</label>
            </C.ContentTask>

            <C.Category>

                <C.StyledListTodo /> {item.category}

            </C.Category>

            <C.StyledTrashIcon icon={faTrash} onClick={handleDelete} />
        </C.Container>
    );
};
