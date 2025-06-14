import { Spinner } from "react-bootstrap";

const Loading = ({ fullPage = true }) => {

    if (fullPage) {
        return (
            <div
                style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(255,255,255,0.7)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 9999,
                }}
            >
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }
    return (
        <>
            <Spinner className="ms-2" animation="border" size="sm" />
        </>
    );

}

export default Loading;