import React from 'react';
import * as SC from './Example.styled';
import { TestIdProp, generate } from '../../../helpers/testId';
import { useMyExampleQueryQuery } from '../graphql/queries/example.generated';
import { useTranslation, module } from '../../../helpers/trans';

export interface ExampleProps extends TestIdProp {
    className?: string;
    children: React.ReactElement;
}

export const Example: React.FC<ExampleProps> = (props) => {
    const { className } = props;
    const { data, error } = useMyExampleQueryQuery();
    const { t } = useTranslation([module]);


    return (
        <SC.Example data-testid={generate(['example'], props)} className={className}>
            <h1>{t('scaffold.exampleComponent', 'Example Component')}</h1>

            {data?.examples.map(item => (<div key={item.id}>{item.title} - <span>{item.content}</span></div>))}
            {error && (
                <div>Error running server</div>
            )}
        </SC.Example>
    );
};