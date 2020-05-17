import { ProjectRepository } from "../../repository/ProjectRepository.ts";

export const AllProjects = async ({ response }: { response: any }) => {
  response.body = JSON.stringify(await ProjectRepository.all());
  response.status = 200;
};
