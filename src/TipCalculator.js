import { useState } from "react"
import { BillInput, Button, Output, SelectPercentage } from "./components.js"

function TipCalculator() {

    const [bill,setBill] = useState()
 
    const [tip,setTip] = useState()
    const [friendTip,setFriendTip] = useState()
    // const totalAmount = bill + tipAverage 


    let percentage;
    if(tip === 'dissatisfied') percentage = 0;
    if(tip === 'okay') percentage = (5 * bill) / 100
    if(tip === 'good') percentage = (10 * bill) / 100
    if(tip === 'amazing') percentage = (20 * bill) / 100

    let friendPercetange;
    if(friendTip === 'dissatisfied') friendPercetange = 0;
    if(friendTip === 'okay') friendPercetange = (5 * bill) / 100
    if(friendTip === 'good') friendPercetange = (10 * bill) / 100
    if(friendTip === 'amazing') friendPercetange = (20 * bill) / 100

    const averageTip= (percentage + friendPercetange) / 2
    const totalAmount = bill + averageTip 
   
    return (
        <div>
            <BillInput 
                onInput={(e)=> setBill(e.target.value)} 
                value={bill}/>
            <SelectPercentage 
                tip={tip}
                onChange={(e)=>setTip(e.target.value)}
                value={tip}
                text="How did you like the service?"/>
            <SelectPercentage 
                tip={friendTip}
                onChange={(e)=>setFriendTip(e.target.value)}
                value={friendTip}
                text="How did your friend like the service?"/>
            <Output 
                bill={bill} 
                averageTip={averageTip}
                totalAmount={totalAmount}/>
            <Button/>
        </div>
    )
}


export {TipCalculator}