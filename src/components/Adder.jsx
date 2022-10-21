import { useState } from 'react'

function Adder(props) {
    const [formData, setFormData] = useState(
        {
            name: '',
            amount: 0,
            category: 'incomes'
        }
    )

    function handleChangeName(event) {
        setFormData(prevFormData => {
            return { ...prevFormData, name: event.target.value }
        })
    }

    function handleChangeAmount(event) {
        setFormData(prevFormData => {
            return { ...prevFormData, amount: event.target.value }
        })
    }

    function handleChangeCategory(event) {
        setFormData(prevFormData => {
            return { ...prevFormData, category: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        props.updateBudget(formData)
        setFormData({
            name: '',
            amount: 0,
            category: 'incomes'
        })
    }

    return (
        <div className='adder'>
            <p className='title'>Add Incomes or Expenses</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChangeName}
                />
                <label htmlFor='amount'>Amount</label>
                <input
                    type='text'
                    id='amount'
                    name='amount'
                    value={formData.amount}
                    onChange={handleChangeAmount}
                />
                <label htmlFor='category'>Category</label>
                <select
                    id='category'
                    name='category'
                    value={formData.category}
                    onChange={handleChangeCategory}
                >
                    <option value='incomes'>Incomes</option>
                    <option value='needs'>Needs</option>
                    <option value='wants'>Wants</option>
                    <option value='savings'>Savings</option>
                </select>
                <button><i className="fa-solid fa-circle-plus"></i></button>
            </form>
        </div>
    )
}

export default Adder