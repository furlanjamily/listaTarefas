import React, { useState } from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import * as C from './App.styles';
import { AddArea } from './components/AddArea';
import { SelectedCategory } from './components/AddArea/styles';

const initialTasks: Item[] = [];

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Item[]>(initialTasks);

    const handleToggleTask = (id: number, done: boolean) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, done } : task));
    };

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleAddTask = (taskName: string, category: string) => {
        setTasks([...tasks, { id: tasks.length + 1, name: taskName, done: false, category: category }]);
    };

    return (
        <C.Container>
            <C.Area>
                <C.Header>Lista de Tarefas</C.Header>
                <AddArea onEnter={handleAddTask} />
                {tasks.length === 0 ? (
                    <div className="empty-state">
                        <C.StyledClipboardX />
                        <p>Você não tem tarefas adicionadas!</p>
                    </div>
                ) : (
                    tasks.map(task => (
                        <ListItem
                            key={task.id}
                            item={task}
                            onChange={handleToggleTask}
                            onDelete={() => handleDeleteTask(task.id)}
                        />
                    ))
                )}
            </C.Area>
        </C.Container>
    );
};

export default App;
