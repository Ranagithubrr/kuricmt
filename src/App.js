import './App.css';
import { Route, Routes } from 'react-router';
import Homepage from './pages/Home/Homepage';
import Login from './pages/Login/Login';
import Patients from './components/dashboard/pateints/Patients';
import Review from './components/dashboard/review/Review';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/dashboard/profile/Profile';
import Maindashboard from './components/dashboard/maindash/Maindashboard';
import Notfound from './pages/Notfound/Notfound';
import Calculators from './pages/calculators/Calculators';
import Register from './pages/register/Register';
import Userprofile from './components/dashboard/user-profile/Userprofile';
import UpdateProfile from './components/dashboard/user-profile/UpdateProfile';
import Notifications from './pages/Notifications/Notifications';
import Hospitalsurvey from './pages/Hospital-Survey/Hospitalsurvey';
import Accountreview from './pages/Accounts-Review/Accountreview';
import Earnings from './pages/Earnings/Earnings';
import Chat from './pages/chat/Chat';
import Contents from './pages/Contents/Contents';
import AddNotice from './pages/Add-Notice/AddNotice';
import ProtectedRoute from './protectedRoute';
import Notes from './pages/Notes/Notes';
import AdminProtected from './AdminProtechRoute';
import Applications from './pages/Applications/Applications';
import Announcement from './pages/Announcement/Announcement';
import QuoteReview from './pages/QuotReview/QuoteReview';
import { Alert } from "@material-tailwind/react";

function App() {
  return (
    <>
      <Alert
        className="fixed flex items-center bottom-5 right-0 w-64 z-20 rounded-none border-l-4 border-red-400 bg-red-200 font-medium text-red-800"
        >      
        <span>Test Mode</span>
      </Alert>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }>
          <Route path='' element={<Maindashboard />}></Route>
          <Route path='captains' element={<Patients />}></Route>
          <Route path='chat' element={<Chat />}></Route>
          <Route path='accounts-review' element={
            <AdminProtected>
              <Accountreview />
            </AdminProtected>
          }></Route>
          <Route path='review' element={<Review />}></Route>
          <Route path='teachers' element={<Profile />}></Route>
          <Route path='applications' element={<Applications />}></Route>
          <Route path='earnings' element={<Earnings />}></Route>
          <Route path='calculators' element={<Calculators />}></Route>
          <Route path='notices' element={<Notifications />}></Route>
          <Route path='notes' element={<Notes />}></Route>
          <Route path='profile' element={<Userprofile />}></Route>
          <Route path='quote-review' element={<QuoteReview />}></Route>
          <Route path='update-profile' element={<UpdateProfile />}></Route>
          <Route path='add-notice' element={<AddNotice />}></Route>
          <Route path='add-announcement' element={<Announcement />}></Route>
          <Route path='department-survey' element={<Hospitalsurvey />}></Route>
          <Route path='website-contents' element={<Contents />}></Route>
        </Route>


        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes >
    </>
  );
}

export default App;
