// src/components/TaskList/TaskList.tsx
import React, { useState } from 'react';
import { Item } from '../src/types/Item';
import { ListItem } from '../src/components/ListItem';
import * as C from '../src/App.styles';
import { AddArea } from '../src/components/AddArea';

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
        setTasks([...tasks, { id: tasks.length + 1, name: taskName, category, done: false }]);
    };

    return (
        <C.Container>
          <C.Area>
          <C.Header>Lista de Tarefas</C.Header>
            <AddArea onEnter={handleAddTask} />
            {tasks.length === 0 ? (
                <div className="empty-state">
                    <C.StyledClipboardX size={48} />
                    <p>Sem tarefas adicionadas</p>
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