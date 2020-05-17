import { validateAndCreateProject } from "./projects/CreateProject.ts";
import { Project } from "../models/Project.ts";
import { ProjectRepository } from "../repository/ProjectRepository.ts";

export const allProjects = async ({ response }: { response: any }) => {
  response.body = JSON.stringify(await ProjectRepository.all());
  response.status = 200;
};

export const projectFor = async ({ params, response }: {
  params: {
    id: number;
  };
  response: any;
}) => {
  response.body = await ProjectRepository.forId(params.id);
  response.status = 200;
};

export const deleteProject = async ({ params, response }: {
  params: {
    id: number;
  };
  response: any;
}) => {
  response.body = await ProjectRepository.remove(params.id);
  response.status = 200;
};

export const createProject = async (
  { request, response }: { request: any; response: any },
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

export const updateProject = async ({ response }: { response: any }) => {
  response.body = "Project updated";
  response.status = 200;
};
