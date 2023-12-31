import {MouseEvent,useState} from 'react';

interface ItemsProps{
 items: string[];
 heading:string;
 onSelectItem:(item:string) => void;
}


const ListGroup = ({items,heading,onSelectItem}:ItemsProps) => {
  
  //Keep track of index
//Use state to keep track of variable
const [selectedItem, setSelectedItem] = useState(-1);



  const item =[];
    return (
        <>
                <h1>{heading}</h1>
            <ul className="list-group">
              { item.length == 0 && <h1>No items found</h1>}
              {items.map((item,index) =>
              <li className={selectedItem===index ?"list-group-item active":"list-group-item"} key={item} onClick={()=>{setSelectedItem(index); onSelectItem(item)}}>{item}</li>
              )}
                <br/>
                <p>Info</p>
              
                <p>{selectedItem}</p>
            </ul>

        </>
    )
}

export default ListGroup