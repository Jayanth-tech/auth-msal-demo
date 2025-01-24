import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMsal, useMsalAuthentication } from '@azure/msal-react'
import { InteractionType } from '@azure/msal-browser'

function App() {
  // Trigger MSAL authentication with redirect method
  useMsalAuthentication(InteractionType.Redirect)

  const [m_strUser, setm_steUser] = React.useState("")
  const [count, setCount] = React.useState(0)

  const { accounts } = useMsal();  // Destructure 'accounts' from useMsal

  // useEffect to update user info once when component mounts
  useEffect(() => {
    if (accounts.length > 0) {
      const username = accounts[0]?.username || '';  // Safely access username
      setm_steUser(username);
    }
  }, [accounts]);

  // Conditional render based on user information
  if (m_strUser !== "") {
    return (
      <div className="card">
        Logged in successfully
      </div>
    )
  } else {
    return (
      <div> Please wait </div>
    )
  }
}

export default App;
