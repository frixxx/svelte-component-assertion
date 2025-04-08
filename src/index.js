import Assert from "./Assert.js"

export default function(...objects) {
    return new Assert(objects);
}