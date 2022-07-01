import { doc, setDoc, Timestamp } from "firebase/firestore";

export const docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
//await setDoc(doc(db, "data", "one"), docData);

class City {
    constructor (name, state, country ) {
        this.name = name;
        this.state = state;
        this.country = country;
    }
    toString() {
        return this.name + ', ' + this.state + ', ' + this.country;
    }
}

// Firestore data converter
export const cityConverter = {
    toFirestore: (city) => {
        return {
            name: city.name,
            state: city.state,
            country: city.country
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new City(data.name, data.state, data.country);
    }
};