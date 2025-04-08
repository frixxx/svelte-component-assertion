import { test, vi, expect } from "vitest"
import assert from "../src/index.js"

let consoleSpy = vi.spyOn(console, 'error')

test('objects not in options', () => {
    let assertion = assert("alpha");

    assertion.options("a", "b", "c");
    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toHaveBeenLastCalledWith(new Error(`Invalid property value 'alpha' (allowed: a|b|c)`));
    consoleSpy.mockReset();
})

test('objects in options', () => {
    let assertion = assert("a", "b");

    assertion.options("a", "b", "c");
    expect(consoleSpy).toBeCalledTimes(0);
    consoleSpy.mockReset();
})

test('objects in options and not in objects', () => {
    let assertion = assert("a", "betha");

    assertion.options("a", "b", "c");
    expect(consoleSpy).toBeCalledTimes(1);
    consoleSpy.mockReset();
})

test('object not in options', () => {
    let assertion = assert("alpha");

    assertion.options("a", "b", "c");
    expect(consoleSpy).toBeCalledTimes(1);
    consoleSpy.mockReset();
})

test('object in options', () => {
    let assertion = assert("a");

    assertion.options("a", "b", "c");
    expect(consoleSpy).toBeCalledTimes(0);
    consoleSpy.mockReset();
})

test('if options[0] is an an array and object is in options', () => {
    let assertion = assert("a");

    assertion.options(["a", "b", "c"]);
    expect(consoleSpy).toBeCalledTimes(0);
    consoleSpy.mockReset();
})
