import axios from 'axios';
export function getChart1() {
  return axios({
    url: '/proxy/dashboard/getCharts.htm'
  }).then(res => {
    return res.data.data;
  })
}

export function getOpinion(keyword) {
  return axios({
    url: '/proxy/dashboard/getOpinion.htm',
    params: {
      keyword: keyword
    }
  }).then(res => {
    return res.data.data;
  })
}

export function getAnswer(question) {
  return axios({
    url: '/proxy/dashboard/getAnswer.htm',
    params: {
      question: question
    }
  }).then(res => {
    return res.data.data;
  })
}

export function listPage(pageNum, pageSize) {
  return axios({
    url: '/proxy/dashboard/list.htm',
    params: {
      pageNum: pageNum,
      pageSize: pageSize
    }
  }).then(res => {
    return res.data;
  })
}
