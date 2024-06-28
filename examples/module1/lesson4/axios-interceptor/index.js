import axios from 'axios';

axios.interceptors.request.use(function (config) {
  config.metadata = { startTime: performance.now() };
  return config;
});

axios.interceptors.response.use(function (response) {
  const {
    config: { metadata },
  } = response;
  console.log(
    `Czas zapytania ${Math.floor(performance.now() - metadata.startTime)}ms`
  );
  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
