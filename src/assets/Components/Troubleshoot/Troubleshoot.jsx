
import { useEffect, useState } from "react";
import troubleshootIssues from "../../../../public/troubleshoot";
import img from"../../../assets/Stuck.jpg";
import './Troubleshoot.css'
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
                    <h2 className="text-4xl font-bold text-purple-950  md:text-yellow-400 ">Tech troubles ? Let us be your solution !</h2>
                    <button className="btn md:btn-outline btn-warning" onClick={()=>{setFindIssue(!findIssue)}}>Try Troubleshoot</button>
                </div>
               </div>
                :
                <div className=" w-full md:w-3/4 h-auto bg-gradient-to-r from-stone-500 to-stone-900 mt-8 mb-8 p-8 relative flex flex-col">
                    <button className="join-item btn btn-outline mb-4 text-yellow-500 w-fit" onClick={()=>{handleBack()}}>Previous Option</button>  
                         <div role="alert" className={`alert ${(Array.isArray(issues))?"alert-success":"alert-warning"} w-fit absolute right-5`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{(Array.isArray(issues))?"Try these steps":"Select your Issues"}</span>
                        </div>     
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