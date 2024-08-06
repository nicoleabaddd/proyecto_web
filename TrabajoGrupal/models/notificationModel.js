class Notifications {
    constructor(id, newEvent, publications, userComunityReference, eventsReference, messages, reminder) {
        this.id = id;
        this.newEvent = newEvent;
        this.publications = publications;
        this.userComunityReference = userComunityReference;
        this.eventsReference = eventsReference;
        this.messages = messages;
        this.reminder = reminder;
    }
};
export default Notifications