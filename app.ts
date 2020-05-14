import { allProjects,projectFor,createProject,updateProject, deleteProject } from './middleware/ProjectHandler.ts'

import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
const env = Deno.env.toObject()
const PORT = env.PORT || 4000
const HOST = '127.0.0.1'

const router = new Router()

const app = new Application()
app.use(async (ctx, next) => {
    ctx.response.headers.append("Access-Control-Allow-Headers",'Origin, X-Requested-With, Content-Type, Accept');
  ctx.response.headers.append("Access-Control-Allow-Origin", `*`);
  ctx.response.status = 200

  await next();
});

app.use(router.routes())
app.use(router.allowedMethods())

router
.get('/projects/',allProjects)
.get('/projects/:id', projectFor)
.post('/projects/', createProject)
.put('/projects/:id:', updateProject)
.delete('/projects/:id:', deleteProject)

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

console.log(`Listening at ${HOST}:${PORT}`)

await app.listen(`${HOST}:${PORT}`)
