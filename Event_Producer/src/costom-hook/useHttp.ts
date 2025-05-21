import { useState, useCallback } from 'react';
import axios from 'axios';

const TasksInstance = axios.create({
    baseURL: 'http://localhost:8000',
});

type HttpMethod = 'get' | 'post' | 'put' | 'delete';
type T = any; 

export const useHttp = <T>(url: string, method: HttpMethod) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T>();

    const sendRequest = useCallback(async (requestData: any = null) => {
        setLoading(true);
        setError(null);
        try {
            const response = await TasksInstance({
                method: method,
                url: url, // השתמש ב-url שהוזן
                data: requestData,
            });
            setData(response.data);
            return response.data;
        } catch (err) {
            setError('Something went wrong!');
        } finally {
            setLoading(false);
        }
    }, [method, url]); // הוספת method ו-url לרשימת התלות

    return { loading, error, data, sendRequest }; // החזרת data יחד עם שאר הערכים
};

export default useHttp;
