//Index.js
import { BrowserRouter } from 'react-router-dom'
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

//App.js

import { Routes, Route } from 'react-router-dom'
<Routes>
    <Route path='*' element={<h1>404</h1>} />
    <Route path='/' element={<Home />} />
    <Route path='/details' element={<UserDetails {...userInfo} closeUserDetailsHandler={closeUserDetailsHandler} />} />
</Routes>

//Navigate
import { useNavigate } from 'react-router-dom'
const navigate = useNavigate()
navigate("/details") //on buttons 

//params
import { useParams } from 'react-router-dom'
//in app.js
<Routes>
    <Route path='/details/:itmeId' element={<UserDetails {...userInfo} closeUserDetailsHandler={closeUserDetailsHandler} />} />
</Routes>
// in component
const {itemId} = useParams()


