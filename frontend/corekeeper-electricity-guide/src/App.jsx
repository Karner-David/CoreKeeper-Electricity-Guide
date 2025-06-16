import './App.css';
import SearchFeedPage from './components/search-feed-page/searchfeedpage';
import SearchedItemPage from './components/searched-item-page/searched-item-page';
import NavBar from './components/navbar/navbar';
import BasicsPage from './components/basics-page/basics-page';
import ContraptionsPage from './components/contraptions-page/contraptions-page';
import { Routes, Route, Navigate } from 'react-router-dom';
import createNewItem from './TEST.jsx'; 

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace/>}/>
        <Route path="/search" element={<SearchFeedPage/>} />
        <Route path="/basics" element={<BasicsPage/>} />
        <Route path="/contraptions" element={<ContraptionsPage/>} />
        <Route path="/item/:itemName" element={<SearchedItemPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      
      {/* <SearchedItemPage></SearchedItemPage> */}
      {/* <SearchFeedPage></SearchFeedPage> */}
      {/* <BasicsPage></BasicsPage> */}
      {/* <ContraptionsPage></ContraptionsPage> */}
    </div>
  )
}

export default App
