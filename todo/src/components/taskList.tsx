// src/components/TaskList/TaskList.tsx
import React, { useState } from 'react';
import { Item } from '../types/Item';
import { ListItem } from './ListItem';
import * as C from './ListItem/styles';
import { AddArea } from './AddArea';

const initialTasks: Item[] = [];

export const TaskList: React.FC = () => {
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
        <C.TaskListContainer>
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
        </C.TaskListContainer>
    );
};
