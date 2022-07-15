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


function App() {

    return (
        <div>
            <BookAPI>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<BookListRender />} />
                        <Route path="/IndividualBook" name="IndividualBook" element={<IndividualBook />} />
                        <Route path="/newBook" name="newBook" element={<BookForm />} />
                        <Route path="/login" name="login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </BookAPI>
            {/* <Footer/> */}
        </div>
    );
}

export default App;