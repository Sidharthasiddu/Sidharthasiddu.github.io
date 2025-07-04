import bcrypt from "bcrypt";
const pwd = "pass123";
const hashedpwd = await bcrypt.hash(pwd, 10);
console.log(hashedpwd);


const check = await bcrypt.compare("pass1234","$2b$10$nCnpy3Ddj/eqd9PT67pJOuSak2nm56ckdhkNk3Kx5QNirQLkgXWOa");
console.log(check);

