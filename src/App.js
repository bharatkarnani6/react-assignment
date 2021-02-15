import Routes from './Routes/Routes'
import { AuthProvider } from './Context/AuthContext'
function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
    // <div>
    //   <Routes />
    // </div>
  );
}

export default App;
