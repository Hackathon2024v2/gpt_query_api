import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { foodPromt } from "../controller/promt";
export const food = new Elysia({
  prefix: "/food",
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
  .post(
    "/",
    async ({ body }) => {
      const promt = await foodPromt(
        body.animal,
        body.height,
        body.proteins,
        body.lipids,
        body.carbs
      );
      return promt;
    },
    {
      body: t.Object({
        animal: t.String(),
        height: t.String(),
        proteins: t.String(),
        lipids: t.String(),
        carbs: t.String(),
      }),
    }
  );
