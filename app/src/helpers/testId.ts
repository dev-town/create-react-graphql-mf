export interface TestIdProp {
    'data-testid'?: string;
}

export const generate = (ids: (string | null)[], props?: TestIdProp) => {
    const { 'data-testid': testId } = props || {};
    const tags = [...ids, testId].filter(Boolean).join(' ');
    return tags.length ? tags : undefined;
};
