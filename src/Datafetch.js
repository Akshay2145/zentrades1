import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'

const Datafetch = () => {
    const [data, setData] = useState([])

    const fetchData = async()=>{
        const result = await axios.get('https://s3.amazonaws.com/open-to-cors/assignment.json');

        const dataArray = Object.values(result.data.products);

        dataArray.sort((a, b) => parseInt(b.popularity) - parseInt(a.popularity));

        console.log(dataArray);
        
        setData(dataArray);
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <>
        <table border="1px">
            <tr>
            <th>subcategory</th>
            <th>title</th>
            <th>price</th>
            <th>popularity</th>
            </tr>

            {data.map((ele)=>{
                return <tr>
                    <th>{ele.subcategory}</th>
                    <th>{ele.title}</th>
                    <th>{ele.price}</th>
                    <th>{ele.popularity}</th>
                </tr>
            })}
        </table>
       
    </>
  )
}

export default Datafetch