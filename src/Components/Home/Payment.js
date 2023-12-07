import React, { useState } from "react";
import ArrowUpImage from "../../assets/img/arrow-up.png"
import DownUpImage from "../../assets/img/down-up.png"

function Payment() {
    let [Month, setMonth] = useState(0);
    let [Tip, setTip] = useState(0);

    // Declaration Variabel
    let totalSubcription = 0;
    let totalPayment = 0;

    // Logic Total Subscription and Payment
    if(Month === undefined) {
        totalSubcription = 0
        Month = 0;
    } else if(Month > 0 && Tip === 0) {
        totalSubcription = Month * 5;
        totalPayment = totalSubcription;
    } else if(Tip > 0 && Month === 0) {
        totalPayment = Tip
    }else if(Month > 0 && Tip > 0) {
        totalSubcription = Month * 5;
        totalPayment = totalSubcription + Tip;
    }

    // Function Change if click button
    const handleInputMonth = (event) => {
        setMonth(event.target.value);
    };

    const handleIncreaseMonth = () => {
        setMonth((Month) => Month + 1);
    };
    
    const handleDecreaseMonth = () => {
        setMonth((Month) => Math.max(Month - 1, 1)); // Ensure month doesn't go below 1
    };

    const handleIncreaseTIP = () => {
        setTip((Tip) => Tip + 0.2);
    };
    
    const handleDecreaseTIP = () => {
        setTip((Tip) => Math.max(Tip - 0.1, 0.2)); // Ensure month doesn't go below 1
    };


    return(
        <div className="md:border-l-2 border-t-2 md:border-t-0 border-white mt-16 md:mt-0 md:pl-28">
            <h1 className="title text-5xl pt-12 md:pt-2">Subcription Payment</h1>

            {/* Form Payment */}
            <div className="pt-8 md:pt-14 md:flex">
                <div className="fontDescription">
                    <h1>Discord ID</h1>
                    <input className="w-64 h-9 md:w-80 md:h-10 rounded-xl bg-slate-200 md:mt-2 text-black text-center"></input>
                    <h1 className="text-violet-500 text-xs mt-1">*please enter your discord id correctly.</h1>
                </div>
                <div className="pt-3 md:pt-0 md:ml-6 fontDescription">
                    <h1>Month</h1>
                    <div className="flex">
                        <input className="h-8 md:w-20 md:h-10 rounded-xl bg-slate-200 md:mt-2 text-black text-center"
                        value={Month}
                        onChange={handleInputMonth}></input>
                        <div className="md:pl-2 pl-2">
                            <button onClick={handleIncreaseMonth}>
                                <img src={ArrowUpImage} className="w-5 md:w-4 pt-1 md:pt-2" alt="Arrow Up"/>
                            </button>
                            <button onClick={handleDecreaseMonth}>
                                <img src={DownUpImage} className="w-5 md:w-4 md:pb-4" alt="Arrow Down"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Line */}
            <hr className="w-full border-white border mt-14 md:mt-10"></hr>

            {/* Subscription and Tip */}
            <div className="mt-8 md:mt-14 fontDescription">
                {/* Subscription */}
                <div className="grid grid-cols-2">
                    <h1>Subscription</h1>
                    <h1 className="pl-24">{totalSubcription}$</h1>
                </div>
                <div className="grid grid-cols-2 md:pt-5">
                    <h1>Tip</h1>
                    <div className="flex">
                        <h1 className="pl-24">{(Tip).toFixed(1)}$</h1>
                        <div className="md:pl-2 flex pl-1">
                            <button onClick={handleIncreaseTIP}>
                                <img src={ArrowUpImage} className="w-5 md:w-3" alt="Arrow Up"/>
                            </button>
                            <button onClick={handleDecreaseTIP}>
                                <img src={DownUpImage} className="w-5 md:w-3" alt="Arrow Down"/>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            <button className="bg-violet-500 w-full h-8 md:h-10 rounded-xl mt-4 md:mt-14 fontDescription">Pay {totalPayment}$</button>
        </div>
    )
}

export default Payment;