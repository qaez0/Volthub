import { products, productDetails, categories, getProductById, type Product } from "@/app/products/components/productData";

// Company information knowledge base
const companyInfo = {
  name: "VoltHub Electric Power Generation Services Corporation",
  established: "January 17, 2025",
  address: "High Street South Corporate Plaza Tower 2, 11th Ave, Bonifacio Global City, Taguig, Philippines",
  description: "A forward-looking energy technology company specializing in EV charging infrastructure, solar power systems, and smart energy solutions.",
  mission: "Building the blueprint for a cleaner energy economy. We provide end-to-end services—from design, engineering, and installation to maintenance and system optimization—tailored for commercial, residential, and industrial clients.",
  services: [
    "EV charging infrastructure",
    "Solar power systems",
    "Smart energy solutions",
    "Battery storage systems",
    "Energy management systems"
  ],
  categories: [
    "EV Charging Stations",
    "Solar Street Lights",
    "Smart Home IPS (Indoor Power Systems)",
    "Power Supplies (Cabinet and Container systems)"
  ]
};

// Helper function to normalize text for matching
function normalizeText(text: string): string {
  return text.toLowerCase().trim().replace(/[^\w\s]/g, '');
}

// Helper function to calculate similarity between two strings
function calculateSimilarity(str1: string, str2: string): number {
  const s1 = normalizeText(str1);
  const s2 = normalizeText(str2);
  
  if (s1 === s2) return 1;
  if (s1.includes(s2) || s2.includes(s1)) return 0.8;
  
  // Simple word matching
  const words1 = s1.split(/\s+/);
  const words2 = s2.split(/\s+/);
  const commonWords = words1.filter(w => words2.includes(w));
  return commonWords.length / Math.max(words1.length, words2.length);
}

// Find products matching a query
function findMatchingProducts(query: string): Product[] {
  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(/\s+/);
  
  return products.filter(product => {
    const productText = normalizeText(
      `${product.name} ${product.subtitle} ${product.tag || ''} ${product.description || ''} ${product.category}`
    );
    
    // Check if any query word matches
    return queryWords.some(word => productText.includes(word)) ||
           calculateSimilarity(query, product.name) > 0.3 ||
           calculateSimilarity(query, product.category) > 0.5;
  });
}

// Get product price only
function getProductPrice(product: Product): string {
  if (product.price) {
    return `**${product.name}**\n\nPrice: ${product.price}`;
  } else {
    return `**${product.name}**\n\nPlease contact us for pricing information.`;
  }
}

// Get product specifications only
function getProductSpecs(product: Product): string {
  const details = productDetails[product.id];
  let info = `**${product.name}**\n\n**Specifications:**\n`;
  
  if (details?.specifications && details.specifications.length > 0) {
    details.specifications.forEach(spec => {
      info += `• ${spec.label}: ${spec.value}\n`;
    });
  } else {
    info += `No detailed specifications available. Please contact us for more information.`;
  }
  
  return info;
}

// Get product features only
function getProductFeatures(product: Product): string {
  const details = productDetails[product.id];
  let info = `**${product.name}**\n\n**Features:**\n`;
  
  if (details?.features && details.features.length > 0) {
    details.features.forEach(feature => {
      info += `• ${feature}\n`;
    });
  } else {
    info += `No detailed features available. Please contact us for more information.`;
  }
  
  return info;
}

// Get full product information for response
function getProductInfo(product: Product): string {
  const details = productDetails[product.id];
  let info = `**${product.name}**\n`;
  
  if (product.subtitle) {
    info += `${product.subtitle}\n\n`;
  }
  
  if (product.price) {
    info += `Price: ${product.price}\n\n`;
  }
  
  if (details?.description) {
    info += `Description: ${details.description}\n\n`;
  } else if (product.description) {
    info += `Description: ${product.description}\n\n`;
  }
  
  if (details?.specifications && details.specifications.length > 0) {
    info += `**Key Specifications:**\n`;
    details.specifications.slice(0, 5).forEach(spec => {
      info += `• ${spec.label}: ${spec.value}\n`;
    });
    if (details.specifications.length > 5) {
      info += `... and ${details.specifications.length - 5} more specifications\n`;
    }
    info += `\n`;
  }
  
  if (details?.features && details.features.length > 0) {
    info += `**Key Features:**\n`;
    details.features.slice(0, 5).forEach(feature => {
      info += `• ${feature}\n`;
    });
    if (details.features.length > 5) {
      info += `... and ${details.features.length - 5} more features\n`;
    }
  }
  
  return info;
}

