import { test, vi, expect } from "vitest"
import assert from "../src/index.js"

let consoleSpy = vi.spyOn(console, 'error')

test('just log error message', () => {
    let assertion = assert();

    assertion.error("Message");
    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toHaveBeenLastCalledWith(new Error(`Message`));
    consoleSpy.mockReset();
})

test('Log error messages for objects', () => {
    let assertion = assert("a", "b");

    assertion.error("Message");
    expect(consoleSpy).toBeCalledTimes(2);
    expect(consoleSpy).toHaveBeenLastCalledWith(new Error(`Invalid property value 'b': Message`));
    consoleSpy.mockReset();
})