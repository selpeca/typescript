import _ from "lodash"

const data = [
  {
    username:'nico',
    role: 'admin',
  },
  {
    username: 'jane',
    role: 'user',
  },
  {
    username: 'bill',
    role: 'seller',
  },
  {
    username: 'john',
    role: 'seller',
  }
]
const respuesta = _.groupBy(data, (item) => item.role)
console.log(respuesta);
