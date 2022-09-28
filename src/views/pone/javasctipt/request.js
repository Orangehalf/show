import axios from 'axios';
export function getChart1()
{
    axios({
        url:'/dashboard/getCharts.htm'
      }).then(res=>{
        console.log(res.data)
        return res.data
      })
}