import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ViewGames from './pages/ViewGames'
import GameDetails from './pages/GameDetails'

const App = () => {

  return (
    <div>
        <Header />
        <main>
        <Routes>
          <Route path="/" element={ <Home /> } /> 
          <Route path="about" element={ <About /> } />
          <Route path="view/games/:id" element={ <ViewGames /> } />
          <Route path="games/details/:id" element={ <GameDetails /> } />
        </Routes>
        </main>
    </div>
  )
}

export default App
