import React,{useState} from "react";
import axios from "axios";

export default function Home(){
    // const [data,]
    async function getdata(){
        try {
           let res = await axios({
            method: "GET",
            url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",
           }) 

           console.log(res?.data);
           
        } catch (error) {
            console.log(error)
        }
    }
    getdata()
    return(
        <h1>home page</h1>
        
    )
}