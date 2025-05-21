import React , { useContext } from "react";
import useHttp from "../../costom-hook/useHttp";
import { ProducerContext } from "../../context/producer.context";
import { Producer } from "../../type/Producer"; 

export const AddProducer = () => {
    const { refresh } = useContext(ProducerContext);
    const { error, loading: isLoading, sendRequest: request } = useHttp<Producer>('/producer', 'post');

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const form = event.currentTarget; // קבלת ה-form
    
        const newProducer: Producer = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            description: (form.elements.namedItem('description') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
        };
    
        try {
            await request(newProducer);
            if (refresh) {
                refresh(); // עדכון הקונטקסט
            }
            alert("המפיקה נוספה בהצלחה!");
        } catch (error) {
            console.error(error);
            alert("שגיאה בהוספת המפיקה");
        }
    };
    
    

    return (
        <div>
            <h1>הוספת מפיקה</h1><br />
            <form onSubmit={submit}>
                <input name="description" type="text" placeholder="תיאור" required /> <br />
                <input name="name" type="text" placeholder="שם" required /> <br />
                <input name="phone" type="text" placeholder="טלפון" required /> <br />
                <input name="email" type="email" placeholder="מייל" required /> <br />
                <button type="submit" disabled={isLoading}>הצטרפי אלינו</button>
            </form><br />
            {error && <span>{error}</span>}
        </div>
    );
};
