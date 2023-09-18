import React from 'react';
import './ExpenseItem.css';
import {MdDelete, MdEdit} from 'react-icons/md';

const ExpenseItem = (props) => {

  const { item, removeItem, handleEdit } = props;

  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{ item.charge }</span>
        <span className='amount'>{ item.amount } 원</span>
      </div>
      <div>
        <button className='edit-dtn' onClick={() => handleEdit(item.id)}>
          <MdEdit />
        </button>
        <button className='clear-btn' onClick={() => removeItem(item.id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  )
  
}

export default ExpenseItem