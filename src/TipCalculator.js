import { useState } from "react"
import { BillInput, Button, Output, SelectPercentage } from "./components.js"

function TipCalculator() {

    const [bill,setBill] = useState()
    const [tip,setTip] = useState(0)
    const [friendTip,setFriendTip] = useState(0)
  
    const tips = bill * ((tip + friendTip) / 2 / 100)  

    function handleReset() {
        setBill(0)
        setTip(0)
        setFriendTip(0)
    }
   
    return (
        <div>
            <BillInput 
                bill={bill} 
                onSetBill={setBill}/>

            <SelectPercentage 
                tip={tip}
                onSelect={setTip}>
                    How did you like the service?
            </SelectPercentage>

            <SelectPercentage 
                tip={friendTip}
                onSelect={setFriendTip}>
                    How did your friend like the service? 
            </SelectPercentage>

            { bill > 0 && (
                <>
                 <Output bill={bill} tips={tips}/>
                 <Button onClick={handleReset}/> 
                </>
                )}
        </div>
    )
}


export {TipCalculator}