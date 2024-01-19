import '@testing-library/jest-dom';

expect.extend({
    hasDevTownTestId(received, id) {
        const module = received.getAllByTestId(new RegExp(id, 'g'))[0] as HTMLElement;

        const moduleAttrs = new Set(module.getAttribute('data-testid')?.split(' '));
        const hasTestId = moduleAttrs.has(id);
        return {
            pass: hasTestId,
            message: () => `Expected ${received} to have somethings`,
        };
    },
});
