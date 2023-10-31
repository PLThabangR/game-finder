
const ListGroup = () => {
  const items =[
    'New york',
    'San francisco',
    'Tokyo',
    'London',
    'Johannesburg',
    'Paris'
  ]
    return (
        <>
                <h1>List</h1>
            <ul className="list-group">
              
              {items.map((item) =>
              <li className="list-group-item ">{item}</li>
              )}
          

            </ul>

        </>
    )
}

export default ListGroup