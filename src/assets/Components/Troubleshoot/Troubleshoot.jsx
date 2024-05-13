
import { useEffect, useState } from "react";
import troubleshootIssues from "../../../../public/troubleshoot";
import img from"../../../assets/Stuck.jpg";
import './Troubleshoot.css'
import { AiFillCheckCircle,AiOutlineInfoCircle,AiFillCaretLeft } from "react-icons/ai";
import { MdOutlineTroubleshoot } from "react-icons/md";
const Troubleshoot = () => {
    const [issues, setIssues] = useState([]);
    const [previousIssues, setPreviousIssues] = useState([]);
    const [findIssue,setFindIssue]=useState(true)
    let delay=0;
    let position=0

    useEffect(() => {
        setIssues(troubleshootIssues);
    }, []);
    
    const handleIssues = (input) => {
        if (issues[input]) {
            const selectedItem = issues[input];
            if (Array.isArray(selectedItem)) {
                position+=50
                delay+=1
                setIssues(selectedItem);
            } else if (typeof selectedItem === 'object') {
                position+=50
                delay+=1
                setPreviousIssues([...previousIssues, issues]); 
                setIssues(selectedItem);
            }
        } 
    };
    
    const handleBack = () => {
        console.log(previousIssues)
        if (previousIssues.length > 0) {
            const prevState = previousIssues.pop();
            setIssues(prevState);
            setPreviousIssues([...previousIssues]);
        }
        else{
            setFindIssue(!findIssue)
        }
    };
    return (
       <section className="container mx-auto">
         <div className=" w-full md:w-3/4 h-auto">
            {
                findIssue ?
                
                <div className="p-4 outline-gray-200 shadow-2xl relative">
                <div>
                    <img src={img} className="opacity-30 md:opacity-100" alt="" />
                </div>
                <div className="absolute duration-1000  space-y-4 w-1/2 md:w-3/4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center bg-transparent  md:bg-gradient-to-r from-gray-500 to-gray-900  p-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-purple-950  md:text-yellow-400 ">Tech troubles ? Let us be your solution !</h2>
                    <button className="btn md:btn-outline btn-warning" onClick={()=>{setFindIssue(!findIssue)}}><MdOutlineTroubleshoot />Try Troubleshoot</button>
                </div>
               </div>
                :
                <div className=" w-full md:w-full lg:w-3/4 h-auto bg-gradient-to-r from-stone-500 to-stone-900 mt-8 mb-8 p-8 relative flex flex-col">
                    <button className="join-item btn btn-outline mb-4 text-yellow-500 w-fit" onClick={()=>{handleBack()}}><AiFillCaretLeft />Previous Option</button>  
                         <h2 className={`absolute top-10 right-10 flex items-center gap-2 text-blue-500 lg:text-xl ${Array.isArray(issues)?"text-yellow-600":"text-blue-500"} `}>
                            {Array.isArray(issues)?<AiOutlineInfoCircle/>:<AiFillCheckCircle/>}
                            {Array.isArray(issues)?"Try these steps carefully":"Select your issues"}
                            </h2>  
 
                                        {
                         (Array.isArray(issues))?issues.map((item,key)=>(
                           
                            <div key={key}
                            className={`chat chat-end cursor-grab ml-auto`}
                            onClick={()=>{handleIssues(item)}}> 
                              <div className={`chat-bubble chat-bubble-info

                              animation-delay:${delay}s
                              top:${position}
                              `}>
                              {item}
                              </div>
                            </div>)

                         )
                    
                        : Object.keys(issues).map((item,key)=>(
                            <div key={key}
                            className="chat chat-start cursor-grab"
                            onClick={()=>{handleIssues(item)}}> 
                              <div className={`chat-bubble chat-bubble-accent
                              animation-delay:${delay}s
                              top:${position}
                              `}>
                              {item}
                              </div>
                            </div>)
                        
                        )
                    }
                     </div>
            }
        </div>
       </section>
    );
};

export default Troubleshoot;