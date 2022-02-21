import "flowbite";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Academic from "./pages/AdminDashboard/Documents/Academic";
import AddDocument from "./pages/AdminDashboard/Documents/AddDocument";
import AdminDocuments from "./pages/AdminDashboard/Documents/AdminDocuments";
import Adminstration from "./pages/AdminDashboard/Documents/Adminstration";
import Personal from "./pages/AdminDashboard/Documents/Personal";
import ClassStatus from "./pages/AdminDashboard/Library/ClassStatus";
import Completion from "./pages/AdminDashboard/Library/Completion";
import CreateContent from "./pages/AdminDashboard/Library/CreateContent";
import StudentProfile from "./pages/AdminDashboard/Library/StudentProfile";
import TeacherProfile from "./pages/AdminDashboard/Library/TeacherProfile";
import StudentAcademic from "./pages/StudentDashboard/Documents/StudentAcademic";
import StudentAdminstration from "./pages/StudentDashboard/Documents/StudentAdminstration";
import StudentDocuments from "./pages/StudentDashboard/Documents/StudentDocuments";
import StudentPersonal from "./pages/StudentDashboard/Documents/StudentPersonal";
import Library from "./pages/StudentDashboard/Library/Library";
import LibrarySubject from "./pages/StudentDashboard/Library/LibrarySubject";
import TeacherAcademic from "./pages/TeacherDashboard/TeacherDocuments/TeacherAcademic";
import TeacherAdminstration from "./pages/TeacherDashboard/TeacherDocuments/TeacherAdminstration";
import TeacherDocuments from "./pages/TeacherDashboard/TeacherDocuments/TeacherDocuments";
import TeacherPersonal from "./pages/TeacherDashboard/TeacherDocuments/TeacherPersonal";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen((t) => !t);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeacherDocuments />} />
        <Route
          path="/studentLibrary"
          element={<Library menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        />
        <Route
          path="/librarySubject"
          element={
            <LibrarySubject menuOpen={menuOpen} toggleMenu={toggleMenu} />
          }
        />
        <Route
          path="/completion"
          element={<Completion menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        />
        <Route
          path="/classStatus"
          element={<ClassStatus menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        />
        <Route
          path="/teacherStatus"
          element={
            <StudentProfile menuOpen={menuOpen} toggleMenu={toggleMenu} />
          }
        />
        <Route path="/teacherProfile" element={<TeacherProfile />} />
        <Route path="/createContent" element={<CreateContent />} />

        <Route path="/adminDocuments" element={<AdminDocuments />}>
          <Route path="/adminDocuments" element={<Academic />} />
          <Route path="/adminDocuments/personal" element={<Personal />} />
          <Route
            path="/adminDocuments/adminstration"
            element={<Adminstration />}
          />
          <Route path="/adminDocuments/addDocument" element={<AddDocument />} />
        </Route>

        {/* student document routes */}
        <Route path="/studentDocuments" element={<StudentDocuments />}>
          <Route path="/studentDocuments" element={<StudentAcademic />} />
          <Route
            path="/studentDocuments/personal"
            element={<StudentPersonal />}
          />
          <Route
            path="/studentDocuments/adminstration"
            element={<StudentAdminstration />}
          />
        </Route>

        {/* teacher document routes */}
        <Route path="/teacherDocuments" element={<TeacherDocuments />}>
          <Route path="/teacherDocuments" element={<TeacherAcademic />} />
          <Route
            path="/teacherDocuments/personal"
            element={<TeacherPersonal />}
          />
          <Route
            path="/teacherDocuments/adminstration"
            element={<TeacherAdminstration />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
