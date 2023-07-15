import axios from 'axios';

const STORAGE_SEVER_URL = import.meta.env.VITE_STORAGE_SEVER_URL;

export async function saveImageWebp({filename, ext}) {
  try {
    const res = await axios.post(STORAGE_SEVER_URL + '/save/ext', {
      filename,
      ext
    });

    if(res.status == 200) {
      return {
        success: true,
        data: res.data
      }
    }
  } catch(err) {
    if(err.response && err.response.request.status == 400)
      return {
        success: false,
        data: err.response.data
      }
    return {
      success: false,
      data: {
        'message': "Bad Internet Connection"
      }
    }
  }
}