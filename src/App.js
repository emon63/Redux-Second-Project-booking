
import { useSelector } from 'react-redux';
import Preview from './components/Preview';
import Form from './components/Form';

function App() {

  const data = useSelector((state) => [...state]);
  console.log('data', data);

  return (

    <div>
      {/* <!-- Input Data --> */}
      <div class="mt-[160px] mx-4 md:mt-[160px] relative">
        <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
          <Form></Form>
        </div>
      </div>

      {/* <!-- Preview Data --> */}
      {

        data.map((d) => (
          <Preview key={d.id}
            d={d}

          ></Preview>
        )
        )
      }
    </div>
  );
}

export default App;
