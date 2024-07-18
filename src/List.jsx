import React from 'react'

const List = (props) => {
const itemList = props.items
const category = props.category;
  
    //fruit.sort((a,b)=>a.calories-(b.calories))
    //const lowCalFruit = fruit.filter(fruit => fruit.calories < 100);
    const listItems = itemList.map(item=> <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b></li> )
  return (
  <>
  <h3 className='list-category'>{category}</h3>
  <ol className='list-items'>{listItems}</ol>
  </>
  )
}

export default List