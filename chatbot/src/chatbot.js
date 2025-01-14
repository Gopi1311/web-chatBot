import {CDPs } from './types'
const IRRELEVANT_RESPONSES = [
  "I can only help with questions related to Customer Data Platforms (CDPs). For other topics, please try a general search engine.",
  "I specialize in CDP-related questions. This question seems outside my scope.",
  "I'm focused on helping with CDP platforms like Segment, mParticle, Lytics, and Zeotap. Let me know if you have any questions about those!"
];

export function generateResponse(question) {
  // Convert question to lowercase for easier matching
  const q = question.toLowerCase();
  
  // Check if question is CDP related
  const isCDPRelated = CDPs.some(cdp => 
    q.includes(cdp.name.toLowerCase()) || 
    q.includes('cdp') ||
    q.includes('customer data') ||
    q.includes('segment') ||
    q.includes('audience') ||
    q.includes('integration')
  );

  if (!isCDPRelated) {
    return IRRELEVANT_RESPONSES[Math.floor(Math.random() * IRRELEVANT_RESPONSES.length)];
  }

  // Basic response templates
  if (q.includes('segment')) {
    if (q.includes('source') || q.includes('set up')) {
      return `To set up a new source in Segment:

1. Log in to your Segment workspace
2. Navigate to Sources > Add Source
3. Choose your source type from the catalog
4. Follow the configuration steps for your specific source
5. Add the Segment snippet to your website or app if required
6. Test the implementation

For detailed instructions, visit: ${CDPs[0].docsUrl}`;
    }
  }

  if (q.includes('mparticle') && (q.includes('profile') || q.includes('user'))) {
    return `To create a user profile in mParticle:

1. Implement the mParticle SDK in your application
2. Use the Identity API to identify users
3. Set user attributes using the appropriate SDK methods
4. Verify the user profile in the mParticle dashboard

For complete documentation, visit: ${CDPs[1].docsUrl}`;
  }

  if (q.includes('lytics') && q.includes('audience')) {
    return `To build an audience segment in Lytics:

1. Navigate to Audiences in your Lytics dashboard
2. Click "Create New Audience"
3. Define your audience criteria using behavioral and demographic data
4. Test your audience definition
5. Save and activate the audience

Learn more at: ${CDPs[2].docsUrl}`;
  }

  if (q.includes('zeotap') && q.includes('integrate')) {
    return `To integrate your data with Zeotap:

1. Set up a Zeotap account and access the CDP
2. Configure your data sources
3. Map your data schema
4. Set up the integration using Zeotap's connectors
5. Validate the data flow

For detailed integration guides, visit: ${CDPs[3].docsUrl}`;
  }

  // Generic CDP response
  return `I understand you're asking about CDPs. To better assist you, could you please:

1. Specify which CDP you're interested in (Segment, mParticle, Lytics, or Zeotap)
2. Clarify what specific task or feature you need help with

I'll then provide detailed steps from the official documentation.`;
}