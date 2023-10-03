import './App.css';
import { Api } from 'c@/common/service/api.service';
import { useEffect } from 'react';


const testApi = async () => {
  return await Api.get(`user/login`);
};

const postApi = async () => {
  return await Api.post(`user/login`, { test: 'hello world'});
};

function App() {

  useEffect(() => {
    testApi().then(console.log);
  }, []);

  return (
    <>
      test

      <button onClick={postApi}>click</button>
    </>
  );
}

export default App;
