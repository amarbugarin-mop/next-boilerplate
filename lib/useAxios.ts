/* eslint-disable class-methods-use-this */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

/**
 * Abstract base class for Axios-based HTTP clients.
 */
abstract class AxiosClient {
  /**
   * The Axios instance used for making HTTP requests.
   */
  protected readonly instance: AxiosInstance;

  /**
   * Constructs a new instance of the AxiosClient.
   * @param {string} baseURL - The base URL for the API requests.
   */
  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

  /**
   * Initializes the response interceptor to handle successful responses and errors.
   * @private
   */
  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  /**
   * Handles a successful response by returning the response data.
   * @param {AxiosResponse} response - The Axios response object.
   * @returns {any} The response data.
   * @private
   */
  private _handleResponse = ({ data }: AxiosResponse): any => data;

  /**
   * Handles an error response by rejecting the Promise with the error object.
   * @param {AxiosError} error - The Axios error object.
   * @returns {Promise<AxiosError>} A rejected Promise with the error object.
   * @protected
   */
  protected _handleError = (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error);
}

export default AxiosClient;
