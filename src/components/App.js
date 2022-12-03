// Personal CSS
import '../css/app.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"
import Header from "./Header"
import MainContent from "./MainContent"

function App() {
  return (
    <div className="App">
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row text-white">
          <div id="mainContainer" className="rounded-5 p-0 mx-auto my-sm-3 bg-dark shadow">

            <Header />
            <MainContent />

          </div>
        </div>
      </div>
    </div>
  )
}

export default App