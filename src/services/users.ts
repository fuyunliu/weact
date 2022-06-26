import instance from "./http";

// 文章详情
export const get = async (id: number, params?: object) => instance.get(`/users/${id}/`, {params: params}).then(res => res.data);
