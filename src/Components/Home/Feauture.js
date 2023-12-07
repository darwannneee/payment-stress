import FireWorks from "../../assets/img/fireworks.png"

function Feature() {
    return(
        <div className="">
            <h1 className="titleStress text-3xl md:text-2xl font-bold"> STRESS CAPITAL </h1>
            <h1 className="title text-5xl md:text-4xl pt-2 hover:bg-violet-500 ">Monthly <span className="text-violet-500 hover:text-white">Eselon</span> Subscription</h1>

            {/* Giveaway */}
            <div className="pt-10 md:pt-16 flex">
                <img src={FireWorks} className="h-16 mt-4 md:mt-0 md:w-20" alt="FireWorks"/>
                <h1 className="ml-6 mr-7 md:mr-32 text-sm md:text-base fontDescription"><span className="text-violet-500">GIVEAWAY MULTIPLIER </span> dolor sit amet, consectetur adipiscing elit. Cras volutpat risus risus, sed volutpat</h1>
            </div>
            <div className="pt-10 md:pt-16 flex">
                <img src={FireWorks} className="h-16 mt-4 md:mt-0 md:w-20" alt="FireWorks"/>
                <h1 className="ml-6 mr-7 md:mr-32 text-sm md:text-base fontDescription"><span className="text-violet-500"> More Access </span> dolor sit amet, consectetur adipiscing elit. Cras volutpat risus risus, sed volutpat</h1>
            </div>
            <div className="pt-10 md:pt-16 flex">
                <img src={FireWorks} className="h-16 mt-4 md:mt-0 md:w-20" alt="FireWorks"/>
                <h1 className="ml-6 mr-7 md:mr-32 text-sm md:text-base fontDescription"><span className="text-violet-500">More Tools </span> dolor sit amet, consectetur adipiscing elit. Cras volutpat risus risus, sed volutpat</h1>
            </div>
        </div>  
    )
}

export default Feature;