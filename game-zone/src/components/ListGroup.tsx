import {MouseEvent,useState} from 'react';

const ListGroup = () => {
  const items =[
    'New york',
    'San francisco',
    'Tokyo',
    'London',
    'Johannesburg',
    'Paris'
  ]
  //Keep track of index
//Use state to keep track of variable
const [selectedItem, setSelectedItem] = useState(-1);



  const item =[];
    return (
        <>
                <h1>List</h1>
            <ul className="list-group">
              { item.length == 0 && <h1>No items found</h1>}
              {items.map((item,index) =>
              <li className={selectedItem===index ?"list-group-item active":"list-group-item"} key={item} onClick={()=>{setSelectedItem(index)}}>{item}</li>
              )}
                <br/>
                <p>Info</p>
              
                <p>{selectedItem}</p>
            </ul>

        </>
    )
}

export default ListGroup