import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import BookForm from "./BookForm";
import BookListRender from "./BookListRender";
import IndividualBook from "./IndividualBook";
import BookAPI from "../BookContext/BookAPI";
import Login from "./Login";
import About from "../non-components/About"
import Footer from "../non-components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    AOS.init();
    return (
        <div>
            <BookAPI>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<BookListRender />} />
                        <Route path="/IndividualBook" name="IndividualBook" element={<IndividualBook />} />
                        <Route path="/newBook" name="newBook" element={<BookForm />} />
                        <Route path="/login" name="login" element={<Login />} />
                        <Route path="/about" name="about" element={<About/>} />                    
                    </Routes>
                </BrowserRouter>
            </BookAPI>
            <Footer/>
        </div>
        
    );
}

export default App;