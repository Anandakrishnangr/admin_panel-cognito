import { Button } from "../../components";
import { useAuth } from "../../master/hooks";

export const DashBoard = () => {
    const { signOutUser } = useAuth();
    return <>
        DashBoard
        <Button onClick={signOutUser}>
            logout
        </Button>
    </>
}