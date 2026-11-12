const signupEmail = "alex.jordan+news@example.com";
const contactFormEmail = "support@my-company.io";
const brokenEmail = "not-an-email@";

function isValidSignupEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function isValidContactFormEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

console.log(`Signup email valid: ${isValidSignupEmail(signupEmail)}`);
console.log(`Contact form email valid: ${isValidContactFormEmail(contactFormEmail)}`);

// duplicated validation logic again
console.log(
  `Broken email valid: ${/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(brokenEmail)}`
);
