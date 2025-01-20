import React, { useState } from 'react'; 
import MyList, { TItem } from './MyList'; 

const MyContainer = () => {
  // Define list header and items
  const header = "This is a list!"
  const [items, setItems] = useState<TItem[]>([
  ])
  
  // Define text area functions
  const [text, setText] = useState('')
  
  // Function to add item to the list 
  function addItem() {
    // Create a new list item
    const newItem = { 
      id: items.length,
      text: text
    }
    // Add the item to the list
    setItems([...items, newItem]);
    // Reset text area
    setText(""); 
  }
  return (
    <div>
      <h2>Container contents:</h2>
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)} 
        placeholder="Enter new item text"
      />
      <button onClick={addItem}>Add Item</button>
      <MyList header={header} items={items}/>
    </div>
  );
};

export default MyContainer;