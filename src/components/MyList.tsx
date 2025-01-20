type TItem = {
  id: number;
  text: string;
}

interface ListProps {
  header: string;
  items: TItem[];
}

const MyList: React.FC<ListProps> = ({ header, items }) => {
  const listItems = items.map((item) => {
    return <li key={item.id}>{item.text}</li>
  }); 
  return (
    <div>
      <h3>{header}</h3>
      <ol>{listItems}</ol>
    </div>
  );
};

export default MyList;