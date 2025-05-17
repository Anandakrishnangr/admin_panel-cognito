import React, { useCallback, useEffect, useState } from "react";

const channel = new BroadcastChannel("snackbar_channel");

interface Snackbar {
  id: string;
  type: "success" | "warning" | "error";
  text: string;
}

export const SnackbarProvider: React.FC = () => {
  const [snackbars, setSnackbars] = useState<Snackbar[]>([]);
  const handleMessage = useCallback((event: MessageEvent) => {
    const data = event.data;
    console.log(data);
    if (data.action === "close") {
      setSnackbars((prev) => prev.filter((snackbar) => snackbar.id !== data.id));
    } else if (data.action === "closeAll") {
      setSnackbars([]);
    }
    else {
      setSnackbars((prev) => [...prev, data]);
      setTimeout(() => closeSnackbar(data.id), data.duration);
    }
  }, [])
  useEffect(() => {


    channel.addEventListener("message", handleMessage);

    return () => {
      channel.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);

  const closeSnackbar = (id: string) => {
    console.log("closeSnackbar", id);
    setSnackbars((prev) => prev.filter((snackbar) => snackbar.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
      {snackbars.map((snackbar) => (
        <div
          key={snackbar.id}
          className={`flex items-center justify-between px-4 py-3 rounded-lg shadow-lg w-72 transition-all duration-300 ${snackbar.type === "success" ? "bg-green-500 text-white" :
            snackbar.type === "warning" ? "bg-yellow-500 text-black" :
              "bg-red-500 text-white"
            }`}
        >
          <span>{snackbar.text}</span>
          <button className="ml-3 text-white font-bold cursor-pointer" onClick={() => closeSnackbar(snackbar.id)}>✕</button>
        </div>
      ))}
    </div>
  );
};

