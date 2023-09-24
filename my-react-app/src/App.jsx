import { Main } from "./Components/Main"
import { Products } from "./Components/Main/Products"
import { PageTemplat } from "./Components/PageTemplate"

import '/src/styles/reset.css'
import '/src/styles/globalstyles.css'

function App() {

  return (
    <>
      <PageTemplat>
        <Main/>
        
      </PageTemplat>
    </>
  )
}

export default App
