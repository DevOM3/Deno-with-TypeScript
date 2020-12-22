// Reading a file
// Using method 1-
// Making use of TextDecoder
const decoder = new TextDecoder("UTF-8");
const data = await Deno.readFile("file.txt");
console.log(decoder.decode(data));
// Making use of readTextFile() to eliminate the process of decoding
const fileText = await Deno.readTextFile("file.txt");
console.log(fileText);

// Writing to a file
const encoder = new TextEncoder();
const text = "This is written by Deno";
await Deno.writeFile("file.txt", encoder.encode(text));

// renaming and removing file
await Deno.rename("file.txt", "renamed.txt");

// deleting file
await Deno.remove("renamed.txt");
