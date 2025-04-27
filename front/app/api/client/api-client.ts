import axios from "axios";

type WrappedApiData<T> = {
  data: T;
};

export async function get<T = unknown>(url: string) {
  return (await axios.get<WrappedApiData<T>>(url)).data.data;
}