// Main AI response generator
export function generateAIResponse(userMessage: string, productId?: string | null): string {
  const normalizedMessage = normalizeText(userMessage);
  
  // If we have a product context, prioritize that product
  let contextProduct: Product | undefined;
  if (productId) {
    contextProduct = getProductById(productId);
  }
  
  // Greetings
  if (normalizedMessage.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)) {
    if (contextProduct) {
      return `Hello! I see you're viewing **${contextProduct.name}**. I can help you with questions about this product, including specifications, features, pricing, installation, and warranty. What would you like to know?`;
    }
    return "Hello! I'm VoltHub's AI customer support assistant. I can help you with information about our products, services, and company. What would you like to know?";
  }
  
  // Company information queries
  if (normalizedMessage.match(/\b(company|about|who are you|what is volthub|volthub|information about|tell me about)\b/)) {
    return `**About ${companyInfo.name}**\n\n${companyInfo.description}\n\n**Our Mission:** ${companyInfo.mission}\n\n**Established:** ${companyInfo.established}\n**Address:** ${companyInfo.address}\n\n**Our Services:**\n${companyInfo.services.map(s => `• ${s}`).join('\n')}\n\n**Product Categories:**\n${companyInfo.categories.map(c => `• ${c}`).join('\n')}\n\nHow can I help you with our products or services?`;
  }
  
  // Contact information
  if (normalizedMessage.match(/\b(contact|address|location|where|phone|email|reach|get in touch)\b/)) {
    return `**Contact Information:**\n\n**Address:** ${companyInfo.address}\n\nFor detailed contact information, please visit our Contact page. You can also reach out through our website's contact form.\n\nIs there anything specific about our products or services you'd like to know?`;
  }
  
  // Product category queries
  if (normalizedMessage.match(/\b(ev charging|electric vehicle|ev charger|charging station)\b/)) {
    const evProducts = products.filter(p => p.category === 'ev-charging');
    let response = `**EV Charging Station Products:**\n\nWe offer ${evProducts.length} EV charging solutions:\n\n`;
    evProducts.forEach(product => {
      response += `• ${product.name}${product.price ? ` - ${product.price}` : ''}\n`;
    });
    response += `\nWould you like details about a specific EV charging product?`;
    return response;
  }
  
  if (normalizedMessage.match(/\b(solar street|street light|solar light|street lighting)\b/)) {
    const solarProducts = products.filter(p => p.category === 'solar-street');
    let response = `**Solar Street Lighting Products:**\n\nWe offer ${solarProducts.length} solar street lighting solutions:\n\n`;
    solarProducts.forEach(product => {
      response += `• ${product.name}${product.price ? ` - ${product.price}` : ''}\n`;
    });
    response += `\nWould you like details about a specific solar street light product?`;
    return response;
  }
  
  if (normalizedMessage.match(/\b(smart home|ips|indoor power|home backup|residential power)\b/)) {
    const smartHomeProducts = products.filter(p => p.category === 'smart-home');
    let response = `**Smart Home IPS Products:**\n\nWe offer ${smartHomeProducts.length} smart home power solutions:\n\n`;
    smartHomeProducts.forEach(product => {
      response += `• ${product.name}${product.price ? ` - ${product.price}` : ''}\n`;
    });
    response += `\nWould you like details about a specific smart home IPS product?`;
    return response;
  }
  
  if (normalizedMessage.match(/\b(power supply|cabinet|container|energy storage|bess|battery)\b/)) {
    const powerProducts = products.filter(p => p.category === 'cabinet');
    let response = `**Power Supply Products:**\n\nWe offer ${powerProducts.length} power supply and energy storage solutions:\n\n`;
    powerProducts.forEach(product => {
      response += `• ${product.name}${product.price ? ` - ${product.price}` : ''}\n`;
    });
    response += `\nWould you like details about a specific power supply product?`;
    return response;
  }
  
  // Price queries - return ONLY price
  if (normalizedMessage.match(/\b(price|cost|how much|pricing|expensive|cheap|affordable|amount|purchase|buy|purchase price)\b/)) {
    if (contextProduct) {
      return getProductPrice(contextProduct);
    }
    const matchingProducts = findMatchingProducts(userMessage);
    if (matchingProducts.length > 0) {
      if (matchingProducts.length === 1) {
        return getProductPrice(matchingProducts[0]);
      } else {
        let response = `**Pricing Information:**\n\n`;
        matchingProducts.slice(0, 5).forEach(product => {
          if (product.price) {
            response += `• ${product.name}: ${product.price}\n`;
          } else {
            response += `• ${product.name}: Please contact us for pricing\n`;
          }
        });
        if (matchingProducts.length > 5) {
          response += `\n... and ${matchingProducts.length - 5} more products. Please specify which product you'd like pricing for.`;
        }
        return response;
      }
    }
    return "I can help you with pricing information. Could you please specify which product you're interested in? For example: 'What is the price of EV charging station?' or 'How much does a solar street light cost?'";
  }
  
  // Product search - prioritize context product if available
  if (contextProduct) {
    // Check if the question is about the current product
    const productKeywords = normalizeText(
      `${contextProduct.name} ${contextProduct.subtitle} ${contextProduct.tag || ''}`
    );
    const queryWords = normalizedMessage.split(/\s+/);
    const isAboutCurrentProduct = queryWords.some(word => 
      productKeywords.includes(word) || 
      normalizedMessage.includes('this') ||
      normalizedMessage.includes('it') ||
      normalizedMessage.includes('product')
    );
    
    // If asking about current product with general questions, provide full product info
    if (isAboutCurrentProduct && 
        normalizedMessage.match(/\b(what|tell me|information|details|about|describe)\b/) &&
        !normalizedMessage.match(/\b(price|cost|spec|specification|feature)\b/)) {
      return getProductInfo(contextProduct);
    }
  }
  
  const matchingProducts = findMatchingProducts(userMessage);
  if (matchingProducts.length > 0) {
    if (matchingProducts.length === 1) {
      // Check if asking for specific info
      if (normalizedMessage.match(/\b(price|cost|how much|pricing|amount)\b/)) {
        return getProductPrice(matchingProducts[0]);
      }
      if (normalizedMessage.match(/\b(spec|specification|specs|technical)\b/)) {
        return getProductSpecs(matchingProducts[0]);
      }
      if (normalizedMessage.match(/\b(features|feature|capabilities)\b/)) {
        return getProductFeatures(matchingProducts[0]);
      }
      // Default to full info if no specific request
      return getProductInfo(matchingProducts[0]);
    } else {
      let response = `I found ${matchingProducts.length} products matching your query:\n\n`;
      matchingProducts.slice(0, 5).forEach(product => {
        response += `**${product.name}**\n`;
        if (product.subtitle) response += `${product.subtitle}\n`;
        if (product.price) response += `Price: ${product.price}\n`;
        response += `\n`;
      });
      if (matchingProducts.length > 5) {
        response += `... and ${matchingProducts.length - 5} more products.\n\n`;
      }
      response += `Would you like detailed information about any specific product? Please mention the product name.`;
      return response;
    }
  }
  
  // Specifications queries - return ONLY specifications
  if (normalizedMessage.match(/\b(spec|specification|specs|technical|technical details|technical specs|technical specification|dimensions|capacity|power|voltage|current|wattage|output|input|rating)\b/)) {
    if (contextProduct) {
      return getProductSpecs(contextProduct);
    }
    const matchingProducts = findMatchingProducts(userMessage);
    if (matchingProducts.length > 0) {
      if (matchingProducts.length === 1) {
        return getProductSpecs(matchingProducts[0]);
      } else {
        return `I found ${matchingProducts.length} products. Please specify which product's specifications you need. For example: "${matchingProducts[0].name} specifications"`;
      }
    }
    return "I can provide detailed specifications for our products. Could you please specify which product you're interested in?";
  }
  
  // Features queries - return ONLY features
  if (normalizedMessage.match(/\b(features|feature|what does it have|capabilities|what can it do|benefits|advantages)\b/)) {
    if (contextProduct) {
      return getProductFeatures(contextProduct);
    }
    const matchingProducts = findMatchingProducts(userMessage);
    if (matchingProducts.length > 0) {
      if (matchingProducts.length === 1) {
        return getProductFeatures(matchingProducts[0]);
      } else {
        return `I found ${matchingProducts.length} products. Please specify which product's features you need. For example: "${matchingProducts[0].name} features"`;
      }
    }
    return "I can provide detailed features for our products. Could you please specify which product you're interested in?";
  }
  
  // Warranty queries
  if (normalizedMessage.match(/\b(warranty|guarantee|warranties|covered|repair|service)\b/)) {
    return "Most of our products come with a **3-year warranty**. This includes coverage for manufacturing defects and component failures under normal use conditions. For specific warranty terms and conditions for a particular product, please contact our sales team or visit the product detail page.";
  }
  
  // Installation queries
  if (normalizedMessage.match(/\b(install|installation|setup|how to install|install it|set up)\b/)) {
    return "VoltHub provides **end-to-end installation services** for all our products. Our team handles:\n\n• Site assessment and design\n• Engineering and planning\n• Professional installation\n• System testing and commissioning\n• Training and documentation\n\nFor installation inquiries, please contact our sales team to schedule a consultation and site visit.";
  }
  
  // Services queries
  if (normalizedMessage.match(/\b(service|services|what do you offer|what services|help|support)\b/)) {
    return `**Our Services:**\n\n${companyInfo.services.map(s => `• ${s}`).join('\n')}\n\n**Product Categories:**\n${companyInfo.categories.map(c => `• ${c}`).join('\n')}\n\nWe provide complete solutions from design to maintenance. What specific service or product are you interested in?`;
  }
  
  // Check if we can answer this question
  const canAnswer = canAnswerQuestion(userMessage, productId);
  
  if (!canAnswer) {
    // Return special marker for unanswered questions
    return `__CONTACT_REQUIRED__: I apologize, but I couldn't find a specific answer to your question: "${userMessage}"\n\nOur team would be happy to help you with this. Would you like me to forward your question to our support team?\n\nYou can also visit our Contact page to send your inquiry directly.`;
  }
  
  // Default response - offer to forward to contact
  return `I'm here to help you with information about VoltHub's products and services. You can ask me about:\n\n• Our company and services\n• Product information and specifications\n• Pricing\n• Installation services\n• Warranty information\n• Product categories (EV Charging, Solar Street Lights, Smart Home IPS, Power Supplies)\n\nIf I couldn't answer your question, I can help you contact our team directly. Would you like me to forward your question to our support team?`;
}

