import { showErrorSnackbar } from "../../../../components";
import { useImmer } from "use-immer";
import { useAuth } from "../../../../master/hooks";
import { useCallback, useTransition } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate()
    const { signInUser } = useAuth();
    interface FormData {
        email: string;
        password: string;
    }

    const [formData, updateFormData] = useImmer<FormData>({
        email: "",
        password: "",
    });
    const [isPending, startTransition] = useTransition()
    const handleSubmit = async (e: React.FormEvent) => {
        startTransition(async () => {
            try {
                e.preventDefault();
                await signInUser({ ...formData });
                navigate('/')
            } catch (error) {
                let message = "An unexpected error occurred";
                if (error instanceof Error) {
                    message = error.message;
                } else if (typeof error === "string") {
                    message = error;
                }
                showErrorSnackbar(message);
            }
        })
    };

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateFormData(draft => {
            draft[name as keyof typeof formData] = value;
        });
    },[updateFormData])

    return {
        handleChange,
        handleSubmit,
        formData,
        isPending
    }

}