/**Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds". */

const seg = prompt("¿En cuántos segundos suena la alarma?");
setTimeout(() => {
  console.log(`Ya pasaron ${seg} segundos`);
}, seg * 1000);
