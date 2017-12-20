var modash = require('./modash');
//import modash from "./modash";

describe("modash", () => {

    describe("`truncate()`", () => {
        const string = "there was one catch, and that was CATCH-22";

        it("truncates a string", () => {
            expect(modash.truncate(string, 19))
                .toEqual("there was one catch...");
        });

        it("no-ops if <= length", () => {
            expect(modash.truncate(string, string.length))
                .toEqual(string);
        });
    });

    describe("capitalize()", () => {
        const string = "there was one catch, and that was CATCH-22";
        const stringCapitalize = "There was one catch, and that was catch-22";

        it("capitalizes first letter, lowercases the rest", () => {
            expect(modash.capitalize(string)).
            toEqual(stringCapitalize);
        });
    });

    describe("camelCase()", () => {
        const stringWithSpace = "customer responded at";
        const stringWithUnderscore = "customer_responded_at";
        const stringCamelized = "customerRespondedAt";

        it ("camelize string with spaces", () => {
            expect(modash.camelCase(stringWithSpace)).
            toEqual(stringCamelized);
        });

        it ("camelize string with underscores", () => {
            expect(modash.camelCase(stringWithUnderscore)).
            toEqual(stringCamelized);
        });
    });
})