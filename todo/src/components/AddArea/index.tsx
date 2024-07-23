import { useState, KeyboardEvent, ChangeEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string, category: string) => void;
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && inputText !== '' && selectedCategory !== '') {
            onEnter(inputText, selectedCategory);
            setInputText('');
            setSelectedCategory('');
        }
    }

    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    }

    return (
        <C.Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            <select 
            className="selected-category"
            value={selectedCategory} 
            onChange={handleCategoryChange}>
                <option value="">Selecione uma Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
        </C.Container>
    );
}
