import { ProjectRepository } from "../../repository/ProjectRepository.ts";

export const UpdateProject = async ({ params, request, response }: {
  params: {
    id: number;
  };
  request: any;
  response: any;
}) => {
  let project = await request.body as Project;
  response.body = await ProjectRepository.update(
    params.id,
    project.name,
    project.icon,
    project.description,
  );
  response.status = 200;
};
