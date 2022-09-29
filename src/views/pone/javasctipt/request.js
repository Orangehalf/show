import axios from 'axios';
export function getChart1()
{
   return axios({
        url:'/proxy/dashboard/getCharts.htm'
      }).then(res=>{
        return res.data.data;
      })
}