import UserProfile from "./components/UserProfile/index.js"
import "./App.css"
const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },




const App = () => (
    <h1 className="title">Users List App</h1>
    <li className="list-container" >
        {userDetailsList.map(eachItem=>(
            <UserProfile userData={eachItem}

        ))

        }
    </li>
)

export default App
