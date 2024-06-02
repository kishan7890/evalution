import { Link } from "react-router-dom";



const links = [
    {
        to:"/",
        lable:"HOME",
    },
    {
        to:"/login",
        lable:"LOGIN",
    },
    {
        to:"/productdetails",
        lable:"PRODUCTDETAILS",
    },
];


export default function Navbar(){
    return(
        <>
            {links?.map((link)=>(
                <Link key={link.to} to={link.to}>
                    {link.lable}
                </Link>
            ))};
        </>
    )
}

