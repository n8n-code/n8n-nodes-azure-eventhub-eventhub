import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureEventhubEventhub implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Eventhub Eventhub',
                name: 'N8nDevAzureEventhubEventhub',
                icon: { light: 'file:./azure-eventhub-eventhub.png', dark: 'file:./azure-eventhub-eventhub.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Event Hubs client',
                defaults: { name: 'Azure Eventhub Eventhub' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureEventhubEventhubApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
