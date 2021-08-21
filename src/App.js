import './App.css';
import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';

import user from './data/user.json'

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
        </Container>

      </header>
    </div>
  );
}

export default App;
