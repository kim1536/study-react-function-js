import React from 'react'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const  ExpenseList = (props) =>  {
  const { itemList, removeItem, handleEdit, clearItemList } = props;

    return (
      <>
        <ul className='list'>
          { itemList.map(item => {
            return (
              <ExpenseItem item={item} key={item.id} removeItem={removeItem} handleEdit={handleEdit} />
            )
          }) }
        </ul>
        {itemList.length > 0 && (
          <button className='btn' onClick={clearItemList}>
            목록 지우기 <MdDelete className='btn-icon'/>
          </button> 
        )}
        
      </>
    )
}

export default ExpenseList