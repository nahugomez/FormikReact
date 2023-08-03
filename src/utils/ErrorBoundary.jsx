import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: "",
        };
    }

    static getDerivedStateFromError(error) {
        return { error: true, errorMessage: error.message };
    }

    render() {
        if (this.state.error) {
            return (
                <Box>
                    <p>Ocurrió un error, contacte con soporte</p>
                    <p>{this.state.errorMessage}</p>
                    <Button onClick={() => (window.location.href = "/")} variant="outlined">
                        Recargar página
                    </Button>
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
