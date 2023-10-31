
const ListGroup = () => {
  const items =[
    'New york',
    'San francisco',
    'Tokyo',
    'London',
    'Johannesburg',
    'Paris'
  ]

  const item =[];
    return (
        <>
                <h1>List</h1>
            <ul className="list-group">
              { item.length == 0 && <h1>No items found</h1>}
              {items.map((item) =>
              <li className="list-group-item"key={item}>{item}</li>
              )}
          

            </ul>

        </>
    )
}

export default ListGroup