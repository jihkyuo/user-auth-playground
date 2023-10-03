import './App.css';
import { Api } from 'c@/common/service/api.service';
import { useEffect } from 'react';


const testApi = async () => {
  return await Api.get(`/`);
};

function App() {

  useEffect(() => {
    testApi().then(console.log);
  }, []);

  return (
    <>
      test
    </>
  );
}

export default App;
