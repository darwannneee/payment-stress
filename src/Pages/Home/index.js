import Feature from "../../Components/Home/Feauture";
import Payment from "../../Components/Home/Payment";
import Navbar from "../../Components/Home/Navbar";


function Home() {
    return(
        // Hone
        <div>
            <Navbar />
            <div className="grid md:grid-cols-2 bg-black md:h-screen text-white px-14 py-24 md:px-36 md:py-40">
                <Feature />
                <Payment />
            </div>
        </div>
    )
}


export default Home;