type TItem = {
  id: string;
  text: string;
  clicked: boolean;
}

interface ListProps {
  header: string;
  items: TItem[];
  updateList: (id: string) => void; 
}

const MyList: React.FC<ListProps> = ({ header, items, updateList }) => {
  const listItems = items.map((item) => {
    return (
      <li 
        key={item.id}
        style={{ textDecoration: item.clicked ? "line-through" : "none" }}
        onClick={() => updateList(item.id)}
      >
        {item.text}
      </li>
    )
  }); 
  return (
    <div>
      <h3>{header}</h3>
      <ol>{listItems}</ol>
    </div>
  );
};

export default MyList;
export type { TItem }; 