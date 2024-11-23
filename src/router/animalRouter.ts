import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { activityPromt } from '../controller/promt'

export const avatar = new Elysia({
    prefix: '/avatar'
})
    .use(swagger())
    // .post('/register', ({ body, }) => {
        
    //   }, {
    //     body: t.Object({
    //       email: t.String(),
    //       password: t.String(),
    //       username: t.String()
    //     })
    
    //   })
    .get('/', async ({ query }) => {
        const promt = await activityPromt(query.animal, query.activity);
        return promt
    },
{
    query: t.Object({
        animal: t.String(),
        activity: t.String()
})})