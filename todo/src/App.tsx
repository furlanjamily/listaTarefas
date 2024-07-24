import React, { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem'; 
import { AddArea } from './components/AddArea';
import { ClipboardX } from 'lucide-react';

const App: React.FC = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string, category: string) => {
    const newList = [...list, { id: list.length + 1, name: taskName, done: false, category }];
    setList(newList);
    console.log(newList); 
  };

  const handleTaskChange = (id: number, done: boolean) => {
    const newList = list.map(task => task.id === id ? { ...task, done } : task);
    setList(newList);
  };

  const handleDelete = (id: number) => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.length === 0 ? (
          <div className="empty-state">
            <ClipboardX size={48} color="#ccc" />
            <p>Sem tarefas adicionadas</p>
          </div>
        ) : (
          list.map((item, index) => (
            <ListItem
              key={index}
              item={item}
              onChange={handleTaskChange}
              onDelete={() => handleDelete(item.id)}
            />
          ))
        )}
      </C.Area>
    </C.Container>
  );
};

export default App;
