const names =["wesley", "renan", "vitinho", 10, false];

const renan = names[3];

names.push("joao");

names.unshift(20);

names.pop();
names.pop();
names.pop();

names[3] = "gustavo";

console.log(names.indexOf('renan'));

console.log(names);