import axios from "axios";

type WrappedApiData<T> = {
  data: T;
};

export async function get<TResponse = unknown>(url: string) {
  return (await axios.get<WrappedApiData<TResponse>>(url)).data.data;
}

export async function post<TResponse = unknown, TData = object>(
  url: string,
  data: TData,
) {
  return (await axios.post<TResponse>(url, data)).data;
}

export async function put<TResponse = unknown, TData = object>(
  url: string,
  data: TData,
) {
  return (await axios.put<WrappedApiData<TResponse>>(url, data)).data.data;
}

export async function del(url: string) {
  return (await axios.delete(url)).data;
}
