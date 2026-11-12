# Our Strategy and Tips

## For a unverified idea (no users)

Honestly, we don’t think you should worry much about testing until your apps are making significant revenue or have a lot of users. Do manual testing, and if something takes extra time, consider some tests.

Now, if you want to add tests to your app, we won’t stop you, but when building a product, it should be the least of your worries. Of course, you should check your app before launching it to ensure it works properly, but ensuring every pixel is exactly how it should be might be overkill.

If there are some critical logic or security features, those could be worthwhile to test since you want to ensure proper functionality.

## For a verified idea (have users)

Now, if you have users and potentially multiple developers working on this single app, that's an entirely different story. Having users or even critical functionality you should verify that the things you ship work.

Some companies wish to have 100% test coverage that is crosschecked by the CI/CD system to ensure every line of code has been checked, this usually isn't the best approach but instead thinking in terms of a typical cost/analysis approach often has better results.

For example, testing the page you are working on daily has less value than testing a feature that is critical and often less manually tested.

Coverage shouldn't be your sole metric but having a mindset of a high-quality and stable application should, that will lead you to testing from a better frame of mind.

## When to use Unit vs Widget tests

When writing unit and widget tests they often end up testing the same logic. We believe that is wasted hours and here is how we decide which one to use.

Unit tests for testing logic in isolation, think **input ↔ output**

- `void addNumbers(1, 5)` → `expect(addNumbers(1, 5), 6)`

Widget tests for testing **action ↔ result**

- Doing actions to add todo’s → should result in those todo’s visible on the screen

**The benefits of this approach**

- You can more freely refactor without breaking tests that are glued to the implementation
- Clear recommendations of when to write unit vs widget tests
- Less overlap of testing.

**The downsides of this approach**

- Widget tests require more boilerplate and can be a tad slower (they are still fast though)

## Our Flow

This is how we approach it as two experienced developers trying to monetize a product:

1. The top priority is shipping the initial features and getting users. The only tests that make sense now are critical features, and even then, we would manually test them instead of spending time writing a test.
2. Focus on providing the correct value to the users so they continue using your product.
3. We spend time on tests only when this product generates enough revenue and has proven itself with Product Market Fit.
4. Only test things that “make sense”. We don’t need 100% coverage (though it would be nice); we don’t need to test every function. However, if a function is complex, we should spend some time writing Unit Tests, Widget tests and Integration Tests for automated end-to-end tests.

And that’s about as much as we would do. Only we (Robert and Tadas) are working on this code, so if anything breaks, we can quickly fix it.

We have optimized our pipeline to resolve something in production quickly; this is not always the case for apps, though, as they might have lengthy review processes.

We would consider doing more testing if we hired a team to write apps. But from what we have learned, the technical part of building products is the easy part. Distribution and conversion and product-market fit are the much more challenging parts.

Testing becomes more important if you have a long release cycle or if it takes a while to get a fix out. But that is also a sign that your development flow can be improved.

- What is your flow for releasing a normal app version?
- What is your flow for doing a hotfix towards production?

## Other Tips

- You shouldn’t test external dependencies. That’s their job to test it.
- Test what YOU believe is valuable to test; don’t mind the “coverage” too much. For example, if you have a method with multiple branches of logic, think if that is required, and if it is, test the cases you deem valuable.
- Tests are code and should be structured (think of it like any other code). The more tests you have, the harder it is to maintain (not directly, but it’s more to think about and more that can break)
- Good tests lead to good architecture, so if you are new to testing, do more testing to get a better understanding. Once you are comfortable with testing, you will know what “testable” code is and is not. Leading to you writing better code.
- Create your mocks, fakes, etc, inside the test file where you need them. Make them private.
- Run your tests with a random seed from time to time (or permanently) to make sure tests don’t share any state or depend on each other. `flutter test --test-randomize-ordering-seed random`
- For UI, golden tests will get you far, and they are really fast to write and run.
- If you don’t have the tests running in CI, you lose almost all the value.
- Test one scenario per test. Create many instead of really large tests.

## Quiz

**1. According to the lesson, what's the recommended priority when building an unverified product?**

- A) Writing comprehensive tests for all features
- B) Shipping features and getting users
- C) Achieving 100% test coverage
- D) Writing integration tests for all user flows

<details>
<summary>Answer</summary>

- B) Shipping features and getting users

</details>

**2. What's described as a better approach than aiming for 100% test coverage?**

- A) Having no tests at all
- B) Using cost/benefit analysis to determine what to test
- C) Only writing unit tests
- D) Testing everything manually

<details>
<summary>Answer</summary>

- B) Using cost/benefit analysis to determine what to test

</details>

---

[← Course overview](../../../README.md)
