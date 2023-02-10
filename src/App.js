import logo from './logo.svg';
import './App.css';
import CompAppBar from './components/AppBar';
import CompApptabs from './components/AppTabs';

function App() {
  return (
    <>
      <CompAppBar title={'Angga Wika Nugraha'}/>
      <CompApptabs/>
      <CompAppBar title='dikerjakan tanggal 10 februari 2020 pukul 7 pagi'/>
    </>
  );
}

export default App;
