# Sequential Playwright Agent Workflow

Use this workflow when you want to turn a QA spec into stable Playwright tests in this repository.

## Recommended execution order

1. playwright-test-planner
   - Purpose: turn the requirement or spec into a structured test plan.
   - Input: a spec from the specs/ folder or a new feature requirement.
   - Output: a clear, implementation-ready plan.
   - Also update generated/application-map.json with the discovered pages, components, navigation, and test hints relevant to the spec.

2. playwright-test-lifecycle-architect
   - Purpose: decide how the tests should be structured around fixtures and shared setup.
   - Input: the plan plus the existing structure in src/fixtures/ and src/page-objects/.
   - Output: a fixture and lifecycle plan that fits the repository.
   - Use the updated application map as input for page and component understanding.

3. playwright-test-generator
   - Purpose: create the actual Playwright tests from the plan.
   - Input: the approved plan and lifecycle guidance.
   - Output: scenario tests placed under tests/<feature>/.
   - Reuse the application map for selectors, navigation paths, and page/component context instead of relying on fresh browser exploration.

4. playwright-test-coding-standards
   - Purpose: refactor the generated tests so they follow the repo conventions.
   - Input: the generated tests.
   - Output: tests that use fixtures, page objects, and consistent naming.
   - Ensure the tests remain aligned with the application map and page-object structure.

5. playwright-test-healer
   - Purpose: fix any flaky or failing tests after implementation.
   - Input: the test suite and any failures.
   - Output: stabilized tests that match the spec and repository conventions.
   - If the application map is missing details that affect test reliability, update it as part of the fix.

## Why this order works

- Planning comes first so the team has a shared understanding of the scenario.
- Lifecycle design comes before implementation so shared setup is intentional.
- Generation follows once the architecture is clear.
- Standards refinement keeps the suite maintainable.
- Healing is last because it is most effective once the implementation is already in place.

## Example prompt

Use this prompt to run the full sequential flow:

"Create a Playwright test workflow for the QA spec in specs/get-coffee-from-brazil.md. Run the agents in order: first playwright-test-planner, then playwright-test-lifecycle-architect, then playwright-test-generator, then playwright-test-coding-standards, and finally playwright-test-healer. Use the repository conventions in tests/, src/fixtures/, and src/page-objects/, update generated/application-map.json as part of the flow, and keep the output aligned with the spec."

### Shorter copy-paste version

"Run the Playwright agent flow for specs/get-coffee-from-brazil.md: planner -> lifecycle-architect -> generator -> coding-standards -> healer. Follow the repository conventions in tests/, src/fixtures/, and src/page-objects/, and update generated/application-map.json during the flow."

## Notes

- If the task is a small change and the plan already exists, you can skip straight to the generator and standards agents.
- If a test fails after generation, run the healer agent immediately and then re-check the standards pass.
- Keep the spec in specs/ as the source of truth for expected behavior.
