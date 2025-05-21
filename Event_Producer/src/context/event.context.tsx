import { createContext, useContext } from "react";
import { Event } from "../type/Event";
import { useHttp } from "../costom-hook/useHttp";

type EventsContextType = {
    events: Event[],
    refresh: () => Promise<void>
};

// יצירת ה-Context
export const EventContext = createContext<Partial<EventsContextType>>({});

// Provider
export const EventProvider = (props: any) => {
    const { data: events, error, loading: isLoading, sendRequest: request } = useHttp<Event[]>('/events', 'get');

    const contextValue: EventsContextType = {
        events: events || [], // אם events הוא undefined, נותן מערך ריק
        async refresh() {
            await request(); // קריאה ל-sendRequest
        }
    };

    return (
        <EventContext.Provider value={contextValue}>
            {isLoading && 'Loading...'}
            {error && <div>{error}</div>}
            {!error && props.children}
        </EventContext.Provider>
    );
};

// פונקציה לגישה ל-Context
export const useEventContext = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};
