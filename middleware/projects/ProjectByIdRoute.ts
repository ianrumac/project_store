import { ProjectRepository } from "../../repository/ProjectRepository.ts";

export const ProjectById = async ({ params, response }: {
  params: {
    id: number;
  };
  response: any;
}) => {
  response.body = await ProjectRepository.forId(params.id);
  response.status = 200;
};
