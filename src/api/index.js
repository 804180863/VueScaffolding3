import ajax from './ajax' //引入上面得那个文件
const prefix = '/api' //自己配置得跨域代理

export const GetOneData = () => ajax(`${prefix}/one`) //普通使用
export const GetTwoDataV =({value})=> ajax(`${prefix}/two`, {value})//提交给后台数据