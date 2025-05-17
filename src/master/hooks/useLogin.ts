import { useAuth } from "./useAuth";
import { useImmer } from "use-immer";
import { showErrorSnackbar } from "../../components/snackbar/snackbar";

export const useLogin = () => {

    const { signInUser } = useAuth();
    interface FormData {
        email: string;
        password: string;
    }

    const [formData, updateFormData] = useImmer<FormData>({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            await signInUser({ ...formData });
        } catch (error) {
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

    return {
        handleChange,
        handleSubmit,
        formData
    }

}