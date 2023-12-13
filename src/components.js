import { useState } from "react";

export function BillInput({bill,onSetBill}) {
    return (
        <div>
            <label>How much was the bill?</label>
            <input 
                type="text" 
                placeholder="Bill value"
                onChange={(e=>onSetBill(Number(e.target.value)))} 
                value={bill}  />
        </div>
    );
}
export function SelectPercentage({ children,tip,onSelect}) {

    // const [percentage,setPercentage] = useState()

    return (
        <div>
            <label>{children}</label>
            <select onChange={(e)=>onSelect(Number(e.target.value))} value={tip} >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutelly amazing (20%)</option>
            </select>
        </div>
    );
}

export function Output({bill,tips}) {
    
    return (
        <h3>You pay ${bill + tips} (${bill} + ${tips} tip)</h3>
    )
}

export function Button({onClick}) {
    return(
        <button onClick={onClick}>Reset</button>
    )
}
