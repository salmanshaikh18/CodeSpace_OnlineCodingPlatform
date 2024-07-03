import { toast } from "react-toastify"

export const handleError = (error: any) => {
    console.log(error.data.message)
    toast.error("Error: " + error.data.message)
}