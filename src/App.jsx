import {
 userData,
 Profile 
} from 'components';
import userData from './data/userData.json';

const App = () => {
    return (
      <>
        <Profile
        // key = {userData.key}
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </>
    );
}

export default App
