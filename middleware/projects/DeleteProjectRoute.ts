import { ProjectRepository } from "../../repository/ProjectRepository.ts";
import { ProjectById } from "./ProjectByIdRoute.ts";
export const DeleteProject = async ({ params, response }: {
  params: {
    id: number;
  };
  response: any;
}) => {
  let x = await ProjectRepository.remove(params.id);
  if (x) {
    response.status = 200;
  } else {
    response.status = 400;
  }
};

export namespace Projects {
  export const findById = ProjectById;
}
