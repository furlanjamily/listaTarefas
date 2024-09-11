import { useState, ChangeEvent, FormEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string, category: string) => void;
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
        if (selectedCategory === '') {
            alert("Por favor, selecione uma categoria.");
            return;
        }

        if (inputText !== '') {
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
            <form onSubmit={handleSubmit}>
                <div className="image">➕</div>
                <input
                    type="text"
                    placeholder="Adicione uma tarefa"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    // Incluindo enterKeyHint como sugestão para melhorar UX em mobile
                    enterKeyHint="done"
                />
                <C.SelectedCategory value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Selecione uma Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </C.SelectedCategory>
            </form>
        </C.Container>
    );
}
