import './App.css';
import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';
import Statistics from './components/Statistics/Statistics';
//file
import user from './data/user.json'
import statisticalData from './data/statistical-data.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Container title='Профиль социальной сети:'>
          <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/></Container>

        <Container title=''>
          {/* <Statistics title="Upload stats" stats={statisticalData} /> */}
        </Container>

      </header>
    </div>
  );
}

export default App;
