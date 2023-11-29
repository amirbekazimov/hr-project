import { useState, useEffect } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import NavbarTop from './components/navbar/Navbar'
import UserTable from './views/user-table/UserTable'
import { Route, Routes, useLocation } from 'react-router-dom'
import AdminTable from './views/admin-table/AdminTable'
import Login from './views/login/Login'
import CreateContract from './views/CreateContract/CreateContract'
import Contracts from './views/contracts/Contracts'
import Payment from './views/payment/Payment'
import Documents from './views/documents/Documents'
import InvoiceReceipts from './views/invoice-receipts/InvoiceReceipts'
import TeamSettings from './views/TeamSettings'
import AppsPerks from './views/apps-perks/AppsPerks'
import TaxForms from './views/tax-forms/TaxForms'
import OrganizationSettings from './views/organization-settings/OrganizationSettings'
import ContractDetails from './views/contracts/ContractDetails'
import AddVacancy from './views/add-vacancy/AddVacancy'
import Hr from './views/hr/Hr'
import CreateHr from './views/hr/CreateHr'
import UpdateHr from './views/hr/UpdateHr'
import DeleteHr from './views/hr/DeleteHr'
import Vacancies from './views/vacancies/Vacancies'
import ApplyVacancy from './views/vacancies/ApplyVacancy'
import ApplyedUsers from './views/applyed-users/ApplyedUsers'
import ApplyedUserDetails from './views/applyed-users/ApplyedUserDetails'
import ApplyedUsersDelete from './views/applyed-users/ApllyedUsersDelete'

function App() {
  const [role, setRole] = useState('');
  const location = useLocation()
  const BASE_URL = 'https://prounity.uz/jobs'


  useEffect(() => {
    getRole();
  }, [location]);

  const getRole = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `${BASE_URL}/api/auth/profile/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    const role = data.msg.groups[0].name;
    localStorage.setItem('role', role);
    setRole(role);
  };

  return (
    <>
      {role ? (
        <div>
          <NavbarTop />
          <div className="d-flex align-items-start w-100">
            <Routes>
              <Route path='/' element={<Sidebar />} >
                <Route path='/admin-table' element={<AdminTable />} />
                <Route path='/applyed-users' element={<ApplyedUsers />} />
                <Route path='/applyed-users-details/:id' element={<ApplyedUserDetails />} />
                <Route path='/applyed-users-delete/:id' element={<ApplyedUsersDelete />} />
                <Route path='/hr' element={<Hr />} />
                <Route path='/update-hr/:id' element={<UpdateHr />} />
                <Route path='/delete-hr/:id' element={<DeleteHr />} />
                <Route path='/create-hr' element={<CreateHr />} />
                <Route path='/create-contract' element={<CreateContract />} />
                <Route path='/contracts' element={<Contracts />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/documents' element={<Documents />} />
                <Route path='/invoice-receipts' element={<InvoiceReceipts />} />
                <Route path='/team-settings' element={<TeamSettings />} />
                <Route path='/apps-perks' element={<AppsPerks />} />
                <Route path='/tax-forms' element={<TaxForms />} />
                <Route path='/organization-settings' element={<OrganizationSettings />} />
                <Route path='/create-contract' element={<CreateContract />} />
                <Route path='/contract-details' element={<ContractDetails />} />
                <Route path='/create-vacancy' element={<AddVacancy />} />
              </Route>

            </Routes>
          </div>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/vacancies' element={<Vacancies />} />
            <Route path='/apply-vacancy/:id' element={<ApplyVacancy />} />
          </Routes>
        </div>
      )}
    </>
  )
}

export default App
