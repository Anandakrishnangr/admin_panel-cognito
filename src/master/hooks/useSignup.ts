import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useImmer } from "use-immer";
import { showErrorSnackbar } from "../../components/snackbar/snackbar";

export const useSignup = () => {
    const { signUpUser } = useAuth();

    interface FormData {
        name: string;
        phone: string;
        email: string;
        password: string;
    }
    const navigate = useNavigate()
    const [formData, updateFormData] = useImmer<FormData>({
        name: "",
        phone: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            await signUpUser({ ...formData });
            navigate('/confirm-signup', { replace: true })
        } catch (error: unknown) {
            let message = "An unexpected error occurred";

            if (error instanceof Error) {
                message = error.message;
            } else if (typeof error === "string") {
                message = error;
            }

            showErrorSnackbar(message);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateFormData(draft => {
            draft[name as keyof typeof formData] = value;
        });
    };
    return { formData, handleChange, handleSubmit };
}