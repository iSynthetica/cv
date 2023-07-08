import { RenderI } from "../view/renderer";
import avatar from '../../assets/img/avatar2.jpeg';

const renderCol = (size: string[], ...content: RenderI[]): RenderI => {
    return {
        tag: `div`,
        classNames: size,
        children: content
    }
}

const renderRow = (...cols: RenderI[]): RenderI => {
    return {
        tag: `div`,
        classNames: ['row', 'g-0'],
        children: cols,
    }
}

const renderSectionHeader = (title: string) => {
    return renderRow(
        renderCol(['col-12'], 
            {
                tag: 'header',
                classNames: ['sectionHeader'],
                children: [
                    {
                        tag: 'h4',
                        text: title
                    }
                ]
            }
        )
    )
}

const renderUL = (...lItems: string[]): RenderI => {
    const children = []
    for (const litem of lItems) {
        children.push({
            tag: 'li',
            text: litem,
        });
    }

    return {
        tag: 'ul',
        children: children
    }
}

const renderTimeline = (h6: string, h4: string, h5: string, ...content: RenderI[]): RenderI => {
    return {
        tag: 'div',
        classNames: ['timeline'],
        children: [
            {
                tag: 'h6',
                text: h6
            },
            {
                tag: 'h4',
                text: h4
            },
            {
                tag: 'h5',
                html: h5
            },
            ...content
        ]
    }
}

const experienceSection = [
    renderTimeline(
        'Oct 2019 - Present', 
        'NodeJS Backend Developer', 
        'at <strong>Red Falcon Tech</strong>',
        { tag: 'p', html: '<strong>Key Responsibilities:</strong>' },
        renderUL(
            'CRUD API with AWS Lambda functions service. Create API endpoints for invoking Lambda functions with AWS API Gateway service. Create models for validating data before storing to database.',
            'Event driven Lambda functions: SQS events, Dynamo DB stream events, S3 events, scheduled events.',
        )
    ),
    renderTimeline(
        'Oct 2019 - Present', 
        'NodeJS Backend Developer', 
        'at <strong>Milkbox LTD</strong>',
        { tag: 'p', html: '<strong>Key Responsibilities:</strong>' },
        renderUL(
            'CRUD API with AWS Lambda functions service. Create API endpoints for invoking Lambda functions with AWS API Gateway service. Create models for validating data before storing to database.',
            'Event driven Lambda functions: SQS events, Dynamo DB stream events, S3 events, scheduled events.',
        )
    ),
]

export const mainStructure = [
    renderRow(
        renderCol(['col-4', 'bg-main-color'],
            {
                tag: 'div',
                id: 'rightColumn',
                children: [
                    {
                        tag: 'img',
                        id: 'avatar',
                        src: avatar
                    },
                    {
                        tag: 'h3',
                        id: 'name',
                        html: 'Vladyslav <strong>Lisnyi</strong>'
                    },
                    {
                        tag: 'h4',
                        id: 'position',
                        html: 'Fullstack <strong>Developer</strong>'
                    },
                    renderSectionHeader('Contacts'),
                    renderSectionHeader('Summary'),{
                    tag: 'div', 
                        classNames: ['sectionContent'],
                        children: [
                            {
                                tag: 'p',
                                text: 'Highly skilled backend developer with 5+ years of experience in designing and implementing robust and scalable server-side solutions. Proficient in PHP and Node.js, with a strong focus on building RESTful APIs and optimizing database performance. Adept at collaborating with cross-functional teams to deliver innovative software solutions that meet business objectives. Committed to staying up-to-date with emerging technologies and industry best practices.'
                            },
                        ]
                    },
                    renderSectionHeader('Skills'),
                    renderSectionHeader('Education'),
                ]
            },
        ),
        renderCol(['col-8'], 
            {
                tag: 'div',
                classNames: ['sectionColumn'],
                id: 'leftColumn',
                children: [
                    renderSectionHeader('Experience'),
                    {
                        tag: 'div', 
                        classNames: ['sectionContent'],
                        children: experienceSection
                    },
                    renderSectionHeader('Skills'),
                ],
            }
        )
    ),
    
    // profileSection,
    // workExperienceSection
];