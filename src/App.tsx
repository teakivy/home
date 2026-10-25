import './App.css'
import Clock from './components/Clock'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <>
      {/* <section className="header">
        Header
      </section> */}

      <section className="central">
        <span className="central-clock">
          <Clock />
        </span>
        <span className="central-search-bar">
          <SearchBar />
        </span>
      </section>
      {/* <section className="widgets">Widgets</section> */}
    </>
  )
}

export default App
