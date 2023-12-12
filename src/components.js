import { useState } from "react";

export function BillInput({onInput,bill}) {
    return (
        <div>
            <label>How much was the bill?</label>
            <input type="text" onChange={onInput}  />
        </div>
    );
}
export function SelectPercentage({ text,onChange, value}) {

    // const [percentage,setPercentage] = useState()

    return (
        <div>
            <label>{text}</label>
            <select onChange={onChange} value={value} >
                <option value="dissatisfied">Dissatisfied (0%)</option>
                <option value="okay">It was okay (5%)</option>
                <option value="good">It was good (10%)</option>
                <option value="amazing">Absolutelly amazing (20%)</option>
            </select>
        </div>
    );
}

export function Output({totalAmount,bill,averageTip}) {
    
    return (
        <p>You pay {totalAmount} ({bill} + {averageTip})</p>
    )
}

export function Button() {
    return(
        <button>Reset</button>
    )
}
