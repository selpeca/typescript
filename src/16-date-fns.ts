import { subDays, format } from 'date-fns'

const date = new Date(1998,1,28)
const respuesta = subDays(date,25)
const str = format(respuesta, 'yyyy/MM/dd')
console.log(str);
