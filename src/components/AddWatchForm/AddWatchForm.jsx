
import { useState } from "react"


export  function AddWatchForm({ callbackSubmit }) {
    const initialFormState = {
        name:'',
        zone:''
    }
    
    const [form, setForm] = useState(initialFormState)

    const handleChange = ({target}) => {
        const {name,value} = target;
        setForm(prev=>{
            return {...prev, [name]:value}
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);

        const value = Object.fromEntries(data.entries());
        callbackSubmit(value)
        setForm(initialFormState)
    }

  return (
    <div>
        <form className="addWatch" onSubmit={handleSubmit}>
            <label>
                <div>Название</div>
                <input 
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange} 
                />
            </label>
            <label>
                <div>временная зона</div>
                <input 
                type="text"
                name='zone'
                value={form.zone}
                onChange={handleChange} 
                />
            </label>
            <button>Добавить</button>
        </form>
    </div>
  )
}
