import { useState } from 'react'; 
import MyList, { TItem } from './MyList'; 

const MyContainer = () => {
  // Define list header and items
  const header = "This is a list!"
  const [items, setItems] = useState<TItem[]>([
    { id: "0", text: "List item number 1", clicked:true } 
  ])
  
  // Define text area functions
  const [text, setText] = useState('')
  
  // Function to add item to the list 
  function addItem() {
    // Create a new list item
    const newItem = {
      id: `${items.length}`,
      text: text,
      clicked: false
    }
    // Add the item to the list
    setItems([...items, newItem]);
    // Reset text area
    setText(""); 
  }
  
  // Function to change list item style when clicked
  function handleItemClick(id: string) {
    // Update the list state
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, clicked: !item.clicked } : item
      )
    );
  };
  
  // Return component layout
  return (
    <div>
      <h2>Container contents:</h2>
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)} 
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add Item</button>
      <MyList header={header} items={items} updateList={handleItemClick}/>
    </div>
  );
};

export default MyContainer;