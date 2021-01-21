import {load} from "../common/api";

test('api should return json', () => {
    const words = load();

    words.forEach((word) => {
        expect(word).toHaveProperty('id');
        expect(word).toHaveProperty('name');
        expect(word).toHaveProperty('translations');
    });
    console.log(words);
});