// {
//   protocol: "http",
//   host: "www.bbkedu.com",
//   path: "/product/list",
//   params: {
//     id: "12345",
//     sort: "discount",
//     name: ["a", "b"]
//   },
//   hash: "title"
// }

const parseUrl = url => {
  // 创建一个 URL 对象
  var { protocol, hostname, pathname, hash, searchParams } = new URL(url)

  // 将 URL 对象中的各个部分信息存储到 result 对象中
  var result = {
    protocol: protocol.replace(':', ''),
    hostname: hostname,
    path: pathname,
    params: {},
    hash: hash.replace('#', '')
  }

  // 遍历 URL 对象中的查询参数，将其存储到 params 对象中
  const params = {}
  searchParams.forEach((value, key) => {
    // 先判断 params 对象中是否已经存在 key 属性
    if (!(key in params)) {
      // 如果不存在，直接赋值上去
      params[key] = value
    } else {
      // 如果存在相同的key先判断是不是数组，如果不是则需要创建新数组，并赋值上去
      if (!Array.isArray(params[key])) {
        params[key] = [params[key], value]
      } else {
        params[key].push(value)
      }
    }
  })
  result.params = params

  return result
}

const url = parseUrl('http://www.bbkedu.com/product/list?id=123456&sort=discount&name=a&name=b#title')
console.log('url', url)
