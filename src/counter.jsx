import { useEffect,useState } from "react"
import axios from 'axios'
import "./Style.css"
function Counter(){
    const [info, setInfo] = useState([]);
    const [page, setPage] = useState(1)

const fetchData=async()=>{

try {
    const res= await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    console.log(res.data)
    setInfo(res.data)
} catch (error) {
    
    alert("failed to fetch data");
    console.log(error)
}
}
// ..........................
const previous=()=>{
if(page ==1){
    return
}else{
    setPage((page)=> page-1)
}
}


const next=()=>{
    if (page === Math.ceil(info.length / 10)) {
        return;
    }else{
        setPage((page) => page + 1);

    }

}


useEffect(()=>{
    fetchData()
},[])

    return (
<>
<div className="App">
<h3>Employee Data Table </h3>
<table className="table1">
<thead className="theadp">
<tr >
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Role</th>
</tr>
</thead>

{info.slice((page - 1) * 10, page * 10).map((info, index) => (
            <tbody key={index}>
              <tr className="tablerow">
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.role}</td>
              </tr>
            </tbody>
          ))}
</table>
</div>


<div className="buttons">
 <button type="button" onClick={previous}> Previous</button>

<div>{page}</div>
 <button type="button" onClick={next}>Next</button>


</div>
</>

    )
}
export default Counter