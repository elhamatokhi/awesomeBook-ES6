import { DateTime } from "./luxon.js";
export const now = DateTime.now();
let date = document.querySelector(".time");
let months = ["Jan", "Feb", "Mar", "Apr", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.c.month - 1];
date.innerHTML = `${month} ${now.c.day} ${now.c.year},  ${now.c.hour}:${now.c.minute}:${now.c.second}`;
