import instance from "./http";

// 文章详情
export const get = async (id: number, params?: object) =>
    instance
        .get(`/articles/${id}/`, { params: params })
        .then((res) => res.data);

// 文章列表
export const list = async () => instance.get("/articles/").then((res) => res.data);

// 文章列表
export const fetch = async (url: string) => instance.get(url).then((res) => res.data);

// 新增文章
export const create = async (data: object) =>
    instance.post("/articles/", data).then((res) => res.data);

// 更新文章
export const update = async (id: number, data: object) =>
    instance.patch(`/articles/${id}/`, data).then((res) => res.data);

// 删除文章
export const destroy = async (id: number) =>
    instance.delete(`/articles/${id}/`).then((res) => res.data);
