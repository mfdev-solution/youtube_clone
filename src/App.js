import { BrowserRouter,Routes,Route} from  'react-router-dom'
import { Box } from '@mui/material'

import { Navbar,VideoDetail,ChannelDetail,SearchFeed,Feed } from './components'
 
export const App = () => {
  return (
    <BrowserRouter >
      <Box sx={{backgroundColor:"#000"}}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed/>} />
        <Route path="/video/:id"  element={<VideoDetail/>} />
        <Route path="/channel/:id"  element={<ChannelDetail/>} />
        <Route path="/search/:searchIterm"  element={<SearchFeed/>} />
      </Routes>
      </Box>
    </BrowserRouter>


  )
}

export default App