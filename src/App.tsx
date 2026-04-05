
import './App.css'
import { HomePage } from './components/homepage'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import { Shareduser } from './components/sharedUser'
import { LinkPage } from './pages/link'
import { TweetPage } from './pages/tweet'
import { YoutubePage } from './pages/youtube'
import { SearchPage } from './pages/search'
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/share/:sharelink' element={<Shareduser/>}/>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
         <Route path='/link' element={<LinkPage/>}/>
         <Route path='/tweet' element={<TweetPage/>}/>
         <Route path='/youtube' element={<YoutubePage/>}/>
         <Route path='/search/:id' element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
