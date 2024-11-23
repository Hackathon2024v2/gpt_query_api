import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { advisePromt } from '../controller/promt'

export const help = new Elysia({
    prefix: '/help'
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
    .post('/', async ({ body }) => {
        const promt = await advisePromt(body.subject, body.question);
        return promt
    },
{
    body: t.Object({
        subject: t.String(),
        question: t.String()
})})