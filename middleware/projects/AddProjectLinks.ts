import { validateAndCreateProject } from "./projects/CreateProject.ts";

export const AddProjectLinks = async (
  { params, request, response }: {
    request: any;
    response: any;
    params: {
      id: String;
    };
  },
) => {
  const body = await request.body();
  const project: Project = body.value;
  if (validateAndCreateProject(project)) {
    response.body = { msg: "OK" };
    console.log();
    response.status = 200;
  } else {
    response.body = { msg: "Error" };
    response.status = 400;
  }
};
