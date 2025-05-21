import { createContext, useContext } from "react";

import { useHttp } from "../costom-hook/useHttp";
import { Producer } from "../type/Producer";

type ProducerContextType = {
    producer: Producer[],
    refresh: () => Promise<void>
};

// יצירת ה-Context
export const ProducerContext = createContext<Partial<ProducerContextType>>({});

// Provider
export const ProducerProvider = (props: any) => {
    const { data: producer, error, loading: isLoading, sendRequest: request } = useHttp<Producer[]>('/producer', 'get');

    const contextValue: ProducerContextType = {
        producer: producer || [], // אם producer הוא undefined, נותן מערך ריק
        async refresh() {
            await request(); // קריאה ל-sendRequest
        }
    };

    return (
        <ProducerContext.Provider value={contextValue}>
            {isLoading && 'Loading...'}
            {error && <div>{error}</div>}
            {!error && props.children}
        </ProducerContext.Provider>
    );
};

// פונקציה לגישה ל-Context
export const useProducerContext = () => {
    const context = useContext(ProducerContext);
    if (!context) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};
