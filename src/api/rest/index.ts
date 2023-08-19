import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosStatic,
  AxiosError,
} from "axios";

class HttpClient {
  private client: AxiosInstance;
  private rawClient: AxiosStatic;

  constructor() {
    this.client = axios;
    this.rawClient = axios;
  }

  setReqConfig(config: AxiosRequestConfig) {
    this.client = axios.create(config);
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.get<T>(url, config);
  }

  post<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.post<T>(url, config?.data, config);
  }

  put<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.put<T>(url, config?.data, config);
  }

  patch<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.patch<T>(url, config?.data, config);
  }

  //TODO: 작동확인하기
  isHttpError(error: unknown): error is AxiosError {
    return this.rawClient.isAxiosError(error);
  }

  //TODO: 작동확인하기
  interception() {
    this.client.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error)
    );
    this.client.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    );
  }
}

export default HttpClient;
