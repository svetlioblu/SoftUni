import { useEffect, useState } from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import UserList from "./components/UserList";
import * as userService from "./services/userService";


function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    userService.getAll()
      .then(setUsers)
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList users={users} setUsers={setUsers} />
        </section>
      </main>
      <Footer />
    </>
  );

}



export default App;