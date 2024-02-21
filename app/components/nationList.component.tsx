'use client'
import "./nationList.style.css"
import { useRouter } from "next/navigation"

const NationList = ({title ,info}) =>{
    const router = useRouter();

    const DetailPage = () =>{
        router.push("/CountryDetail/1")
    }

    return(
        <>  
        <div className="mainDiv">

            <div className="center">
                <div className="property-card">
                    <a href="#">
                    <div className="property-image">
                        <div className="property-image-title">
                        <h5 className="card-title" onClick={DetailPage}>{title}</h5> 
                        </div>
                    </div></a>
                    <div className="property-description">
                    <h5 className="card-title"> {title} </h5>
                    <p>{info}</p>
                    </div>
                    <a href="#">
                    <div className="property-social-icons">
                    
                    </div>
                    </a>
                </div>
            </div>

        </div>
    
        </>
    )
}

export default NationList;