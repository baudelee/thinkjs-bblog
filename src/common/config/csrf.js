export default {
  session_name: "__CSRF__", // Token的值存在session的名字
  form_name: "__CSRF__", // CSRF字段名字，从该字段获取值校验
  errno: 400, // 错误号
  on: true,
  errmsg: "token error" // 错误信息
}