import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchPage from "./pages/search-page/SearchPage";
import SignIn from "./pages/login/components/Forms/SignIn";
import EventList from "./pages/events/EventsList";
import CreateEvent from "./pages/createEvent/CreateEvent";
import Login2 from "./pages/login2/Login2";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SearchPage />} />
              <Route path="dashboard" element={<App />} />
              <Route path="login" element={<Login2 />} />
              <Route path="events" element={<EventList />} />
              <Route path="create" element={<CreateEvent />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
