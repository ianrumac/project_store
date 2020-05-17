import { DeleteProject } from "./middleware/projects/DeleteProjectRoute.ts";
import { UpdateProject } from "./middleware/projects/UpdateProjectRoute.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { CreateProject } from "./middleware/projects/CreateProjectRoute.ts";
import { ProjectById } from "./middleware/projects/ProjectByIdRoute.ts";
import { AllProjects } from "./middleware/projects/AllProjectsRoute.ts";
import { GetProjectLinks } from "./middleware/projects/GetProjectLinksRoute.ts";

const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = "127.0.0.1";

const router = new Router();

const app = new Application();
app.use(async (ctx, next) => {
  ctx.response.headers.append(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  ctx.response.headers.append("Access-Control-Allow-Origin", `*`);
  ctx.response.status = 200;

  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

router
  .get("/projects/", AllProjects)
  .get("/projects/:id", ProjectById)
  .post("/projects/", CreateProject)
  .put("/projects/:id:", UpdateProject)
  .delete("/projects/:id:", DeleteProject)
  .get("/projects/:id/links", GetProjectLinks)
  .post("/projects/:id/links", CreateProject);

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

console.log(`Listening at ${HOST}:${PORT}`);

await app.listen(`${HOST}:${PORT}`);
