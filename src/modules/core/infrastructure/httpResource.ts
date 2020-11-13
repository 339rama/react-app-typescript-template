import { FetchResource } from '@snap-alex/domain-js';
import fetch from 'cross-fetch';



const defaultOptions: FetchResource['defaultOptions'] = {
  timeOffset: false,
  handleError: (error) => {
    const { response } = error;
    if (response.status === 500) {
      console.error('Произошла ошибка на сервере')
    }
    return error;
  },
};

const httpResource = new FetchResource(
  process.env.REACT_APP_BASE_URL as string, 
  defaultOptions, 
  fetch);

export default httpResource;
