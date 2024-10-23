import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import Home from './Home/Home/Home.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Login from './pages/Login/Login.jsx';
import BlogDetails from './pages/BlogDetails/BlogDetails.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import BanglaBooks from './pages/BanglaBooks/BanglaBooks.jsx';
import EnglishBooks from './pages/EnglishBooks/EnglishBooks.jsx';
import Documentation from './pages/Documentation/Documentation.jsx';
import ResearchPapers from './pages/ResearchPapers/ResearchPapers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/blogDetails',
        element: <BlogDetails></BlogDetails>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/banglaBooks',
        element: <BanglaBooks></BanglaBooks>
      },
      {
        path: '/englishBooks',
        element: <EnglishBooks></EnglishBooks>
      },
      {
        path: '/documentation',
        element: <Documentation></Documentation>
      },
      {
        path: '/researchPapers',
        element: <ResearchPapers></ResearchPapers>
      }
    ]
  },
  {
    path: '/signup',
    element: <Signup></Signup>
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
