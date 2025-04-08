import { test, vi, expect } from "vitest"
import assert from "../src/index.js"

let consoleSpy = vi.spyOn(console, 'error')

test('objects are boolean', () => {
    let assertion = assert(true, false);

    assertion.boolean();
})

test('object is boolean', () => {
    let assertion = assert(true);

    assertion.boolean();
})

test('objects are not boolean', () => {
    let assertion = assert("a", "b");

    assertion.boolean();
    expect(consoleSpy).toBeCalledTimes(2);
    expect(consoleSpy).toHaveBeenLastCalledWith(new Error(`Invalid property value 'b' (allowed: true|false)`));
    consoleSpy.mockReset();
})

test('object is not boolean', () => {
    let assertion = assert("a");

    assertion.boolean();
    expect(consoleSpy).toBeCalledTimes(1);
    consoleSpy.mockReset();
})


test('objects are boolean and not boolean', () => {
    let assertion = assert(true, "a");

    assertion.boolean();
    expect(consoleSpy).toBeCalledTimes(1);
    consoleSpy.mockReset();
})
