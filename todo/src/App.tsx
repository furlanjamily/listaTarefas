import React, { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import {ListItem} from './components/ListItem'; 
import {AddArea} from './components/AddArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [list, setList] = useState<Item[]>([
  
  ]);

  const handleAddTask = (taskName: string, category: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
      category: category
    });
    setList(newList);
    console.log(newList); 
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  const handleDelete = (id: number) => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
            onDelete={() => handleDelete(item.id)} 
          />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
