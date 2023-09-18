import React from 'react';
import './ExpenseForm.css';
import { MdSend } from 'react-icons/md';

const ExpenseForm = (props) =>  {
  const { 
    charge, 
    changeCharge, 
    amount, 
    changeAmount, 
    handleSubmit,
    edit
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>지출 항목</label>
          <input
            type='text'
            className='form-control'
            id='charge'
            name='charge'
            placeholder='예) 렌트비'
            value={charge}
            onChange={changeCharge}
            />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>바용</label>
          <input
            type='number'
            className='form-control'
            id='amount'
            name='amount'
            placeholder='예) 100'
            value={amount}
            onChange={changeAmount}
            />
        </div>
      </div>
      <button type='submit' className='btn'>
        {!edit ? "제출" : "수정"} <MdSend className='btn-icon'/>
      </button>
  </form>
  )
}

export default ExpenseForm