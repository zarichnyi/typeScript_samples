/**
 * interfaces will describe objects which they must be
 */

interface Person {
    name: string;
    age: number;
}

const employee = {
    name: "Alice",
    age: 33,
    position: "Engineer"
}

const person: Person = employee;

/****************
 * Enum only for list of something 
 * which is declared
 */

enum Status {
    Pending = "P",
    Approved = "A",
    Rejected = "R"
}

let statusBar = Status.Rejected;
// here we have error 
statusBar = "ERROR";

statusBar = Status.Approved;


/**
 * Unions and intersections type
 */

interface INews {
    url: UrlType;
    title: string;
    language: string;
    published: string;
}

interface IBanner {
    title: string;
    url: UrlType;
}

// this is good example
type UrlType = string | null | undefined;

export type ItemType = INews | IBanner;

// this is better for using, bcs its merging
export type ItemType2 = INews & IBanner;


/**
 * Type Queries (typeof)
 */

const news = {
    author: "Alice",
    category: ["all"],
    id: 1,
    title: "TS"
}

type NewsType = typeof news;

const func = (news: NewsType) => {
    //error bcs date is not defined
    news.date
    // correct
    news.id
}