// Check if the chatbot can answer a question
export function canAnswerQuestion(userMessage: string, productId?: string | null): boolean {
  const normalizedMessage = normalizeText(userMessage);
  
  // Check if it matches any known patterns
  const hasGreeting = normalizedMessage.match(/\b(hi|hello|hey|greetings)\b/);
  const hasCompanyQuery = normalizedMessage.match(/\b(company|about|who are you|what is volthub|volthub)\b/);
  const hasContactQuery = normalizedMessage.match(/\b(contact|address|location|where|phone|email)\b/);
  const hasProductCategory = normalizedMessage.match(/\b(ev charging|solar street|smart home|power supply|cabinet|container)\b/);
  const hasPriceQuery = normalizedMessage.match(/\b(price|cost|how much|pricing|amount)\b/);
  const hasSpecQuery = normalizedMessage.match(/\b(spec|specification|specs|technical)\b/);
  const hasFeatureQuery = normalizedMessage.match(/\b(features|feature|capabilities)\b/);
  const hasWarrantyQuery = normalizedMessage.match(/\b(warranty|guarantee)\b/);
  const hasInstallQuery = normalizedMessage.match(/\b(install|installation|setup)\b/);
  const hasServiceQuery = normalizedMessage.match(/\b(service|services|what do you offer)\b/);
  
  // Check if there's a matching product
  const matchingProducts = findMatchingProducts(userMessage);
  
  // If product context exists, we can likely answer
  if (productId) {
    const product = getProductById(productId);
    if (product) return true;
  }
  
  // If any known pattern matches, we can answer
  if (hasGreeting || hasCompanyQuery || hasContactQuery || hasProductCategory || 
      hasPriceQuery || hasSpecQuery || hasFeatureQuery || hasWarrantyQuery || 
      hasInstallQuery || hasServiceQuery || matchingProducts.length > 0) {
    return true;
  }
  
  // If it's a very short message or unclear, offer to help
  if (normalizedMessage.length < 10) {
    return true; // We can handle short messages with default response
  }
  
  // Otherwise, we can't answer
  return false;
}

// Generate contact link with pre-filled question
export function generateContactLink(userMessage: string, productId?: string | null): string {
  const params = new URLSearchParams();
  params.set('subject', 'Chat Inquiry');
  params.set('details', userMessage);
  
  if (productId) {
    const product = getProductById(productId);
    if (product) {
      params.set('product', product.name);
      params.set('interest', 'Product Inquiry');
    }
  } else {
    params.set('interest', 'General Inquiry');
  }
  
  return `/contact?${params.toString()}`;
}

