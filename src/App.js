// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"
import Header from "./components/Header"
import MainContent from "./components/MainContent"

function App() {
  return (
    <div className="App">
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row text-white">
          <div style={{
            maxWidth:"35rem", maxHeight:"95vh", overflowY: "scroll"}} className="rounded-5 p-0 mx-auto my-lg-3 bg-dark shadow">

            <Header />
            <MainContent />

          </div>
        </div>
      </div>
    </div>
  )
}

export default App