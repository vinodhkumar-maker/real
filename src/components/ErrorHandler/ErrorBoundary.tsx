import { Component, ErrorInfo } from "react";
import ZenButton from "../button/ZenButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh, faSpinner } from "@fortawesome/free-solid-svg-icons";

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    errorMessage?: string;
    isReloading: boolean; 
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, errorMessage: "", isReloading: false };
    }

    // Update state when an error occurs
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, errorMessage: error.message, isReloading: false };
    }

    // Log errors for debugging or send to an external service
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.logErrorToService(error, errorInfo);
    }

    // Function to send error logs to an external service
    logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
        console.log("Sending error to monitoring service:", { error, errorInfo });
    };

    // Reset error state
    resetError = () => this.setState({ hasError: false, errorMessage: "", isReloading: false });

    // Reload the page with loading effect
    handleRefresh = () => {
        this.setState({ isReloading: true });
        setTimeout(() => {
            window.location.reload();
        }, 1000); // Optional delay for better UI feedback
    };

    render() {
        const { hasError, errorMessage, isReloading } = this.state;
        const { fallback, children } = this.props;

        if (hasError) {
            return (
                fallback ||
                (
                    // Render custom fallback UI
                    <div className="flex flex-col items-center justify-center p-6 bg-red-100 text-red-800 rounded-lg h-screen gap-2">
                        <h2 className="text-lg font-bold">Oops! Something went wrong 🚨</h2>
                        <p className="text-md font-normal bg-blue-200 rounded-sm p-2">
                            {errorMessage} 🔥
                        </p>

                        <ZenButton
                            label={isReloading ? "Refreshing..." : "Refresh Page"}
                            variant="danger"
                            type="reset"
                            onClick={this.handleRefresh}
                            className="hover:bg-red"
                            leftIconComponent={
                                isReloading ? (
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                ) : (
                                    <FontAwesomeIcon icon={faRefresh} />
                                )
                            }
                            disabled={isReloading} // Disable button while loading
                        />
                    </div>
                )
            );
        }

        return children;
    }
}
