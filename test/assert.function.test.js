import { test, vi, expect } from "vitest"
import assert from "../src/index.js"

let consoleSpy = vi.spyOn(console, 'error')

test('objects are functions', () => {
    let assertion = assert(() => {}, () => {});

    assertion.function();
})

test('object is function', () => {
    let assertion = assert(() => {});

    assertion.function();
})

test('objects are not functions', () => {
    let assertion = assert("a", "b");

    assertion.function();
    expect(consoleSpy).toBeCalledTimes(2);
    expect(consoleSpy).toHaveBeenLastCalledWith(new Error(`Invalid property value 'b' (allowed: function)`));
    consoleSpy.mockReset();
})

test('object is not a function', () => {
    let assertion = assert("a");

    assertion.function();
    expect(consoleSpy).toBeCalledTimes(1);
    consoleSpy.mockReset();
})


test('objects are a function and not a function', () => {
    let assertion = assert(() => {}, "a");

    assertion.function();
    expect(consoleSpy).toBeCalledTimes(1);
    consoleSpy.mockReset();
})
