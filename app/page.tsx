'use client'
import "./globals.css"
import { useRouter } from "@/node_modules/next/navigation" 
const IndexPage = ()=>{
    const router = useRouter()

    const ExploreBtn = () =>{
        router.push("/Country")
    }

    return (
        <div className="homePage">
            <div className="firsttDiv">
                <div className="headTitle">
                    <h1 className="titleDiv">Navigate Foreign Universities With Ease </h1>
                </div>

                <div className="pDiv">
                    <p className="pTag">Embark on a journey to study abroad with Foreign Info Myanmar. Discover details <br/> about universities worldwide effortlessly. We've got all you need for a simple  <br/> application process.Plus, get easy-to-understand guidance on visas and passports for <br/>a stress-free experience.Begin your global education adventure with us.</p>
                </div>

                <div>
                   <button className="button-77" role="button"  onClick={ExploreBtn}>Explore</button>                
                </div>
            </div>
            <div className="secondDiv">
            </div>
        </div>
    )
}

export default IndexPage
