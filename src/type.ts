type Recipe = {
    caloriesPerServing: number,
    cookTimeMinutes: number,
    cuisine: string,
    difficulty: string,
    id: number,
    image: string,
    ingredients: string[],
    instructions: string[],
    mealType: string[],
    name: string,
    prepTimeMinutes: number,
    rating: number,
    reviewCount: number,
    servings: number,
    tags: string[],
    userId: number
}

type Coordinates = {
    lat: number;
    lng: number;
};

function isCoordinates(data: unknown): data is Coordinates {
    return (
        data !== null &&
        typeof data === "object" &&
        typeof data !== "undefined" &&
        "lat" in data &&
        typeof data.lat === "number" &&
        "lng" in data &&
        typeof data.lng === "number"
    )
}

type Address = {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Coordinates;
    country: string;
};

function isAddress(data: unknown): data is Address {
    return (
        data !== null &&
        typeof data === "object" &&
        "address" in data &&
        typeof data.address === "string" &&
        "city" in data &&
        typeof data.city === "string" &&
        "state" in data &&
        typeof data.state === "string" &&
        "stateCode" in data &&
        typeof data.stateCode === "string" &&
        "postalCode" in data &&
        typeof data.postalCode === "string" &&
        "coordinates" in data &&
        isCoordinates(data.coordinates) &&
        "country" in data &&
        typeof data.country === "string"
    )
}

type Hair = {
    color: string;
    type: string;
};

function isHair(data: unknown): data is Hair {
    return (
        data !== null &&
        typeof data === "object" &&
        "color" in data &&
        typeof data.color === "string" &&
        "type" in data &&
        typeof data.type === "string"
    )
}

type Bank = {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
};

function isBank(data: unknown): data is Bank {
    return (
        data !== null &&
        typeof data === "object" &&
        "cardExpire" in data &&
        typeof data.cardExpire === "string" &&
        "cardNumber" in data &&
        typeof data.cardNumber === "string" &&
        "cardType" in data &&
        typeof data.cardType === "string" &&
        "currency" in data &&
        typeof data.currency === "string" &&
        "iban" in data &&
        typeof data.iban === "string"
    )
}

type Company = {
    department: string;
    name: string;
    title: string;
    address: Address;
};

function isCompany(data: unknown): data is Company {
    return (
        data !== null &&
        typeof data === "object" &&
        "department" in data &&
        typeof data.department === "string" &&
        "name" in data &&
        typeof data.name === "string" &&
        "title" in data &&
        typeof data.title === "string" &&
        "address" in data &&
        isAddress(data.address)
    )
}



type Crypto = {
    coin: string;
    wallet: string;
    network: string;
};

function isCrypto(data: unknown): data is Crypto {
    return (
        data !== null &&
        typeof data === "object" &&
        "coin" in data &&
        typeof data.coin === "string" &&
        "wallet" in data &&
        typeof data.wallet === "string" &&
        "network" in data &&
        typeof data.network == "string"
    )
}

type UserBase = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: Crypto;
    role: string;
};

function isUserBase(data: unknown): data is UserBase {
    return (
        data !== null &&
        typeof data === "object" &&
        "firstName" in data &&
        typeof data.firstName === "string" &&
        "lastName" in data &&
        typeof data.lastName === "string" &&
        "maidenName" in data &&
        typeof data.maidenName === "string" &&
        "gender" in data &&
        typeof data.gender === "string" &&
        "email" in data &&
        typeof data.email === "string" &&
        "phone" in data &&
        typeof data.phone === "string" &&
        "username" in data &&
        typeof data.username === "string" &&
        "password" in data &&
        typeof data.password === "string" &&
        "birthDate" in data &&
        typeof data.birthDate === "string" &&
        "image" in data &&
        typeof data.image === "string" &&
        "bloodGroup" in data &&
        typeof data.bloodGroup === "string" &&
        "eyeColor" in data &&
        typeof data.eyeColor === "string" &&
        "ip" in data &&
        typeof data.ip === "string" &&
        "macAddress" in data &&
        typeof data.macAddress === "string" &&
        "university" in data &&
        typeof data.university === "string" &&
        "ein" in data &&
        typeof data.ein === "string" &&
        "ssn" in data &&
        typeof data.ssn === "string" &&
        "userAgent" in data &&
        typeof data.userAgent === "string" &&
        "role" in data &&
        typeof data.role === "string" &&
        "id" in data &&
        typeof data.id === "number" &&
        "age" in data &&
        typeof data.age === "number" &&
        "height" in data &&
        typeof data.height === "number" &&
        "weight" in data &&
        typeof data.weight === "number" &&
        "hair" in data &&
        isHair(data.hair) &&
        "address" in data &&
        isAddress(data.address) &&
        "bank" in data &&
        isBank(data.bank) &&
        "company" in data &&
        isCompany(data.company) &&
        "crypto" in data &&
        isCrypto(data.crypto)
    )
}

function isRecipe(data: unknown): data is Recipe {
    return (
        data !== null &&
        typeof data !== "undefined" &&
        typeof data === "object" &&
        "caloriesPerServing" in data &&
        typeof data.caloriesPerServing === "number" &&
        "cuisine" in data &&
        typeof data.cuisine === "string" &&
        "difficulty" in data &&
        typeof data.difficulty === "string" &&
        "image" in data &&
        typeof data.image === "string" &&
        "name" in data &&
        typeof data.name === "string" &&
        "cookTimeMinutes" in data &&
        typeof data.cookTimeMinutes === "number" &&
        "id" in data &&
        typeof data.id === "number" &&
        "prepTimeMinutes" in data &&
        typeof data.prepTimeMinutes === "number" &&
        "rating" in data &&
        typeof data.rating === "number" &&
        "reviewCount" in data &&
        typeof data.reviewCount === "number" &&
        "servings" in data &&
        typeof data.servings === "number" &&
        "userId" in data &&
        typeof data.userId === "number" &&
        "ingredients" in data &&
        Array.isArray(data.ingredients) &&
        data.ingredients.length > 0 &&
        data.ingredients.every(curElem => typeof curElem === "string") &&
        "instructions" in data &&
        Array.isArray(data.instructions) &&
        data.instructions.length > 0 &&
        data.instructions.every(curElem => typeof curElem === "string") &&
        "mealType" in data &&
        Array.isArray(data.mealType) &&
        data.mealType.length > 0 &&
        data.mealType.every(curElem => typeof curElem === "string") &&
        "tags" in data &&
        Array.isArray(data.tags) &&
        data.tags.length > 0 &&
        data.tags.every(curElem => typeof curElem === "string")
    )
}


export type { Recipe, UserBase }

export { isRecipe, isUserBase }