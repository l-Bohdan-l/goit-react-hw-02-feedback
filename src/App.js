import './App.scss';
import { Profile } from './components/Profile/Profile';
import userData from './components/Profile/user.json';
import { Statistics } from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';
import { FriendsList } from './components/FriendsList/FriendsList';
import friends from './components/FriendsList/friends.json';
import { Transactions } from './components/Transaction-history/Transactions';
import items from './components/Transaction-history/transactions.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile user={userData} />
        <Statistics title="Upload stats" stats={data} />
        <FriendsList friends={friends} />
        <Transactions items={items} />
      </header>
    </div>
  );
}

export default App;
