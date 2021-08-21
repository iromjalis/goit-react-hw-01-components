import './App.css';
import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';
import Statistics from './components/Statistics/Statistics';
//file
import user from './data/user.json'
import statisticalData from './data/statistical-data.json'

let randomColor = `'#' + Math.floor(Math.random() * 16777215).toString(16)`


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

        <Container title='Секция статистики:'>
          <Statistics title="Upload stats" stats={statisticalData} randomColor={randomColor}/>
        </Container>
<Container><Statistics stats={statisticalData} randomColor={randomColor} /></Container>
      </header>
    </div>
  );
}

export default App;
