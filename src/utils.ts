// import { z } from "zod";
// import { Weather, Visibility, type NewDiaryEntry } from "./types.ts";



// const isString = (text: unknown): text is string => {
//   return typeof text === "string" || text instanceof String;
// };

// const parseComment = (comment: unknown): string => {
//   if (!isString(comment)) {
//     throw new Error("Incorrect or missing comment");
//   }

//   return comment;
// };

// const isDate = (date: string): boolean => {
//   return Boolean(Date.parse(date));
// };

// const parseDate = (date: unknown): string => {
//   if (!isString(date) || !isDate(date)) {
//     throw new Error("Incorrect or missing date: " + date);
//   }
//   return date;
// };

// const isWeather = (param: string): param is Weather => {
//   return (Object.values(Weather) as string[]).includes(param);
// };

// const parseWeather = (weather: unknown): Weather => {
//   if (!isString(weather) || !isWeather(weather)) {
//     throw new Error("Incorrect or missing weather: " + weather);
//   }
//   return weather;
// };

// const isVisibility = (param: string): param is Visibility => {
//   return (Object.values(Visibility) as string[]).includes(param);
// };

// const parseVisibility = (visibility: unknown): Visibility => {
//   if (!isString(visibility) || !isVisibility(visibility)) {
//     throw new Error("Incorrect or missing visibility: " + visibility);
//   }
//   return visibility;
// };

// const parseNewDiaryEntry = (object: unknown): NewDiaryEntry => {
//   return NewEntrySchema.parse(object);
// };

// export default parseNewDiaryEntry;
