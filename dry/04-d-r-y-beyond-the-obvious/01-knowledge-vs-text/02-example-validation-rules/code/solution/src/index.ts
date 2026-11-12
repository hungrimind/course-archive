export function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

const signupEmail = "alex.jordan+news@example.com";
const contactFormEmail = "support@my-company.io";
const brokenEmail = "not-an-email@";

console.log(`Signup email valid: ${isValidEmail(signupEmail)}`);
console.log(`Contact form email valid: ${isValidEmail(contactFormEmail)}`);
console.log(`Broken email valid: ${isValidEmail(brokenEmail)}`);
