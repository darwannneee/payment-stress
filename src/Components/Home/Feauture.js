import FireWorks from "../../assets/img/fireworks.png"

function Feature() {
    return(
        <div className="">
            <h1 className="titleStress text-3xl font-bold md:text-2xl lg:text-5xl"> STRESS CAPITAL </h1>
            <h1 className="title text-5xl pt-2 hover:bg-violet-500 md:text-4xl lg:text-7xl">Monthly <span className="text-violet-500 hover:text-white">Eselon</span> Subscription</h1>

            {/* Giveaway */}
            <div className="pt-10 flex md:pt-16">
                <img src={FireWorks} className="h-16 mt-4 md:mt-0 md:w-20 lg:w-28 lg:h-28" alt="FireWorks"/>
                <h1 className="ml-6 mr-7 text-sm fontDescription md:text-base  md:mr-32 lg:mt-5 lg:mr-80 lg:text-lg">
                    <span className="text-violet-500">GIVEAWAY MULTIPLIER </span> dolor sit amet, consectetur adipiscing elit. Cras volutpat risus risus, sed volutpat
                </h1>
            </div>
            {/* More Access */}
            <div className="pt-10 md:pt-16 flex">
                <img src={FireWorks} className="h-16 mt-4 md:mt-0 md:w-20 lg:w-28 lg:h-28" alt="FireWorks"/>
                <h1 className="ml-6 mr-7 text-sm fontDescription md:text-base  md:mr-32 lg:mt-5 lg:mr-80 lg:text-lg">
                    <span className="text-violet-500"> More Access </span> dolor sit amet, consectetur adipiscing elit. Cras volutpat risus risus, sed volutpat
                </h1>
            </div>
            {/* More Tools */}
            <div className="pt-10 md:pt-16 flex">
                <img src={FireWorks} className="h-16 mt-4 md:mt-0 md:w-20 lg:w-28 lg:h-28" alt="FireWorks"/>
                <h1 className="ml-6 mr-7 text-sm fontDescription md:text-base  md:mr-32 lg:mt-5 lg:mr-80 lg:text-lg">
                    <span className="text-violet-500">More Tools </span> dolor sit amet, consectetur adipiscing elit. Cras volutpat risus risus, sed volutpat
                </h1>
            </div>
        </div>  
    )
}

export default Feature;