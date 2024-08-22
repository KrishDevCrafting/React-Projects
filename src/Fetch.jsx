import React, { useEffect }  from "react";
const Mycomponent = ()=>{
    const [data,setdata] = React.useState([])
   useEffect(()=>{ 
const num = async()  =>{
    
try{
    const response = await fetch("http://localhost:7000/Empolyees")
    const add = await response.json()
    setdata(add)
}
catch(err){
console.error("this is not Work..!",err);
}
}
num()
},[])



return <>



<div className="col-5 mx-auto">
<ul>
    {data.map((e,index)=>(
        <li key={index}>{e.department}</li>
    ))}
</ul>

</div>
</>
}



export default Mycomponent