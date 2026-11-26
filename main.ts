import { mkdirSync, writeFileSync } from "node:fs";

const firstHalf = "I can fold any fitted sheet into a perfect 12-inch square, but only ";
const secondHalf = "after it is already a perfect 12-inch square in the closet.";
const line = firstHalf + secondHalf;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
