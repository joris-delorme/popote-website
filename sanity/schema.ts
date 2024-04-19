import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/page/blockContent'
import home from './schemaTypes/page/home'
import legals from './schemaTypes/page/legals'
import navigation from './schemaTypes/navigation'
import siteConfig from './schemaTypes/site-config'
import marketingBanner from './schemaTypes/page/marketing-banner'
import author from './schemaTypes/author'
import article from './schemaTypes/article'
import category from './schemaTypes/category'
import hero from './schemaTypes/page/hero'
import faq from './schemaTypes/page/faq'
import footer from './schemaTypes/footer'
import feature from './schemaTypes/page/feature'
import price from './schemaTypes/page/price'
import founderLetter from './schemaTypes/founder-letter'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, home, navigation, siteConfig, marketingBanner, author, article, category, legals, hero, faq, footer, feature, price, founderLetter],
}
