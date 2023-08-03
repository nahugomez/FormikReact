import "./App.css";
import { Container } from "@mui/material";
import Form from "./components/Form";
import ErrorBoundary from "./utils/ErrorBoundary";

function App() {
    return (
        <Container>
            <h1>Form handling with Formik</h1>
            <ErrorBoundary>
                <Form />
            </ErrorBoundary>
        </Container>
    );
}

export default App;
