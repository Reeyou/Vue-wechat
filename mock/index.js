import Mock from 'mockjs'
import data from '../mockdata.json'

Mock.mock('/user/self', {
  code: 0,
  codeMsg: '成功',
  data: data.self
})

Mock.mock('/user/friends', {
  code: 0,
  codeMsg: '成功',
  data: data.friend
})

