import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/Navigation.component';
import Home from './routes/Home/Home.component';
import Authentication from './routes/Authentication/Authentication.component';

const Shop = () => {
  return(
    <div>
      <h1> I am the Shop page</h1>
    </div>
  );
}

function App() {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;