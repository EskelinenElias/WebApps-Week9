import './App.css'
import MyContainer from "./components/MyContainer";
import { TItem, MyList } from './components/MyList';

function App() {
  const header = "This is a list!"
  const items: TItem[] = [
    {id: 1, text: "Item 1"}, 
    {id: 2, text: "Item 2"}, 
    {id: 3, text: "Item 3"}, 
  ]
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MyContainer/> 
      <MyList header={header} items={items}/>
    </div>
  )
}

export default App
