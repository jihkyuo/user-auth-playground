import { Api } from 'c@/common/service/api.service';
import { UserBodyDto } from 'c@/auth/service/auth.interface';

export const postUserApi = async (body: UserBodyDto) => {
  return await Api.post(`user/join`, body);
};