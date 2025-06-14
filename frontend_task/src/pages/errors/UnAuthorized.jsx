import ErrorPage from "../../components/ErrorPage";

const UnAuthorized = () => {
    return ( 
        <>
        <ErrorPage message='You do not have permission to access the page' imageName="UnAuthorized"/>
        </>
     );
}
 
export default UnAuthorized;