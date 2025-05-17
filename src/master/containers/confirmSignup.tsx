import { useState, useTransition } from "react";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";

const ConfirmSignUp: React.FC = () => {

    const { resendConfirmationCode, confirmSignUpUser } = useAuth()
    const navigate = useNavigate()
    const [code, setCode] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            startTransition(async () => {
                await confirmSignUpUser(code)
                navigate('/', { replace: true })
            });
        } catch (error) {
            console.log(error)
        }
    };

    const handleResendOtp = async () => {
        try {
            startTransition(async () => {
                await resendConfirmationCode()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter OTP"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={6}
                pattern="[0-9]*"
                inputMode="numeric"
                required
            />
            <button type="submit" disabled={isPending}>
                {isPending ? "Verifying..." : "Verify OTP"}
            </button>
            <button type="button" onClick={handleResendOtp} disabled={isPending}>
                {isPending ? "resending..." : "resend OTP"}
            </button>
        </form>
    );
};

export default ConfirmSignUp;
