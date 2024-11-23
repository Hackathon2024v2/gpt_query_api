import { Elysia } from "elysia";
// import { food } from "./router/foodRouter";
import { avatar } from "./router/animalRouter";
import swagger from "@elysiajs/swagger";
import { food } from "./router/foodRouter";
import { help } from "./router/adviseRouter";

const app = new Elysia()
.use(
    swagger({
      documentation: {
        info: {
          title: 'Animal API',
          version: '0.0.1',
        },
      },
    })
  )
.use(avatar)
.use(food)
.use(help)
.listen(3000)


