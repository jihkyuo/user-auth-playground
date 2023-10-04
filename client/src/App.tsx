import './App.css';
import { Api } from 'c@/common/service/api.service';
import { useEffect } from 'react';
import { postUserApi } from 'c@/auth/service/auth.service';
import { UserBodyDto } from 'c@/auth/service/auth.interface';

const testApi = async () => {
  return await Api.get(`user/login`);
};

function App() {

  const joinMutation = async () => {
    const sampleUSer: UserBodyDto = {
      email: 'jiwon@gmail.com',
      username: '지원',
      name: 'jiwon',
      password: '1234',
      passwordConfirm: '123',
    };

    try {
      await postUserApi(sampleUSer);
    } catch (err) {
      console.error(err);
      alert(err.response.data.message);
    }
  };

  useEffect(() => {
    testApi().then(console.log);
  }, []);

  return (
    <>
      Join

      <button onClick={joinMutation}>click</button>
    </>
  );
}

export default App;
