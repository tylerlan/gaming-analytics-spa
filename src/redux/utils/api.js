import axios from 'axios';

export const lookup = (dataType, dateRange) => {
  const [from, to] = dateRange; // e.g. dateRange = {'2017/11/04', '2017/12/04 '}

  const query = `${process.env.REACT_APP_API_URL}/${dataType}/?from=${
    from
  }&to=${to}`;

  return axios(query)
    .then(response => response.data)
    .catch(e => {
      console.error(e);
      return 'error';
    });
};
