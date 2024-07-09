import { useEffect, useState } from "react";
import DifferentProduct from "./DifferentProduct/DifferentProduct";
const DifferentProducts = () => {
    const [gameItem,setGameItem]=useState([]);
    const [partsItem,setPartsItem]=useState([]);
    const [spaceItem,setSpaceItem]=useState([]);
    const [pcItem,setPcItem]=useState([]);
    useEffect(()=>{
        fetch("gameItem.json")
        .then(response => response.json())
        .then(data => setGameItem(data))

        fetch("partsItems.json")
        .then(response => response.json())
        .then(data => setPartsItem(data))

        fetch("spaceItem.json")
        .then(response => response.json())
        .then(data => setSpaceItem(data))

        fetch("pcItem.json")
        .then(response => response.json())
        .then(data => setPcItem(data))
    
    },[])
    return (
        <div className="conaiter mx-auto">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4  text-gray-800">
                <div className="shadow-lg p-4">
                    <h2 className="text-center text-2xl font-bold p-2 text-rose-500">Gaming Accessories</h2>
                <div className=" grid grid-cols-2 h-auto gap-2 justify-items-stretch ">
                {
                gameItem.map((item, id) => (
                    <DifferentProduct key={id} item={item}></DifferentProduct>
                ))
                }
           </div>
            
                </div>
            <div className="p-4 shadow-lg">
            <h2 className="text-center text-2xl font-bold p-2 text-rose-500">Deals in parts</h2>
            <div className=" grid grid-cols-2 h-auto gap-2 justify-items-between ">
            {
                partsItem.map((item,id)=>(
                    <DifferentProduct key={id} item={item}></DifferentProduct>
                ))
            }
           </div>
                </div>

                <div className="p-4 shadow-lg">
            <h2 className="text-center text-2xl font-bold p-2 text-rose-500">Refresh your Space</h2>
            <div className=" grid grid-cols-2 h-auto gap-2 justify-items-between ">
            {
                spaceItem.map((item,id)=>(
                    <DifferentProduct key={id} item={item}></DifferentProduct>
                ))
            }
           </div>
                </div>
                <div className="p-4 shadow-lg">
                <h2 className="text-center text-2xl font-bold p-2 text-rose-500">Deals in PCs</h2>
                {
                pcItem.map((item,id)=>(
                    <DifferentProduct key={id} item={item}></DifferentProduct>
                ))
                 }
                </div>
            
           </div>
        </div>
    );
};

export default DifferentProducts;