import pageA from '../views/pageA'
import pageB from '../views/pageB'

export default [{
    path:'/pageA',
    component:pageA
},{
    path:'/pageB',
    component:pageB
},{
    path:'/pageC',
    component:()=>(import('../views/pageC'))
}]