import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <div className="card-container">
        <Card btnText="Visit me" heading="About Macbook" />
        <Card heading="About Lenovo"/>
        <Card heading="About HP"/>
      </div>
    </>
  )
}

export default App
