import { useState } from "react";
import './App.css'
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () =>  {

  const [items, setItems] = useState([
    {id: 1, charge: '렌트비', amount: 2000},
    {id: 2, charge: '교통비', amount: 400},
    {id: 3, charge: '식비', amount: 1200}
  ])

  const [alert, setAlert] = useState({show: false});
 
  const [charge, setCharge] = useState("");

  const [amount, setAmount] = useState(0);

  const [id, setId] = useState('');

  const [edit, setEdit] = useState(false);

  const changeCharge = (event) => {
    setCharge(event.target.value)
  }

  const changeAmount = (event) => {
    setAmount(event.target.valueAsNumber)
  }

  const removeItem = (id) => {
    const newItemList = items.filter((item) => item.id !== id)
    handleAlert({type: "danger", text: `${items[id - 1].charge}가 삭제 되었습니다.`})
    setItems(newItemList)
  }

  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text})
    setTimeout(() => {
      setAlert({show: false})
    },7000)
  }

  const handleEdit = (id) => {
    const editItem = items.find((item) => item.id === id);
    const { charge, amount } = editItem;
    setId(id);
    setAmount(amount);
    setCharge(charge);
    setEdit(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(charge !== "" && amount > 0) {
      if (edit) {
        const newItemList = items.map((item) => {
          return item.id === id ? {...item, charge, amount} : item
        })
        setItems(newItemList);
        handleAlert({type: "success", text: "아이템이 수정되었습니다."})
      }
      else {
        const newItem = {id: crypto.randomUUID(), charge, amount}
  
        //불변성을 지켜주기 위해서 새로운 items 생성
        const newItemList = [...items, newItem]
        setItems(newItemList);
        handleAlert({type: "success", text: "아이템이 생성되었습니다."})
      }
      setCharge('');
      setAmount(0);
    }
    else {
      handleAlert({type: "danger", text: "항목과 비용을 입력해주세요"})
    }
  }

  const clearItemList = () => {
    setItems([])
  }

  const totalAmount = items.reduce((acc, cur) => {
    const total = acc += cur.amount
    return total
  }, 0)

  return(
    <main className="main-container">
      {alert.show ? <Alert type={alert.type} text={alert.text}/> : null}
      <h1>예산 계산기</h1>
      <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
        <ExpenseForm 
          charge={charge} 
          changeCharge={changeCharge}
          amount={amount}
          changeAmount={changeAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
      </div>
      <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
        <ExpenseList 
          itemList={items} 
          removeItem={removeItem} 
          handleEdit={handleEdit}
          clearItemList={clearItemList}
         />
      </div>

      <div style={{display: 'flex', justifyContent:'end', marginTop: '1rem'}}>
        <p style={{ fontSize: '2rem'}}>
          총지출: {totalAmount}
          <span>
            원
          </span>
        </p>
      </div>
    </main>
  )

 }

 export default App;