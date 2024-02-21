'use client'
import { title } from "process";
import "./style.css";
import NationList from "@/app/components/nationList.component";


const Nation = () =>{
    const nationlist = [
        {Name: "card Name",
        info: "Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
        }
        ,{Name: "card Name",
        info: "Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
        }
        ,{Name: "card Name",
        info: "Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
        }
        ,{Name: "card Name",
        info: "Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
        }
        ,{Name: "card Name",
        info: "Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
        },
        {Name: "card Name",
        info: "Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
        }
        ,{Name: "card Name",
        info: "Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
        }
        ,{Name: "card Name",
        info: "Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
        }
        ,{Name: "card Name",
        info: "Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
        }
        ,{Name: "card Name",
        info: "Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard."
        }
    ]

    return (
    <>
    <div className="firstDiv">
        {
            nationlist && nationlist.map(
                (item)=>(
                    <NationList title={item.Name} info={item.info}></NationList>
                )
            )
        }
    </div>
    </>
    )
}

export default Nation;